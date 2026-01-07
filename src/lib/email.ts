import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY environment variable is not set');
}

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPasswordResetEmail(email: string, resetLink: string) {
  try {
    await resend.emails.send({
      from: 'noreply@yourdomain.com', // Update with your verified domain
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

export async function sendFormSubmissionEmail(adminEmails: string[], formData: {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  shirtSize?: string;
  sneakerSize?: string;
}) {
  try {
    const emailContent = `
      <h2>New ANTA First Access RSVP</h2>
      ${formData.firstName ? `<p><strong>First Name:</strong> ${formData.firstName}</p>` : ''}
      ${formData.lastName ? `<p><strong>Last Name:</strong> ${formData.lastName}</p>` : ''}
      ${formData.email ? `<p><strong>Email:</strong> ${formData.email}</p>` : ''}
      ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
      ${formData.shirtSize ? `<p><strong>Shirt Size:</strong> ${formData.shirtSize}</p>` : ''}
      ${formData.sneakerSize ? `<p><strong>Sneaker Size:</strong> ${formData.sneakerSize}</p>` : ''}
    `;

    await resend.emails.send({
      from: 'noreply@yourdomain.com', // Update with your verified domain
      to: adminEmails,
      subject: 'New ANTA First Access RSVP',
      html: emailContent,
    });
    return { success: true };
  } catch (error) {
    console.error('Error sending form submission email:', error);
    return { success: false, error };
  }
}

