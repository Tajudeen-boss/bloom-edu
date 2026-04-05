export const dynamic = "force-dynamic";

import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { z } from "zod";
import { blogPosts } from "@/lib/content/siteContent";

type BlogDraft = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  createdAt: string;
};

const draftPath = path.join(process.cwd(), "data", "blog-drafts.json");

const createDraftSchema = z.object({
  title: z.string().min(5),
  excerpt: z.string().min(20),
  category: z.string().min(2),
  author: z.string().min(2),
  readTime: z.string().min(3)
});

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function readDrafts() {
  try {
    const raw = await fs.readFile(draftPath, "utf8");
    return JSON.parse(raw) as BlogDraft[];
  } catch {
    return [];
  }
}

async function writeDrafts(drafts: BlogDraft[]) {
  await fs.writeFile(draftPath, JSON.stringify(drafts, null, 2));
}

export async function GET() {
  const drafts = await readDrafts();
  return NextResponse.json({ published: blogPosts, drafts });
}

export async function POST(request: Request) {
  const payload = createDraftSchema.safeParse(await request.json());

  if (!payload.success) {
    return NextResponse.json({ error: payload.error.flatten() }, { status: 400 });
  }

  const drafts = await readDrafts();
  const newDraft: BlogDraft = {
    slug: slugify(payload.data.title),
    title: payload.data.title,
    excerpt: payload.data.excerpt,
    category: payload.data.category,
    author: payload.data.author,
    readTime: payload.data.readTime,
    createdAt: new Date().toISOString()
  };

  drafts.unshift(newDraft);
  await writeDrafts(drafts);

  return NextResponse.json(newDraft, { status: 201 });
}
