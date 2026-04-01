import JobList from "@/components/jobs/JobList"

export default function Page(){
  return(
    <main className="max-w-5xl mx-auto px-6 py-20">

      <h1 className="text-3xl font-semibold mb-6">
        Szukam pracy
      </h1>

      <p className="text-gray-600 mb-10">
        Mężczyźni szukający zatrudnienia.
      </p>

      <JobList type="szukam" />

    </main>
  )
}