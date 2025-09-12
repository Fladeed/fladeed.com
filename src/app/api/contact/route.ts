import { NextRequest, NextResponse } from 'next/server';

// Vercel-compatible contact form using multiple email service options
export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Option 1: Web3Forms (easiest - no signup needed)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const formData = new FormData();
      formData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('company', company || '');
      formData.append('message', message);
      formData.append('from_name', 'Fladeed Contact Form');
      formData.append('subject', `New Contact Form Submission from ${name}`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        return NextResponse.json(
          { success: true, message: 'Email sent successfully via Web3Forms' },
          { status: 200 }
        );
      }
    }

    // Option 2: Resend (if API key is provided)
    if (process.env.RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['contact@fladeed.com'],
            reply_to: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <title>New Contact Form Submission</title>
              </head>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                  <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
                    New Contact Form Submission
                  </h2>
                  
                  <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong style="color: #374151;">Name:</strong> ${name}</p>
                    <p><strong style="color: #374151;">Email:</strong> 
                      <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
                    </p>
                    <p><strong style="color: #374151;">Company:</strong> ${company || 'Not provided'}</p>
                  </div>
                  
                  <div style="margin: 20px 0;">
                    <h3 style="color: #374151;">Message:</h3>
                    <div style="background: #fff; border: 1px solid #e5e7eb; padding: 15px; border-radius: 6px;">
                      ${message.replace(/\n/g, '<br>')}
                    </div>
                  </div>
                  
                  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
                    <p>This email was sent from the Fladeed contact form.</p>
                    <p>Reply directly to this email to respond to ${name}.</p>
                  </div>
                </div>
              </body>
              </html>
            `,
          }),
        });

        if (response.ok) {
          return NextResponse.json(
            { success: true, message: 'Email sent successfully via Resend' },
            { status: 200 }
          );
        }
      } catch (resendError) {
        console.error('Resend error:', resendError);
      }
    }

    // Option 3: SendGrid (if API key is provided)
    if (process.env.SENDGRID_API_KEY) {
      try {
        const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [{ email: 'contact@fladeed.com' }],
                subject: `New Contact Form Submission from ${name}`,
              },
            ],
            from: { email: 'noreply@fladeed.com' },
            reply_to: { email: email },
            content: [
              {
                type: 'text/html',
                value: `
                  <h2>New Contact Form Submission</h2>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                  <p><strong>Message:</strong></p>
                  <p>${message.replace(/\n/g, '<br>')}</p>
                `,
              },
            ],
          }),
        });

        if (response.ok) {
          return NextResponse.json(
            { success: true, message: 'Email sent successfully via SendGrid' },
            { status: 200 }
          );
        }
      } catch (sendgridError) {
        console.error('SendGrid error:', sendgridError);
      }
    }

    // If no email service is configured
    return NextResponse.json(
      { 
        error: 'No email service configured. Please set up WEB3FORMS_ACCESS_KEY, RESEND_API_KEY, or SENDGRID_API_KEY.',
        details: 'Add one of the supported email service API keys to your environment variables.'
      },
      { status: 500 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}