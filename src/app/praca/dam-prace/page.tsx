import JobList from "@/components/jobs/JobList"

export default function Page(){
  return(
    <main className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-6">
        Dam pracę
      </h1>

      <p className="text-gray-600 mb-10">
        Oferty pracy dodane przez pracodawców.
      </p>

      <JobList type="dam" />

    </main>
  )
}