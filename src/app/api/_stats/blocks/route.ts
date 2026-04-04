import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  const { data, error } = await supabase
    .from("events")
    .select("event, data");

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const blocks: Record<
    string,
    { views: number; clicks: number }
  > = {};

  data?.forEach((row: any) => {
    if (row.event === "view_block") {
      const blok = row.data?.blok;
      if (!blok) return;

      if (!blocks[blok]) {
        blocks[blok] = { views: 0, clicks: 0 };
      }

      blocks[blok].views++;
    }

    if (row.event === "partner_click") {
      const blok = row.data?.blok;
      if (!blok) return;

      if (!blocks[blok]) {
        blocks[blok] = { views: 0, clicks: 0 };
      }

      blocks[blok].clicks++;
    }
  });

  const result = Object.entries(blocks).map(([blok, stats]) => {
    const conversion =
      stats.views > 0
        ? ((stats.clicks / stats.views) * 100).toFixed(2)
        : 0;

    return {
      blok,
      views: stats.views,
      clicks: stats.clicks,
      conversion,
    };
  });

  return NextResponse.json(result);
}