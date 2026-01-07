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
      // Continue even if DB save fails, still try to send email
    }
    
    // Send email to admins
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
    
    return new Response(
      JSON.stringify({ success: true }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  } catch (error) {
    console.error('API error:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Something went wrong. Please try again.' }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
};

