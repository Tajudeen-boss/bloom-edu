export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const createBookSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().min(10),
  subject: z.string().min(2),
  price: z.number().positive(),
  isPublished: z.boolean().optional().default(false)
});

export async function GET(request: Request) {
  const url = new URL(request.url);
  const subject = url.searchParams.get("subject");
  const grouped = url.searchParams.get("grouped");

  const books = await prisma.book.findMany({
    where: {
      isPublished: true,
      ...(subject ? { subject } : {})
    },
    orderBy: [{ subject: "asc" }, { createdAt: "desc" }]
  });

  const groupedBySubject = books.reduce<Record<string, number>>((acc, book) => {
    acc[book.subject] = (acc[book.subject] ?? 0) + 1;
    return acc;
  }, {});

  if (grouped === "true") {
    return NextResponse.json({ items: books, groupedBySubject });
  }

  return NextResponse.json(books);
}

export async function POST(request: Request) {
  const payload = createBookSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });
  }

  const book = await prisma.book.create({
    data: {
      title: payload.data.title,
      slug: payload.data.slug,
      description: payload.data.description,
      subject: payload.data.subject,
      price: payload.data.price,
      isPublished: payload.data.isPublished
    }
  });

  return NextResponse.json(book, { status: 201 });
}
