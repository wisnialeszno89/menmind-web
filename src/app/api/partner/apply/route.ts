import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {

  console.log("PARTNER EMAIL API CALLED")

  try {

    const body = await req.json()
    console.log("BODY:", body)

    const { name, company, category, city, website, email, phone, message, tier } = body

    const { data, error } = await resend.emails.send({
      from: "MenMind <kontakt@menmind.app>",
      to: "kontakt.menmind@gmail.com",
      subject: "Nowe zgłoszenie partnera",
      html: `
        <h2>Nowe zgłoszenie partnera</h2>

        <p><strong>Imię / firma:</strong> ${name}</p>
        <p><strong>Firma:</strong> ${company}</p>
        <p><strong>Kategoria:</strong> ${category}</p>
        <p><strong>Miasto:</strong> ${city}</p>
        <p><strong>Strona:</strong> ${website}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Pakiet:</strong> ${tier}</p>

        <p><strong>Opis:</strong><br/> ${message}</p>
      `,
    })

    console.log("RESEND DATA:", data)
    console.log("RESEND ERROR:", error)

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("RESEND CATCH ERROR:", error)
    return NextResponse.json({ error: "Błąd wysyłki" }, { status: 500 })
  }
}