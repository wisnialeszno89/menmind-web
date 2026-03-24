import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request){

  try {

    const body = await req.json()

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

Nie musisz tego ogarniać sam.
`
    }

    if(state === "nisko"){
      message = `
Widać przeciążenie.

Zacznij od:
https://menmind.app/propozycje/stres

Małe kroki robią różnicę.
`
    }

    if(state === "ok"){
      message = `
Masz stabilną bazę.

Możesz iść dalej:
https://menmind.app/wzrost
`
    }

    await resend.emails.send({
      from: "MenMind <kontakt@menmind.app>",
      to: "kontakt.menmind@gmail.com",
      subject: "Nowe zapytanie z MenMind",
      html: `
        <p><strong>Email użytkownika:</strong> ${email}</p>
        <p>${message.replace(/\n/g,"<br/>")}</p>
      `
    })

    return NextResponse.json({ ok: true })

  } catch (e) {

    console.error(e)

    return NextResponse.json({ ok: false }, { status: 500 })

  }

}