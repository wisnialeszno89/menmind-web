import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY || "sk_test_dummy",
  {
    apiVersion: "2026-03-25.dahlia",
  }
)

export async function POST() {

  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe not configured" },
      { status: 500 }
    )
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "pln",
          product_data: {
            name: "Wyróżnienie ogłoszenia pracy",
          },
          unit_amount: 1900,
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_URL}/praca?success=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/praca/dodaj`,
  })

  return NextResponse.json({ url: session.url })
}