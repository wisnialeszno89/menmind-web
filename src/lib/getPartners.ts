import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function getPartner(slug: string) {
  const { data, error } = await supabase
    .from("partners")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

export async function getPartners(category: string, city: string) {
  const { data, error } = await supabase
    .from("partners")
    .select("*")
    .eq("category", category)
    .eq("city", city);

  if (error) {
    console.error(error);
    return [];
  }

  const partners = data || [];

  partners.sort((a: any, b: any) => {
    const scoreA = (a.rating || 0) * 5 + (a.reviews || 0) * 2;
    const scoreB = (b.rating || 0) * 5 + (b.reviews || 0) * 2;

    return scoreB - scoreA;
  });

  return partners;
}