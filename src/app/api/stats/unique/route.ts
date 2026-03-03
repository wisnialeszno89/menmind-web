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
    .select("event, session_id, created_at");

  if (fromDate) {
    query = query.gte("created_at", fromDate.toISOString());
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const sessions = new Set<string>();
  const clickSessions = new Set<string>();

  data?.forEach((row: any) => {
    if (!row.session_id) return;

    sessions.add(row.session_id);

    if (row.event === "partner_click") {
      clickSessions.add(row.session_id);
    }
  });

  const totalUsers = sessions.size;
  const usersWhoClicked = clickSessions.size;

  const conversion =
    totalUsers > 0
      ? ((usersWhoClicked / totalUsers) * 100).toFixed(2)
      : 0;

  return NextResponse.json({
    totalUsers,
    usersWhoClicked,
    conversion,
  });
}