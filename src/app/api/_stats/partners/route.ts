import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET() {

  const { data } = await supabase
    .from("events")
    .select("data")

  const counts: Record<string, number> = {}

  data?.forEach((e: any) => {

    if (!e.data?.partner_id) return

    const id = e.data.partner_id

    counts[id] = (counts[id] || 0) + 1
  })

  return NextResponse.json(counts)
}