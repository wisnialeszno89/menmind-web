import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import nodemailer from "nodemailer"

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {

  try {

    const body = await req.json()

    const {
      name,
      company,
      category,
      city,
      website,
      email,
      phone,
      message,
      tier
    } = body

    // 🔥 1. ZAPIS DO SUPABASE
    await supabase
      .from("partner_applications")
      .insert([
        {
          name,
          company,
          category,
          city,
          website,
          email,
          phone,
          message,
          tier
        }
      ])

    // 🔥 2. EMAIL (opcjonalny, ale warto)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"MenMind" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Nowe zgłoszenie partnera",
      html: `
        <h2>Nowe zgłoszenie</h2>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Firma:</strong> ${company}</p>
        <p><strong>Kategoria:</strong> ${category}</p>
        <p><strong>Miasto:</strong> ${city}</p>
        <p><strong>WWW:</strong> ${website}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Pakiet:</strong> ${tier}</p>
        <p><strong>Opis:</strong><br/> ${message}</p>
      `
    })

    return NextResponse.json({ success: true })

  } catch (error) {

    return NextResponse.json(
      { error: "Błąd zapisu" },
      { status: 500 }
    )

  }
}