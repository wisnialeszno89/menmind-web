import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(req: Request) {
  try {

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const body = await req.json()

    const { data, error } = await supabase
      .from("jobs")
      .insert([
        {
          type: body.type,
          title: body.title,
          location: body.location,
          description: body.description,
          pay: body.pay,
          contact: body.contact,
          featured: body.featured || false,
          status: "approved"
        }
      ])
      .select()

    if (error) {
      console.error("SUPABASE ERROR:", error)
      throw error
    }

    return NextResponse.json({ ok: true, data })

  } catch (e: any) {
    console.error("API ERROR:", e)
    return NextResponse.json({ ok: false, error: e.message })
  }
}