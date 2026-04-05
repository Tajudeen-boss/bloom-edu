export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const createProductSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().min(10),
  category: z.string().min(2),
  status: z.enum(["DRAFT", "ACTIVE", "ARCHIVED"]).optional().default("DRAFT"),
  variants: z
    .array(
      z.object({
        sku: z.string().min(2),
        name: z.string().min(2),
        price: z.number().positive(),
        stock: z.number().int().nonnegative()
      })
    )
    .optional()
    .default([])
});

export async function GET() {
  const products = await prisma.product.findMany({
    where: { status: "ACTIVE" },
    include: { variants: true },
    orderBy: { createdAt: "desc" }
  });

  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const payload = createProductSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });
  }

  const product = await prisma.product.create({
    data: {
      name: payload.data.name,
      slug: payload.data.slug,
      description: payload.data.description,
      category: payload.data.category,
      status: payload.data.status,
      variants: {
        create: payload.data.variants
      }
    },
    include: { variants: true }
  });

  return NextResponse.json(product, { status: 201 });
}
