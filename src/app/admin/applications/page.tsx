import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export default async function ApplicationsPage() {

  const { data } = await supabase
    .from("partner_applications")
    .select("*")
    .order("created_at", { ascending: false })

  return (

    <main className="min-h-screen bg-gray-100">

      <div className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-semibold mb-10">
          Zgłoszenia partnerów
        </h1>

        <div className="space-y-4">

          {data?.map((app:any) => (

            <div
              key={app.id}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >

              <h2 className="text-xl font-semibold mb-2">
                {app.company}
              </h2>

              <p className="text-gray-600 mb-4">
                {app.category} • {app.city}
              </p>

              <p className="text-gray-700 mb-4">
                {app.website}
              </p>

              <p className="text-sm text-gray-500">
                kontakt: {app.email}
              </p>

              <p className="text-xs text-gray-400 mt-3">
                {new Date(app.created_at).toLocaleString()}
              </p>

            </div>

          ))}

        </div>

      </div>

    </main>

  )

}