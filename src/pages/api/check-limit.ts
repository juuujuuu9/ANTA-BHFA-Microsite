import type { APIRoute } from 'astro';
import { getTotalSubmissionCount } from '@/lib/submissions';
import { isFormClosedByTime } from '@/lib/form-closure';

const MAX_ENTRIES = 50;

export const GET: APIRoute = async () => {
  try {
    // Check if form is closed by time (5pm today)
    const closedByTime = isFormClosedByTime();
    
    const currentCount = await getTotalSubmissionCount();
    const limitReached = currentCount >= MAX_ENTRIES || closedByTime;
    
    return new Response(
      JSON.stringify({ 
        currentCount,
        maxEntries: MAX_ENTRIES,
        limitReached,
        closedByTime
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
