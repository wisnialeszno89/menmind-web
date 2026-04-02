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

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kontakt.menmind@gmail.com",
      subject: "Nowe ogłoszenie pracy - MenMind",
      html: `
        <h2>Nowe ogłoszenie pracy</h2>
        <p><strong>Typ:</strong> ${type}</p>
        <p><strong>Tytuł:</strong> ${title}</p>
        <p><strong>Lokalizacja:</strong> ${location}</p>
        <p><strong>Stawka:</strong> ${pay || "-"}</p>
        <p><strong>Opis:</strong></p>
        <p>${description}</p>
        <p><strong>Kontakt:</strong> ${contact}</p>
      `
    })

    if(error){
      return NextResponse.json({ ok:false }, { status:500 })
    }

    return NextResponse.json({ ok:true })

  }catch(e){
    return NextResponse.json({ ok:false }, { status:500 })
  }
}