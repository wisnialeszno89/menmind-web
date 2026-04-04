import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(req: Request){

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const body = await req.json()

  const { data } = await supabase
    .from("jobs")
    .select("reports")
    .eq("id", body.id)
    .single()

  const newReports = (data?.reports || 0) + 1

  await supabase
    .from("jobs")
    .update({
      reports: newReports,
      status: newReports >= 3 ? "hidden" : "approved"
    })
    .eq("id", body.id)

  return NextResponse.json({ ok:true })
}