import 'dotenv/config';
import { Resend } from 'resend';

async function checkEmailStatus() {
  const emailId = process.argv[2];
  
  if (!emailId) {
    console.log('Usage: npm run check:email-status <email-id>');
    console.log('Example: npm run check:email-status 762ba32b-3bf3-4f19-8cbf-6b3bb61c6576');
    console.log('\nTo find email IDs, check your server logs or Resend dashboard: https://resend.com/emails');
    process.exit(0);
  }
  
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('❌ RESEND_API_KEY not set in environment variables');
    process.exit(1);
  }
  
  try {
    const resend = new Resend(apiKey);
    
    console.log(`Checking status for email ID: ${emailId}\n`);
    
    // Note: Resend API doesn't have a direct "get email status" endpoint in the SDK
    // You need to check the Resend dashboard or use webhooks
    console.log('⚠️  Resend SDK doesn\'t provide a direct status check endpoint.');
    console.log('   Please check the email status in the Resend dashboard:\n');
    console.log(`   https://resend.com/emails/${emailId}\n`);
    console.log('Or visit: https://resend.com/emails to see all emails\n');
    console.log('Common delivery issues:');
    console.log('  1. Email in spam folder - ask recipient to check spam/junk');
    console.log('  2. Domain not verified - verify at https://resend.com/domains');
    console.log('  3. SPF/DKIM records not configured - check domain settings');
    console.log('  4. Email provider blocking - check recipient\'s email provider');
    console.log('  5. Invalid email address - verify the email format');
    
  } catch (error) {
    console.error('❌ Error:', error);
    if (error instanceof Error) {
      console.error('Message:', error.message);
    }
    process.exit(1);
  }
}

checkEmailStatus();
