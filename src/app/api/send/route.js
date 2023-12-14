import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { fullName, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "zoho",
      host: "smtpro.zoho.in",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_MAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });

    const mailOption = {
        from: "immerentertainment@zohomail.com",
        to: "hello@immer.world",
        subject: "New message from Immer World",
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f8f8; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #3498db; text-align: center; margin-bottom: 20px; font-size: 24px;">🌟 New Message 🌟</h2>
            <ul style="list-style-type: none; padding: 0;">
              <li style="margin-bottom: 15px;">
                <span style="color: #555; font-size: 16px;"><strong>Name:</strong></span> ${fullName}
              </li>
              <li style="margin-bottom: 15px;">
                <span style="color: #555; font-size: 16px;"><strong>Message:</strong></span> ${message}
              </li>
              <li>
                <span style="color: #555; font-size: 16px;"><strong>Email:</strong></span> ${email}
              </li>
            </ul>
          </div>
        `,
      };
      

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to Send Email", error: error.message },
      { status: 500 }
    );
  }
}
