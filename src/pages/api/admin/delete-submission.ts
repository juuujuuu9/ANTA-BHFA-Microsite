import type { APIRoute } from 'astro';
import { requireAuth } from '../../../lib/session';
import { deleteSubmission } from '../../../lib/submissions';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // Check authentication
    requireAuth(cookies);
    
    const body = await request.json();
    const { id } = body;
    
    if (!id || typeof id !== 'number') {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid submission ID' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    await deleteSubmission(id);
    
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    if (error.message === 'Unauthorized') {
      return new Response(
        JSON.stringify({ success: false, error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    console.error('Error deleting submission:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to delete submission' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

