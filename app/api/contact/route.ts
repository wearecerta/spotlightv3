import { NextResponse } from "next/server";
import Mailjet from "node-mailjet";

export const runtime = "nodejs"; 

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY!,
  apiSecret: process.env.MAILJET_SECRET_KEY!,
});

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, captchaToken } = await req.json();

    if (!captchaToken) {
      return NextResponse.json({ error: "Captcha token missing" }, { status: 400 });
    }

    const params = new URLSearchParams();
    params.append("secret", process.env.RECAPTCHA_SECRET_KEY!);
    params.append("response", captchaToken);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000); 

    let captchaData;
    try {
      const captchaRes = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params.toString(),
          signal: controller.signal,
        }
      );
      captchaData = await captchaRes.json();
    } catch (err) {
      return NextResponse.json({ error: "Failed to verify captcha" }, { status: 500 });
    } finally {
      clearTimeout(timeout);
    }

    if (!captchaData.success) {
      return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_FROM_EMAIL!,
            Name: process.env.MAILJET_FROM_NAME!,
          },
          To: [
            {
              Email: process.env.MAILJET_TO_EMAIL!,
              Name: "Admin",
            },
          ],
          ReplyTo: {
            Email: email,
            Name: name,
          },
          Subject: `New Contact Form Message From ${name}`,
          TextPart: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${message}
          `,
          HTMLPart: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mailjet error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
