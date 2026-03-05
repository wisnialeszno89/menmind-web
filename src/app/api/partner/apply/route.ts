import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
process.env.SUPABASE_URL!,
process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req:Request){

const body = await req.json()

const { name, company, category, city, website, email } = body

await supabase
.from("partner_applications")
.insert([
{
name,
company,
category,
city,
website,
email
}
])

return NextResponse.json({ success:true })

}