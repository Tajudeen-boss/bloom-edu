import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const programs = await prisma.trainingProgram.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "desc" }
  });

  return NextResponse.json(programs);
}
