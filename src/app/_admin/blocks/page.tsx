import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function BlocksStatsPage() {
  const { data } = await supabase
    .from("events")
    .select("event, data");

  const blocks: Record<
    string,
    { views: number; clicks: number }
  > = {};

  data?.forEach((row: any) => {
    if (row.event === "view_block") {
      const blok = row.data?.blok;
      if (!blok) return;

      if (!blocks[blok]) {
        blocks[blok] = { views: 0, clicks: 0 };
      }

      blocks[blok].views++;
    }

    if (row.event === "partner_click") {
      const blok = row.data?.blok;
      if (!blok) return;

      if (!blocks[blok]) {
        blocks[blok] = { views: 0, clicks: 0 };
      }

      blocks[blok].clicks++;
    }
  });

  const results = Object.entries(blocks)
    .map(([blok, stats]) => {
      const conversion =
        stats.views > 0
          ? ((stats.clicks / stats.views) * 100).toFixed(2)
          : 0;

      return {
        blok,
        views: stats.views,
        clicks: stats.clicks,
        conversion,
      };
    })
    .sort((a, b) => Number(b.conversion) - Number(a.conversion));

  return (
    <div className="min-h-screen bg-[#111827] text-neutral-200 px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-10">

        <h1 className="text-4xl font-semibold text-blue-500">
          Konwersja per blok
        </h1>

        <div className="space-y-6">
          {results.map((item) => (
            <div
              key={item.blok}
              className="border border-neutral-800 rounded-lg p-6 flex justify-between"
            >
              <div>
                <div className="text-xl font-semibold">
                  {item.blok}
                </div>
                <div className="text-neutral-400 text-sm">
                  Wejścia: {item.views} | Kliknięcia: {item.clicks}
                </div>
              </div>

              <div className="text-blue-400 text-2xl font-semibold">
                {item.conversion}%
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}