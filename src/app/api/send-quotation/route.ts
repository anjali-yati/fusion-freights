import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Beautiful HTML Email
  const htmlContent = `
    <div style="background-color:#f4f4f7; padding: 30px; font-family: Arial, sans-serif;">
      <div style="max-width:600px; margin:0 auto; background:white; padding:20px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
        <h2 style="color:#4F46E5;">🚛 New Quotation Request</h2>
        <p style="font-size:16px; color:#333;">You have received a new quotation inquiry from your website:</p>
        
        <div style="margin-top:20px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="margin-top:10px; padding:15px; background-color:#f0f4ff; border-left:4px solid #4F46E5; border-radius:6px;">
            <p style="margin:0;">${message}</p>
          </div>
        </div>

        <p style="margin-top:30px; font-size:12px; color:#888;">This email was generated automatically from your website quotation form.</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Quotation Request from ${name}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
