import { NextResponse } from "next/server"

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
👉 https://menmind.app/propozycje/kryzys

Nie musisz tego ogarniać sam.
`
    }

    if(state === "nisko"){
      message = `
Widać przeciążenie.

Zacznij od:
👉 https://menmind.app/propozycje/stres

Małe kroki robią różnicę.
`
    }

    if(state === "ok"){
      message = `
Masz stabilną bazę.

Możesz iść dalej:
👉 https://menmind.app/wzrost
`
    }

    // 🔥 wysyłka przez Formspree
    await fetch("https://formspree.io/f/YOUR_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        message
      })
    })

    return NextResponse.json({ ok: true })

  } catch {

    return NextResponse.json({ ok: false }, { status: 500 })

  }

}