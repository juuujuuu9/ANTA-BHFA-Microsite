import type { APIRoute } from 'astro';
import { createGrandOpeningEntry, getGrandOpeningEntryCount } from '@/lib/submissions';
import { isFormClosedByTime } from '@/lib/form-closure';
import { getAllAdmins } from '@/lib/auth';
import { sendGrandOpeningSubmissionEmail } from '@/lib/email';

const MAX_ENTRIES = 500;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { firstName, lastName, email, additionalGuests } = data;

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || additionalGuests == null || additionalGuests === '') {
      return new Response(
        JSON.stringify({ success: false, error: 'First name, last name, email, and additional guests are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const closedByTime = isFormClosedByTime();
    if (closedByTime) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Registration is now closed. Thank you for your interest!',
          limitReached: true,
        }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const count = await getGrandOpeningEntryCount();
    if (count >= MAX_ENTRIES) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Registration is now closed. We have reached the maximum number of entries.',
          limitReached: true,
        }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const entry = await createGrandOpeningEntry({
      firstName: String(firstName).trim(),
      lastName: String(lastName).trim(),
      email: String(email).trim(),
      additionalGuests: String(additionalGuests),
    });

    // Notify all admins (submitters do not receive confirmation)
    try {
      const admins = await getAllAdmins();
      const adminEmails = admins.map((a) => a.email).filter(Boolean);
      if (adminEmails.length > 0) {
        const totalEntries = await getGrandOpeningEntryCount();
        await sendGrandOpeningSubmissionEmail(adminEmails, {
          firstName: entry!.firstName,
          lastName: entry!.lastName,
          email: entry!.email,
          additionalGuests: entry!.additionalGuests,
          submittedAt: entry!.createdAt,
          totalEntries,
        });
      }
    } catch (emailError) {
      console.error('Failed to send admin notification:', emailError);
      // Do not fail the request; submission is saved
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Grand opening API error:', error);
    const message = error instanceof Error ? error.message : String(error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Something went wrong. Please try again.',
        ...(import.meta.env.MODE === 'development' && { details: message }),
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
