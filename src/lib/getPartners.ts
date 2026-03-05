import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function getPartners(category: string, city: string) {

  const { data } = await supabase
    .from("partners")
    .select("*")
    .eq("category", category)
    .eq("city", city)

  return data || []

}

export async function getPartner(slug: string) {

  const { data } = await supabase
    .from("partners")
    .select("*")
    .eq("slug", slug)
    .single()

  return data

}