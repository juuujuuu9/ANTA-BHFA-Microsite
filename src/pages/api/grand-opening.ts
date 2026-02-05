import type { APIRoute } from 'astro';
import { createGrandOpeningEntry, getGrandOpeningEntryCount } from '@/lib/submissions';
import { getAllAdmins } from '@/lib/auth';
import { sendGrandOpeningSubmissionEmail, sendUserRSVPConfirmationEmail } from '@/lib/email';

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

    const entry = await createGrandOpeningEntry({
      firstName: String(firstName).trim(),
      lastName: String(lastName).trim(),
      email: String(email).trim(),
      additionalGuests: String(additionalGuests),
    });

    // Notify all admins
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

    // Send confirmation email to invitee
    try {
      const userResult = await sendUserRSVPConfirmationEmail(entry!.email);
      if (!userResult.success) {
        console.error('Invitee confirmation email failed:', userResult.error);
      }
    } catch (emailError) {
      console.error('Failed to send invitee confirmation:', emailError);
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
