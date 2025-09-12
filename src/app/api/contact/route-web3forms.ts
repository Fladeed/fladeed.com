import { NextRequest, NextResponse } from 'next/server';

// Alternative: Using Web3Forms (simpler, no email credentials needed)
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

    // Web3Forms API
    const formData = new FormData();
    formData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY!);
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
        { success: true, message: 'Email sent successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}