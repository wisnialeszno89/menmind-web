import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function PartnerStatsPage() {
  const { data } = await supabase
    .from("events")
    .select("data")
    .eq("event", "partner_click");

  const counts: Record<string, number> = {};

  data?.forEach((row: any) => {
    const partner = row.data?.partner;
    if (!partner) return;

    counts[partner] = (counts[partner] || 0) + 1;
  });

  const ranking = Object.entries(counts)
    .map(([partner, clicks]) => ({ partner, clicks }))
    .sort((a, b) => b.clicks - a.clicks);

  return (
    <div className="min-h-screen bg-[#111827] text-neutral-200 px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold mb-10 text-blue-500">
          Ranking partnerów
        </h1>

        <div className="space-y-4">
          {ranking.length === 0 && (
            <p className="text-neutral-400">
              Brak kliknięć partnerów.
            </p>
          )}

          {ranking.map((item, index) => (
            <div
              key={item.partner}
              className="border border-neutral-800 rounded-lg p-4 flex justify-between"
            >
              <span>
                #{index + 1} — {item.partner}
              </span>

              <span className="text-blue-400 font-semibold">
                {item.clicks} kliknięć
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}