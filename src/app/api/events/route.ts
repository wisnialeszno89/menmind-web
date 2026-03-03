import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { event, data, path, session_id } = body;

    await supabase.from("events").insert([
      {
        event,
        data,
        path,
        session_id,
      },
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid event" },
      { status: 400 }
    );
  }
}