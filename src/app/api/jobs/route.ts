export const runtime = "nodejs"

import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request){
  try{

    console.log("API JOBS HIT")

    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await req.json()
    console.log("BODY:", body)

    const { data, error } = await resend.emails.send({
      from: "MenMind <kontakt@menmind.app>",
      to: "kontakt.menmind@gmail.com",
      subject: "Nowe ogłoszenie pracy - MenMind",
      html: `<pre>${JSON.stringify(body, null, 2)}</pre>`
    })

    console.log("RESEND DATA:", data)
    console.log("RESEND ERROR:", error)

    if(error){
      return NextResponse.json({ ok:false, error }, { status:500 })
    }

    return NextResponse.json({ ok:true })

  }catch(e:any){
    console.error("CATCH ERROR:", e)
    return NextResponse.json({ ok:false, error: e?.message }, { status:500 })
  }
}