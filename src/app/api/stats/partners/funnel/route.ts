import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  const { data, error } = await supabase
    .from("events")
    .select("event");

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const counts = {
    view_block: 0,
    view_block_city: 0,
    partner_click: 0,
  };

  data?.forEach((row: any) => {
    if (counts[row.event as keyof typeof counts] !== undefined) {
      counts[row.event as keyof typeof counts]++;
    }
  });

  const blockToCity =
    counts.view_block > 0
      ? ((counts.view_block_city / counts.view_block) * 100).toFixed(2)
      : 0;

  const cityToClick =
    counts.view_block_city > 0
      ? ((counts.partner_click / counts.view_block_city) * 100).toFixed(2)
      : 0;

  const blockToClick =
    counts.view_block > 0
      ? ((counts.partner_click / counts.view_block) * 100).toFixed(2)
      : 0;

  return NextResponse.json({
    counts,
    conversion: {
      block_to_city: blockToCity,
      city_to_click: cityToClick,
      block_to_click: blockToClick,
    },
  });
}