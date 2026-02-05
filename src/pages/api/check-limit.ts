import type { APIRoute } from 'astro';
import { getTotalSubmissionCount } from '@/lib/submissions';

export const GET: APIRoute = async () => {
  try {
    const currentCount = await getTotalSubmissionCount();

    return new Response(
      JSON.stringify({
        currentCount,
        limitReached: false,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error checking limit:', error);
    return new Response(
      JSON.stringify({
        currentCount: 0,
        limitReached: false,
        error: 'Failed to check limit',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
