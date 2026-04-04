import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"MenMind Partner" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Nowe zgłoszenie partnera",
      html: `
        <h2>Nowe zgłoszenie partnera</h2>
        <p><strong>Imię i nazwisko:</strong> ${body.name}</p>
        <p><strong>Nazwa działalności:</strong> ${body.company}</p>
        <p><strong>Miasto:</strong> ${body.city}</p>
        <p><strong>Kategoria:</strong> ${body.category}</p>
        <p><strong>Strona www:</strong> ${body.website}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Telefon:</strong> ${body.phone}</p>
        <p><strong>Opis:</strong><br/> ${body.description}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Błąd wysyłki" }), {
      status: 500,
    });
  }
}