import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  const { data, error } = await supabase
    .from("events")
    .select("data")
    .eq("event", "partner_click");

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const counts: Record<string, number> = {};

  data?.forEach((row: any) => {
    const partner = row.data?.partner;
    if (!partner) return;

    counts[partner] = (counts[partner] || 0) + 1;
  });

  const ranking = Object.entries(counts)
    .map(([partner, clicks]) => ({ partner, clicks }))
    .sort((a, b) => b.clicks - a.clicks);

  return NextResponse.json(ranking);
}