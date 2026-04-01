import { jobs } from "@/data/jobs"

export async function generateMetadata({ params }: any) {

  const id = params.id

  return {
    title: `Ogłoszenie pracy | MenMind`,
    description: "Ogłoszenie pracy dla mężczyzn.",
    alternates: {
      canonical: `https://menmind.app/praca/${id}`
    }
  }
}

export default function Page({ params }: any){

  const { id } = params

  const job = jobs.find(j => j.id === id)

  if(!job){
    return <div>Nie znaleziono</div>
  }

  const schema = {
    "@context":"https://schema.org",
    "@type":"JobPosting",
    title: job.title,
    description: job.description,
    jobLocation:{
      "@type":"Place",
      address:{
        "@type":"PostalAddress",
        addressLocality: job.location
      }
    },
    hiringOrganization:{
      "@type":"Organization",
      name:"MenMind"
    }
  }

  return(
    <main className="max-w-2xl mx-auto py-20 px-6">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="text-3xl font-semibold mb-4">
        {job.title}
      </h1>

      <p className="text-gray-500 mb-6">
        {job.location} {job.pay && `• ${job.pay}`}
      </p>

      <div className="border rounded-xl p-6 mb-6">
        {job.description}
      </div>

      <button className="w-full bg-black text-white py-3 rounded-xl">
        Pokaż kontakt
      </button>

    </main>
  )
}