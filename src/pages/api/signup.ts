import type { APIRoute } from 'astro';
import { createFormSubmission } from '@/lib/submissions';
import { getAllAdmins } from '@/lib/auth';
import { sendFormSubmissionEmail } from '@/lib/email';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    const { firstName, lastName, email, phone, shirtSize, sneakerSize } = data;
    
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
    try {
      await createFormSubmission({
        firstName,
        lastName,
        email,
        phone,
        shirtSize,
        sneakerSize,
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
    
    // Send email to admins
    try {
      const admins = await getAllAdmins();
      const adminEmails = admins.map(admin => admin.email);
      
      if (adminEmails.length > 0) {
        const result = await sendFormSubmissionEmail(adminEmails, {
          firstName,
          lastName,
          email,
          phone,
          shirtSize,
          sneakerSize,
        });
        
        if (!result.success) {
          console.error('Failed to send email:', result.error);
          // Don't fail the request if email fails, submission is saved
        }
      }
    } catch (emailError) {
      console.error('Error sending email:', emailError);
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

