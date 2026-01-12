import { Resend } from 'resend';

function getResendApiKey(): string {
  // Try import.meta.env first (Astro/Vite), then process.env (Node.js)
  let key: string | undefined;
  
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      key = import.meta.env.RESEND_API_KEY;
    }
  } catch {
    // import.meta not available, will use process.env
  }
  
  key = key || process.env.RESEND_API_KEY;
  
  if (!key) {
    throw new Error('RESEND_API_KEY environment variable is not set');
  }
  
  return key;
}

// Lazy-initialize Resend client to avoid errors at module load time
let resendInstance: Resend | null = null;

function getResend(): Resend {
  if (!resendInstance) {
    const apiKey = getResendApiKey();
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

function getFromEmail(): string {
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      return import.meta.env.FROM_EMAIL || process.env.FROM_EMAIL || 'noreply@yourdomain.com';
    }
  } catch {
    // import.meta not available
  }
  return process.env.FROM_EMAIL || 'noreply@yourdomain.com';
}

export async function sendPasswordResetEmail(email: string, resetLink: string) {
  try {
    const fromEmail = getFromEmail();
    const resendClient = getResend();
    await resendClient.emails.send({
      from: `ANTA <${fromEmail}>`,
      to: email,
      subject: 'Password Reset Request',
      html: `
        <h2>Password Reset Request</h2>
        <p>You requested to reset your password. Click the link below to reset it:</p>
        <p><a href="${resetLink}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a></p>
        <p>This link will expire in 1 hour.</p>
        <p>If you didn't request this, please ignore this email.</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Error sending password reset email:', error);
    return { success: false, error };
  }
}

export async function sendInviteeConfirmationEmail(inviteeEmail: string, firstName?: string) {
  try {
    const fromEmail = getFromEmail();
    const resendClient = getResend();
    
    const greeting = firstName ? `Hi ${firstName},` : 'Hi there,';
    
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; line-height: 1.6; color: #333;">
        <p style="margin: 0 0 16px 0;">${greeting}</p>
        <p style="margin: 0 0 16px 0;">You're officially confirmed for ANTA Media & VIP Day, we're looking forward to seeing you this Saturday!</p>
        <p style="margin: 0 0 16px 0;">You'll have first access to view the store before it opens to the public, along with a few special experiences on-site. Enjoy matcha from Frauth, Layla's Bagels, and custom chain stitching during the event.</p>
        <p style="margin: 0 0 16px 0;">More details to come soon, but please don't hesitate to reach out if you have any questions in the meantime.</p>
        <p style="margin: 0;">See you soon!</p>
      </div>
    `;
    
    await resendClient.emails.send({
      from: `ANTA <${fromEmail}>`,
      to: inviteeEmail,
      subject: 'ANTA Media & VIP Day - You\'re Confirmed!',
      html: emailContent,
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error sending invitee confirmation email:', error);
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
}

export async function sendFormSubmissionEmail(adminEmails: string[], formData: {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  shirtSize?: string;
  sneakerSize?: string;
  creatorEmail?: string;
  media?: string;
  instagramProfile?: string;
  submittedAt?: Date;
  totalEntries?: number;
}) {
  try {
    console.log('=== EMAIL SENDING DEBUG ===');
    console.log('Admin emails to send to:', adminEmails);
    console.log('Number of admins:', adminEmails.length);
    
    if (!adminEmails || adminEmails.length === 0) {
      console.error('❌ No admin emails provided');
      return { success: false, error: 'No admin emails provided' };
    }
    
    // Format date and time
    const submittedDate = formData.submittedAt 
      ? new Date(formData.submittedAt).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      : new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
    
    const submittedTime = formData.submittedAt
      ? new Date(formData.submittedAt).toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      : new Date().toLocaleTimeString('en-US', { 
          hour: '2-digit', 
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #D7000F; padding-bottom: 10px;">New ANTA First Access RSVP</h2>
        
        <div style="background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Entry Information</h3>
          ${formData.firstName ? `<p style="margin: 8px 0;"><strong>First Name:</strong> ${formData.firstName}</p>` : ''}
          ${formData.lastName ? `<p style="margin: 8px 0;"><strong>Last Name:</strong> ${formData.lastName}</p>` : ''}
          ${formData.email ? `<p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>` : ''}
          ${formData.phone ? `<p style="margin: 8px 0;"><strong>Phone:</strong> ${formData.phone}</p>` : ''}
          ${formData.shirtSize ? `<p style="margin: 8px 0;"><strong>Shirt Size:</strong> ${formData.shirtSize}</p>` : ''}
          ${formData.sneakerSize ? `<p style="margin: 8px 0;"><strong>Sneaker Size:</strong> ${formData.sneakerSize}</p>` : ''}
        </div>
        
        ${(formData.creatorEmail || formData.media || formData.instagramProfile) ? `
        <div style="background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #333;">Creator/Media Information</h3>
          ${formData.creatorEmail ? `<p style="margin: 8px 0;"><strong>Creator Email:</strong> <a href="mailto:${formData.creatorEmail}">${formData.creatorEmail}</a></p>` : ''}
          ${formData.media ? `<p style="margin: 8px 0;"><strong>Media:</strong> ${formData.media}</p>` : ''}
          ${formData.instagramProfile ? `<p style="margin: 8px 0;"><strong>Instagram Profile:</strong> ${formData.instagramProfile}</p>` : ''}
        </div>
        ` : ''}
        
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Date:</strong> ${submittedDate}</p>
          <p style="margin: 5px 0;"><strong>Time:</strong> ${submittedTime}</p>
          <p style="margin: 5px 0;"><strong>Total Entries:</strong> ${formData.totalEntries ?? 'N/A'}</p>
        </div>
      </div>
    `;

    const fromEmail = getFromEmail();
    const apiKey = getResendApiKey();
    console.log('From email:', fromEmail);
    console.log('Resend API key present:', !!apiKey);
    console.log('Resend API key starts with "re_":', apiKey?.startsWith('re_'));
    
    console.log('Attempting to send email via Resend...');
    const resendClient = getResend();
    const result = await resendClient.emails.send({
      from: `ANTA <${fromEmail}>`,
      to: adminEmails,
      subject: 'New ANTA First Access RSVP',
      html: emailContent,
    });
    
    console.log('✅ Email sent successfully!');
    console.log('Resend response:', JSON.stringify(result, null, 2));
    return { success: true, resendResult: result };
  } catch (error) {
    console.error('❌ Error sending form submission email:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      
      // Check for common Resend errors
      if (error.message.includes('domain') || error.message.includes('Domain')) {
        console.error('⚠️  This usually means the FROM_EMAIL domain is not verified in Resend.');
        console.error('   Please verify your domain in the Resend dashboard: https://resend.com/domains');
      }
      if (error.message.includes('API key') || error.message.includes('Unauthorized')) {
        console.error('⚠️  This usually means the RESEND_API_KEY is invalid or missing.');
        console.error('   Please check your .env file and Resend dashboard.');
      }
      
      if ('response' in error) {
        console.error('Resend API response:', JSON.stringify((error as any).response, null, 2));
      }
    }
    return { success: false, error: error instanceof Error ? error.message : String(error) };
  }
}

