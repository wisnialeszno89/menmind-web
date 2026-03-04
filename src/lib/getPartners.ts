import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function getPartners(block: string, city: string) {
  const { data } = await supabase
    .from("partners")
    .select("*")
    .eq("city", city)
    .contains("blocks", [block]);

  return data || [];
}