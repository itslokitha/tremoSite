import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: 'Tremo Management <info@tremomanagement.com>',
      to: email,
      subject: "We've Received Your Message!",
      react: (
        <>
          <h1>Welcome to Tremo Management!</h1>
          <p>Hello,</p>
          <p>Thank you for reaching out to us at Tremo Management! We&apos;re thrilled to have the opportunity to connect with you. Your message is important to us, and we&apos;ve already set things in motion to ensure it gets the attention it deserves.</p>
          <p>One of our team members will review your inquiry and respond promptly within the next 24-48 hours. In the meantime, feel free to browse through our latest projects and insights on our website.</p>
          <p>We appreciate your interest and are looking forward to assisting you.</p>
          <br></br>
          <p>Warm regards,</p>
          <p>The Tremo Team</p>
        </>
      ),
    });

    await resend.emails.send({
      from: 'Tremo Management <info@tremomanagement.com>',
      to: 'anuja.lokitha@outlook.com',
      subject: "Tremo Website - Contact Form",
      react: (
        <>
        <p>email: {email}</p>
        <p>subject: {subject}</p>
        <p>message: {message}</p>
        </>
      ),
    });
  return NextResponse.json(data);
  }
   catch (error) {
    return NextResponse.json({ error });
  }
}
