import { getCloudflareContext } from "@opennextjs/cloudflare";

import { NextRequest, NextResponse } from "next/server";
import { getDB } from "@/lib/db";
import { todos } from "../../../../drizzle/schema";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";

export async function GET(_req: NextRequest) {
  const { env } = getCloudflareContext();
  const db = drizzle(env.DB);
  const result = await db.select().from(todos);
  return NextResponse.json(result);
}

type TodoSchema = {
  title: string;
};

export async function POST(req: Request) {
  const { title } = (await req.json()) as TodoSchema;
  const { env } = getCloudflareContext();
  const db = drizzle(env.DB);

  const inserted = await db.insert(todos).values({ title }).returning();

  return NextResponse.json(inserted[0]);
}
