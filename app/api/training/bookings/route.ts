export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendTransactionalEmail } from "@/lib/services/email";
import { sendWhatsAppNotification } from "@/lib/services/whatsapp";
import { bookingInputSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const payload = bookingInputSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });
  }

  const booking = await prisma.booking.create({
    data: {
      fullName: payload.data.fullName,
      email: payload.data.email,
      phone: payload.data.phone,
      programId: payload.data.programId,
      status: "PENDING"
    }
  });

  await Promise.all([
    sendTransactionalEmail(
      payload.data.email,
      "Training booking received",
      `<p>Thanks ${payload.data.fullName}, your training booking is received.</p>`
    ),
    sendWhatsAppNotification(`New training booking: ${payload.data.fullName} (${payload.data.email})`)
  ]);

  return NextResponse.json({ bookingId: booking.id }, { status: 201 });
}
