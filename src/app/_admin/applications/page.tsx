import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export default async function ApplicationsPage() {

  const { data } = await supabase
    .from("partner_applications")
    .select("*")
    .order("status", { ascending: true })
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

              <div className="flex justify-between items-center mb-2">

  <h2 className="text-xl font-semibold">
    {app.company}
  </h2>

  <span className={`
    text-xs px-2 py-1 rounded
    ${app.status === "new" ? "bg-yellow-100 text-yellow-800" : ""}
    ${app.status === "contacted" ? "bg-blue-100 text-blue-800" : ""}
    ${app.status === "closed" ? "bg-green-100 text-green-800" : ""}
  `}>
    {app.status || "new"}
  </span>

</div>

              <p className="text-gray-600 mb-4">
                {app.category} • {app.city}
              </p>

              <p className="text-gray-700 mb-4">
                {app.website}
              </p>

              <p className="text-sm text-gray-500">
                kontakt: {app.email}
                {app.phone && <span> • {app.phone}</span>}
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