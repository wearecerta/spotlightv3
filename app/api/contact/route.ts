import { NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/clientWrite";

export async function POST(req: Request) {
  try {
    const { name, email, phoneNumber, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const contact = await writeClient.create({
      _type: "contactForm",
      name: name.trim(),
      email: email.trim(),
      phoneNumber: phoneNumber?.trim() || "", 
      message: message.trim(),
    });

    return NextResponse.json({ 
      success: true, 
      id: contact._id 
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}