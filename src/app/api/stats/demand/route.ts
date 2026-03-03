import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const range = searchParams.get("range") || "30";

  let fromDate = null;

  if (range === "7") {
    fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 7);
  }

  if (range === "30") {
    fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - 30);
  }

  let query = supabase
    .from("events")
    .select("event, data, created_at");

  if (fromDate) {
    query = query.gte("created_at", fromDate.toISOString());
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const cities: Record<
    string,
    { views: number; clicks: number }
  > = {};

  data?.forEach((row: any) => {
    if (row.event === "view_block_city") {
      const city = row.data?.city;
      if (!city) return;

      if (!cities[city]) {
        cities[city] = { views: 0, clicks: 0 };
      }

      cities[city].views++;
    }

    if (row.event === "partner_click") {
      const city = row.data?.city;
      if (!city) return;

      if (!cities[city]) {
        cities[city] = { views: 0, clicks: 0 };
      }

      cities[city].clicks++;
    }
  });

  const result = Object.entries(cities)
    .map(([city, stats]) => {
      const conversion =
        stats.views > 0
          ? ((stats.clicks / stats.views) * 100).toFixed(2)
          : 0;

      return {
        city,
        views: stats.views,
        clicks: stats.clicks,
        conversion,
      };
    })
    .sort((a, b) => Number(b.views) - Number(a.views));

  return NextResponse.json(result);
}