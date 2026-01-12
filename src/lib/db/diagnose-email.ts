import 'dotenv/config';
import { validateEmailConfig, sendInviteeConfirmationEmail } from '../email';

async function diagnoseEmail() {
  console.log('=== EMAIL CONFIGURATION DIAGNOSTICS ===\n');
  
  // Check environment variables
  const configCheck = validateEmailConfig();
  
  console.log('Configuration Check:');
  if (configCheck.valid) {
    console.log('  ✅ Email configuration is valid\n');
  } else {
    console.log('  ❌ Email configuration has errors:');
    configCheck.errors.forEach(error => {
      console.log(`    - ${error}`);
    });
    console.log('');
  }
  
  // Show current values (masked)
  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL;
  
  console.log('Environment Variables:');
  console.log('  RESEND_API_KEY:', resendKey 
    ? `✅ Set (${resendKey.substring(0, 10)}...${resendKey.substring(resendKey.length - 4)})` 
    : '❌ Not set');
  console.log('  FROM_EMAIL:', fromEmail || '❌ Not set (using default)');
  console.log('');
  
  if (!configCheck.valid) {
    console.log('⚠️  Please fix the configuration errors above before testing email sending.\n');
    console.log('Common fixes:');
    console.log('  1. Set RESEND_API_KEY in your .env file (get it from https://resend.com/api-keys)');
    console.log('  2. Set FROM_EMAIL to a verified domain in Resend (verify at https://resend.com/domains)');
    console.log('  3. Make sure your .env file is in the project root and loaded correctly\n');
    process.exit(1);
  }
  
  // Test email sending
  const testEmail = process.argv[2];
  if (!testEmail) {
    console.log('Usage: npm run diagnose:email <test-email@example.com>');
    console.log('Example: npm run diagnose:email user@example.com\n');
    process.exit(0);
  }
  
  console.log(`Testing email send to: ${testEmail}\n`);
  
  try {
    const result = await sendInviteeConfirmationEmail(testEmail, 'Test');
    
    if (result.success) {
      console.log('✅ Test email sent successfully!');
      console.log(`   Check the inbox for: ${testEmail}`);
      console.log('   If you don\'t see it, check:');
      console.log('   - Spam/junk folder');
      console.log('   - Resend dashboard (https://resend.com/emails) for delivery status');
    } else {
      console.log('❌ Failed to send test email');
      console.log(`   Error: ${result.error}`);
      console.log('\n   Troubleshooting:');
      console.log('   - Verify your domain is verified in Resend: https://resend.com/domains');
      console.log('   - Check your API key is valid: https://resend.com/api-keys');
      console.log('   - Review server logs for detailed error messages');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Exception during email test:', error);
    if (error instanceof Error) {
      console.error('   Message:', error.message);
      console.error('   Stack:', error.stack);
    }
    process.exit(1);
  }
  
  process.exit(0);
}

diagnoseEmail();
