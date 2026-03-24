import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request){

  console.log("EMAIL API CALLED")

  try {

    const body = await req.json()

    console.log("BODY:", body)

    const email = body.email
    const rawState = body.state

    let state = "ok"

    try {
      const parsed = JSON.parse(rawState)
      state = parsed.state
    } catch {}

    let message = ""

    if(state === "kryzys"){
      message = `
Jesteś w trudniejszym momencie.

Zobacz wsparcie:
https://menmind.app/propozycje/kryzys
`
    }

    if(state === "nisko"){
      message = `
Widać przeciążenie.

Zacznij od:
https://menmind.app/propozycje/stres
`
    }

    if(state === "ok"){
      message = `
Masz stabilną bazę.

Możesz iść dalej:
https://menmind.app/wzrost
`
    }

    const { data, error } = await resend.emails.send({
      from: "MenMind <kontakt@menmind.app>",
      to: "kontakt.menmind@gmail.com",
      subject: "TEST MENMIND EMAIL",
      html: `
        <p><strong>Email użytkownika:</strong> ${email}</p>
        <p>${message.replace(/\n/g,"<br/>")}</p>
      `
    })

    console.log("RESEND DATA:", data)
    console.log("RESEND ERROR:", error)

    return NextResponse.json({ ok: true })

  } catch (e) {

    console.error("EMAIL ERROR:", e)

    return NextResponse.json({ ok: false }, { status: 500 })

  }

}