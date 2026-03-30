export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { orderInputSchema } from "@/lib/validators";
import { sendTransactionalEmail } from "@/lib/services/email";

export async function POST(request: Request) {
  const payload = orderInputSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });
  }

  const total = payload.data.lineItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);

  const order = await prisma.order.create({
    data: {
      customerName: payload.data.customerName,
      customerEmail: payload.data.customerEmail,
      source: payload.data.source,
      status: "PENDING",
      total,
      items: {
        create: payload.data.lineItems.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
          unitPrice: item.unitPrice
        }))
      }
    },
    include: { items: true }
  });

  await sendTransactionalEmail(
    payload.data.customerEmail,
    "Order confirmation",
    `<p>Thank you ${payload.data.customerName}. Your order ${order.id} is confirmed.</p>`
  );

  return NextResponse.json(order, { status: 201 });
}
