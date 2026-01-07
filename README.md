# Astro Microsite Boilerplate

A quick-start boilerplate for creating microsites with admin authentication, form submissions, and email notifications.

## Features

- **Neon DB Integration** - PostgreSQL database for admin management
- **Resend Email Service** - Send emails for password resets and form submissions
- **Admin Authentication** - Secure login system with password reset
- **Form Submissions** - Contact form that emails all admins
- **Default Admin** - Pre-configured admin user (username: `times10`, password: `shadow01`)

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Neon Database
   DATABASE_URL=postgresql://user:password@host.neon.tech/dbname?sslmode=require
   
   # Resend API Key
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   
   # App Configuration
   APP_URL=http://localhost:4321
   SESSION_SECRET=your-secret-key-change-this-in-production
   ```

3. **Set up Database**
   
   Run the seed script to create the admin table and default admin user:
   ```bash
   npm run db:seed
   ```

4. **Update Email Domain**
   
   In `src/lib/email.ts`, update the `from` email address to use your verified Resend domain:
   ```typescript
   from: 'noreply@yourdomain.com', // Change this
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

## Usage

### Customizing the Microsite

Edit `src/pages/index.astro` to customize:
- Title (`title` variable)
- Body text (`bodyText` variable)
- Form fields
- Styling

### Admin Login

- URL: `/login`
- Default credentials:
  - Username: `times10`
  - Password: `shadow01`

### Password Reset

1. Go to `/reset-password`
2. Enter admin email address
3. Check email for reset link
4. Click link to reset password

### Form Submissions

The main page (`/`) includes a contact form that:
- Collects name (optional), email (optional), and message (required)
- Sends email to all admins in the database
- Shows success message after submission

## Project Structure

```
src/
  lib/
    auth.ts          # Authentication utilities
    session.ts       # Session management
    email.ts         # Email sending functions
    db/
      index.ts       # Database connection
      schema.ts      # Database schema
      seed.ts        # Database seeding script
  pages/
    index.astro     # Main microsite page
    login.astro      # Admin login page
    reset-password.astro  # Password reset request
    reset-password/[token].astro  # Password reset form
  layouts/
    Layout.astro     # Base layout
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run db:seed` - Seed database with default admin

## Security Notes

- Change the default admin password after first login
- Use a strong `SESSION_SECRET` in production
- Ensure your Resend domain is verified
- Use HTTPS in production
- Keep your database credentials secure

