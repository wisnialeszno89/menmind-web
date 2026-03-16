import { partners } from "@/data/partners"
import PartnersList from "@/features/marketplace/PartnersList"

export default function Page() {

  return (

    <main className="max-w-5xl mx-auto px-6 py-20">

      <header className="mb-12">

        <h1 className="text-4xl font-semibold mb-4">
          Wsparcie
        </h1>

        <p className="text-neutral-600">
          Jeśli potrzebujesz rozmowy lub pomocy specjalisty,
          tutaj znajdziesz ludzi którzy pracują z mężczyznami.
        </p>

      </header>

      <PartnersList partners={partners} />

    </main>

  )

}