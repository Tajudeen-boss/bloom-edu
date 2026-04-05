export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const createProgramSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  level: z.string().min(2),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  price: z.number().positive(),
  seats: z.number().int().positive(),
  isPublished: z.boolean().optional().default(false)
});

export async function GET() {
  const programs = await prisma.trainingProgram.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "desc" }
  });

  return NextResponse.json(programs);
}

export async function POST(request: Request) {
  const payload = createProgramSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });
  }

  const program = await prisma.trainingProgram.create({
    data: {
      title: payload.data.title,
      description: payload.data.description,
      level: payload.data.level,
      startDate: new Date(payload.data.startDate),
      endDate: new Date(payload.data.endDate),
      price: payload.data.price,
      seats: payload.data.seats,
      isPublished: payload.data.isPublished
    }
  });

  return NextResponse.json(program, { status: 201 });
}
