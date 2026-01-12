import 'dotenv/config';
import { sendInviteeConfirmationEmail } from '../email';

async function testInviteeEmail() {
  try {
    console.log('=== INVITEE EMAIL TEST ===\n');
    
    // Check environment variables
    const resendKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL;
    
    console.log('Environment Check:');
    console.log('  RESEND_API_KEY:', resendKey ? `✅ Present (${resendKey.substring(0, 10)}...)` : '❌ Missing');
    console.log('  FROM_EMAIL:', fromEmail || '❌ Missing (using default)');
    console.log('');
    
    // Test email sending
    const testEmail = process.argv[2] || 'test@example.com';
    const testFirstName = process.argv[3] || 'Test';
    
    console.log(`Sending test invitee confirmation email to: ${testEmail}`);
    console.log(`First name: ${testFirstName}\n`);
    
    const result = await sendInviteeConfirmationEmail(testEmail, testFirstName);
    
    if (result.success) {
      console.log('\n✅ Test invitee email sent successfully!');
      console.log(`Check inbox: ${testEmail}`);
    } else {
      console.log('\n❌ Failed to send test invitee email');
      console.log('Error:', result.error);
      process.exit(1);
    }
    
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Error:', error);
    if (error instanceof Error) {
      console.error('Message:', error.message);
      console.error('Stack:', error.stack);
    }
    process.exit(1);
  }
}

testInviteeEmail();
