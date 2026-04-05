export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { contactInputSchema } from "@/lib/validators";
import { sendTransactionalEmail } from "@/lib/services/email";
import { sendWhatsAppNotification } from "@/lib/services/whatsapp";

export async function POST(request: Request) {
  const payload = contactInputSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });
  }

  const receiver = process.env.CONTACT_RECEIVER_EMAIL ?? "partnerships@bloomedu.co";

  const adminBody = `
    <h2>New consultation request</h2>
    <p><strong>Name:</strong> ${payload.data.fullName}</p>
    <p><strong>Email:</strong> ${payload.data.email}</p>
    <p><strong>Phone:</strong> ${payload.data.phone}</p>
    <p><strong>Organization:</strong> ${payload.data.organization}</p>
    <p><strong>Interest:</strong> ${payload.data.interest}</p>
    <p><strong>Message:</strong></p>
    <p>${payload.data.message}</p>
  `;

  const customerBody = `
    <p>Hello ${payload.data.fullName},</p>
    <p>Thank you for contacting Bloom Edu-care. Our team has received your message and will respond shortly.</p>
    <p><strong>Interest area:</strong> ${payload.data.interest}</p>
    <p>Regards,<br/>BLOOM EDU-CARE CONSULT (MONTESSORI HUB)</p>
  `;

  await Promise.all([
    sendTransactionalEmail(receiver, "New Bloom Edu-care contact form submission", adminBody),
    sendTransactionalEmail(payload.data.email, "We received your message", customerBody),
    sendWhatsAppNotification(
      `Contact form: ${payload.data.fullName} (${payload.data.email}) | ${payload.data.interest}`
    )
  ]);

  return NextResponse.json({ ok: true }, { status: 201 });
}
