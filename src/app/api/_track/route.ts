import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { event, data, path } = body;

    const userAgent = req.headers.get("user-agent");
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : null;

    await supabase.from("events").insert([
      {
        event,
        data,
        path,
        user_agent: userAgent,
        ip_address: ip,
        created_at: new Date().toISOString(),
      },
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("TRACK ERROR:", err);
    return NextResponse.json({ error: "Invalid event" }, { status: 400 });
  }
}

export async function GET() {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json(data);
}