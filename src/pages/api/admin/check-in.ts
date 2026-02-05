import type { APIRoute } from 'astro';
import { requireAuth } from '../../../lib/session';
import { updateGrandOpeningCheckIn } from '../../../lib/submissions';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    requireAuth(cookies);

    const body = await request.json();
    const { id, checkedIn } = body;

    if (id == null || typeof id !== 'number') {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid entry ID' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    if (typeof checkedIn !== 'boolean') {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid checkedIn value' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    await updateGrandOpeningCheckIn(id, checkedIn);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: unknown) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return new Response(
        JSON.stringify({ success: false, error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }
    console.error('Check-in API error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to update check-in' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
