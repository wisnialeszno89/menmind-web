import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

export async function POST(req: Request){

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const body = await req.json()

  await supabase.from("events").insert({
    name: body.name
  })

  return NextResponse.json({ ok: true })
}