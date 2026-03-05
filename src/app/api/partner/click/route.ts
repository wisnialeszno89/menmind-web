import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
process.env.SUPABASE_URL!,
process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req:Request){

const { id } = await req.json()

await supabase.rpc("increment_partner_click",{
partner_id:id
})

return NextResponse.json({ success:true })

}