import type { APIRoute } from 'astro';
import { getTotalSubmissionCount } from '@/lib/submissions';

const MAX_ENTRIES = 50;

export const GET: APIRoute = async () => {
  try {
    const currentCount = await getTotalSubmissionCount();
    const limitReached = currentCount >= MAX_ENTRIES;
    
    return new Response(
      JSON.stringify({ 
        currentCount,
        maxEntries: MAX_ENTRIES,
        limitReached
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  } catch (error) {
    console.error('Error checking limit:', error);
    return new Response(
      JSON.stringify({ 
        currentCount: 0,
        maxEntries: MAX_ENTRIES,
        limitReached: false,
        error: 'Failed to check limit'
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
};
