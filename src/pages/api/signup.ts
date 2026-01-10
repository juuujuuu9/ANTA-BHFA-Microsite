import type { APIRoute } from 'astro';
import { createFormSubmission } from '@/lib/submissions';
import { getAllAdmins } from '@/lib/auth';
import { sendFormSubmissionEmail } from '@/lib/email';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    const { firstName, lastName, email, phone, shirtSize, sneakerSize, creatorEmail, media, instagramProfile } = data;
    
    // Validate required fields
    if (!firstName || !lastName || !email) {
      return new Response(
        JSON.stringify({ success: false, error: 'First name, last name, and email are required' }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }
    
    // Save to database
    let submission;
    try {
      submission = await createFormSubmission({
        firstName,
        lastName,
        email,
        phone,
        shirtSize,
        sneakerSize,
        creatorEmail,
        media,
        instagramProfile,
      });
    } catch (dbError) {
      console.error('Error saving submission to database:', dbError);
      const errorMessage = dbError instanceof Error ? dbError.message : String(dbError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Failed to save submission. Please try again.',
          details: import.meta.env.MODE === 'development' ? errorMessage : undefined
        }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json' } 
        }
      );
    }
    
    // Get total count of entries after saving
    let totalEntries = 0;
    try {
      const { getTotalSubmissionCount } = await import('@/lib/submissions');
      totalEntries = await getTotalSubmissionCount();
    } catch (countError) {
      console.error('Error getting total submission count:', countError);
      // Continue even if count fails
    }
    
    // Send email to admins
    try {
      console.log('=== EMAIL NOTIFICATION PROCESS ===');
      const admins = await getAllAdmins();
      console.log('Total admins found:', admins.length);
      console.log('Admin details:', admins.map(a => ({ username: a.username, email: a.email })));
      
      const adminEmails = admins.map(admin => admin.email).filter(Boolean);
      console.log('Admin emails to notify:', adminEmails);
      
      if (adminEmails.length > 0) {
        console.log('Sending email notification...');
        const result = await sendFormSubmissionEmail(adminEmails, {
          firstName,
          lastName,
          email,
          phone,
          shirtSize,
          sneakerSize,
          creatorEmail,
          media,
          instagramProfile,
          submittedAt: submission.createdAt,
          totalEntries,
        });
        
        if (result.success) {
          console.log('✅ Email notification sent successfully');
        } else {
          console.error('❌ Failed to send email:', result.error);
          // Don't fail the request if email fails, submission is saved
        }
      } else {
        console.warn('⚠️ No admin emails found to send notification to');
      }
    } catch (emailError) {
      console.error('❌ Error in email notification process:', emailError);
      if (emailError instanceof Error) {
        console.error('Error message:', emailError.message);
        console.error('Error stack:', emailError.stack);
      }
      // Don't fail the request if email fails, submission is saved
    }
    
    return new Response(
      JSON.stringify({ success: true }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  } catch (error) {
    console.error('API error:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Something went wrong. Please try again.',
        details: import.meta.env.MODE === 'development' ? errorMessage : undefined,
        stack: import.meta.env.MODE === 'development' ? errorStack : undefined
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
};

