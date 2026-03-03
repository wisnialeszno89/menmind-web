import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function AdminEventsPage() {
  const { data } = await supabase
    .from("events")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);

  return (
    <div className="min-h-screen bg-[#111827] text-neutral-200 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold mb-10 text-blue-500">
          Ostatnie eventy
        </h1>

        <div className="space-y-4 text-sm">
          {data?.map((event) => (
            <div
              key={event.id}
              className="border border-neutral-800 rounded-lg p-4"
            >
              <div className="text-blue-400 font-medium">
                {event.event}
              </div>

              <div className="text-neutral-400">
                {event.path}
              </div>

              <div className="text-neutral-500 text-xs mt-2">
                {new Date(event.created_at).toLocaleString()}
              </div>

              <pre className="text-xs text-neutral-400 mt-3 overflow-x-auto">
                {JSON.stringify(event.data, null, 2)}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}