export const runtime = "nodejs"

import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request){

  try{

    const resend = new Resend(process.env.RESEND_API_KEY)

    const body = await req.json()

    const {
      name,
      company,
      email,
      phone,
      category,
      city,
      website,
      tier,
      message
    } = body

    const tierLabel =
      tier === "basic" ? "Basic (99 zł)" :
      tier === "pro" ? "Pro (249 zł)" :
      "Strategic (699 zł)"

    await resend.emails.send({
      from: "MenMind <hello@navimind.app>",
      replyTo: "kontakt@menmind.app",
      to: "kontakt.menmind@gmail.com",
      subject: "Nowe zgłoszenie partnera - MenMind",
      html: `
        <h2>Nowy partner</h2>

        <p><strong>Pakiet:</strong> ${tierLabel}</p>

        <hr/>

        <p><strong>Nazwa:</strong> ${name}</p>
        <p><strong>Firma:</strong> ${company || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "-"}</p>
        <p><strong>Kategoria:</strong> ${category}</p>
        <p><strong>Miasto:</strong> ${city || "-"}</p>
        <p><strong>Strona:</strong> ${website || "-"}</p>

        <hr/>

        <p><strong>Opis:</strong></p>
        <p>${message || "-"}</p>
      `
    })

    return NextResponse.json({ ok:true })

  }catch(e:any){
    return NextResponse.json({ ok:false }, { status:500 })
  }
}