import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function FunnelPage() {
  const { data } = await supabase
    .from("events")
    .select("event");

  const counts = {
    view_block: 0,
    view_block_city: 0,
    partner_click: 0,
  };

  data?.forEach((row: any) => {
    if (counts[row.event as keyof typeof counts] !== undefined) {
      counts[row.event as keyof typeof counts]++;
    }
  });

  const blockToCity =
    counts.view_block > 0
      ? ((counts.view_block_city / counts.view_block) * 100).toFixed(2)
      : 0;

  const cityToClick =
    counts.view_block_city > 0
      ? ((counts.partner_click / counts.view_block_city) * 100).toFixed(2)
      : 0;

  const blockToClick =
    counts.view_block > 0
      ? ((counts.partner_click / counts.view_block) * 100).toFixed(2)
      : 0;

  return (
    <div className="min-h-screen bg-[#111827] text-neutral-200 px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-10">

        <h1 className="text-4xl font-semibold text-blue-500">
          Lejek konwersji
        </h1>

        <div className="space-y-6 text-lg">

          <div className="border border-neutral-800 rounded-lg p-6">
            <div>Wejścia w blok</div>
            <div className="text-2xl text-blue-400">
              {counts.view_block}
            </div>
          </div>

          <div className="border border-neutral-800 rounded-lg p-6">
            <div>Wejścia w miasto</div>
            <div className="text-2xl text-blue-400">
              {counts.view_block_city}
            </div>
          </div>

          <div className="border border-neutral-800 rounded-lg p-6">
            <div>Kliknięcia partnerów</div>
            <div className="text-2xl text-blue-400">
              {counts.partner_click}
            </div>
          </div>

        </div>

        <div className="border-t border-neutral-800 pt-10 space-y-4 text-neutral-300">
          <div>Blok → Miasto: {blockToCity}%</div>
          <div>Miasto → Klik: {cityToClick}%</div>
          <div>Blok → Klik: {blockToClick}%</div>
        </div>

      </div>
    </div>
  );
}