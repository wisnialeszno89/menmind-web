import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {

  const form = await req.formData()

  const name = form.get("name")
  const email = form.get("email")
  const message = form.get("message")
  const to = form.get("to")

  try {

    await resend.emails.send({
      from: "MenMind <kontakt@menmind.app>",
      to: [String(to)],
      subject: "Nowa wiadomość z MenMind",
      html: `
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message}</p>
      `
    })

    return NextResponse.redirect(
      new URL("/thanks", req.url)
    )

  } catch (e) {

    return NextResponse.json(
      { error: "Błąd wysyłki" },
      { status: 500 }
    )

  }

}