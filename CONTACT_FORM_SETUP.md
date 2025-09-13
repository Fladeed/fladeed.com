# Contact Form Setup Guide

## Quick Setup (5 minutes)

### Option 1: Web3Forms (Recommended - Free)

1. Go to [Web3Forms](https://web3forms.com)
2. Enter your email address and click "Create Access Key"
3. Copy the generated access key
4. Open `.env.local` file in your project root
5. Replace `your_web3forms_access_key_here` with your actual access key
6. Save the file and restart your development server

That's it! Your contact form will now send emails to your inbox.

### Option 2: Resend API

1. Go to [Resend](https://resend.com) and create an account
2. Generate an API key in your dashboard
3. In `.env.local`, comment out the Web3Forms line and add:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

### Option 3: SendGrid API

1. Go to [SendGrid](https://sendgrid.com) and create an account
2. Generate an API key in your dashboard
3. In `.env.local`, add:
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   ```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the submission
4. If you don't receive an email, check the browser console for error messages

## Troubleshooting

- Make sure to restart your development server after changing `.env.local`
- Check that your email address is correct in the environment variables
- Verify your API key is valid and has the necessary permissions
- Check your spam folder for test emails

## Production Deployment

For production (Vercel/Netlify), add your environment variables in your hosting platform's dashboard, not in `.env.local`.