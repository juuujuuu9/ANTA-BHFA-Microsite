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
  name?: string;
  email?: string;
  message: string;
}) {
  try {
    const emailContent = `
      <h2>New Form Submission</h2>
      ${formData.name ? `<p><strong>Name:</strong> ${formData.name}</p>` : ''}
      ${formData.email ? `<p><strong>Email:</strong> ${formData.email}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `;

    await resend.emails.send({
      from: 'noreply@yourdomain.com', // Update with your verified domain
      to: adminEmails,
      subject: 'New Form Submission',
      html: emailContent,
    });
    return { success: true };
  } catch (error) {
    console.error('Error sending form submission email:', error);
    return { success: false, error };
  }
}

