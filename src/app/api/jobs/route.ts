import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const badWords = [
  "kurwa",
  "chuj",
  "sex",
  "xxx",
  "crypto",
  "bitcoin",
  "zarabiaj",
  "kliknij",
  "onlyfans"
]

function containsSpam(text: string){
  const lower = text.toLowerCase()

  if(lower.includes("http://")) return true
  if(lower.includes("https://")) return true
  if(lower.includes("www.")) return true
  if(lower.includes(".ru")) return true
  if(lower.includes(".cn")) return true

  return badWords.some(word => lower.includes(word))
}

export async function POST(req: Request) {
  try {

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const body = await req.json()

    if(body.website_hidden){
      return NextResponse.json({ ok:true })
    }

    // honeypot
    if(body.company_website){
      return NextResponse.json({ ok:true })
    }

    const fullText = `
      ${body.title}
      ${body.description}
      ${body.contact}
    `

    // blokada spamu
    if(containsSpam(fullText)){
      return NextResponse.json({
        ok:false,
        error:"Spam detected"
      }, { status:400 })
    }

    // minimalna długość
    if(body.description.length < 25){
      return NextResponse.json({
        ok:false,
        error:"Opis za krótki"
      }, { status:400 })
    }

    // limit 1 ogłoszenie / 10 min
    const tenMinutesAgo = new Date(
      Date.now() - 10 * 60 * 1000
    ).toISOString()

    const { data: recent } = await supabase
      .from("jobs")
      .select("id")
      .eq("contact", body.contact)
      .gte("created_at", tenMinutesAgo)

    if(recent && recent.length > 0){
      return NextResponse.json({
        ok:false,
        error:"Za szybko dodajesz ogłoszenia"
      }, { status:400 })
    }
        const oneDayAgo = new Date(
        Date.now() - 24 * 60 * 60 * 1000
        ).toISOString()

        const { data: daily } = await supabase
        .from("jobs")
        .select("id")
        .eq("contact", body.contact)
        .gte("created_at", oneDayAgo)

    if(daily && daily.length >= 3){
       return NextResponse.json({
       ok:false,
       error:"Limit 3 ogłoszenia dziennie"
       }, { status:400 })
       }
       const { data: duplicate } = await supabase
        .from("jobs")
        .select("id")
        .eq("title", body.title)
        .eq("contact", body.contact)

    if(duplicate && duplicate.length > 0){
      return NextResponse.json({
        ok:false,
        error:"Duplikat ogłoszenia"
      }, { status:400 })
    }
    const { data, error } = await supabase
      .from("jobs")
      .insert([
        {
          type: body.type,
          title: body.title,
          location: body.location,
          description: body.description,
          pay: body.pay,
          contact: body.contact,
          featured: false,
          status: "approved"
        }
      ])
      .select()

    if (error) throw error

    return NextResponse.json({ ok: true, data })

  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message })
  }
}