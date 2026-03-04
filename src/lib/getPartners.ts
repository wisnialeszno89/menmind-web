import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function getPartners(category: string, city: string) {
  const { data, error } = await supabase
    .from("partners")
    .select("*")
    .eq("category", category)
    .eq("city", city)
    .order("tier", { ascending: false });

  if (error) {
    console.error("Supabase partners error:", error);
    return [];
  }

  return data || [];
}