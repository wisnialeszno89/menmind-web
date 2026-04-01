import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request){

  try{

    const body = await req.json()

    const {
      type,
      title,
      location,
      pay,
      description,
      contact
    } = body

    await resend.emails.send({
      from: "MenMind <onboarding@resend.dev>",
      to: ["kontakt.menmind@gmail.com"],
      subject: "Nowe ogłoszenie pracy - MenMind",
      html: `
        <h2>Nowe ogłoszenie</h2>
        <p><strong>Typ:</strong> ${type}</p>
        <p><strong>Tytuł:</strong> ${title}</p>
        <p><strong>Lokalizacja:</strong> ${location}</p>
        <p><strong>Stawka:</strong> ${pay || "-"}</p>
        <p><strong>Opis:</strong></p>
        <p>${description}</p>
        <p><strong>Kontakt:</strong> ${contact}</p>
      `
    })

    return NextResponse.json({ ok:true })

  }catch(e){

    return NextResponse.json({ ok:false })

  }

}