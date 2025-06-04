import { NextResponse } from "next/server";
import { createTransport, SendMailOptions } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const mailOptions: SendMailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<div><h1>New Contact Form Submission</h1><p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p></div>`,
    };
    const info = await transporter.sendMail(mailOptions);
    if (info)
      return NextResponse.json(
        { message: "Message sent successfully." },
        { status: 200 },
      );
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to send the email. Please try again later!";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
