import { NextResponse } from "next/server"

export async function POST(){
  return NextResponse.json({
    url: "https://navimind.lemonsqueezy.com/checkout/buy/91e613f3-048b-4f9a-b5a7-523e14932df9"
  })
}