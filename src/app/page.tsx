import Hero from "@/features/home/Hero"
import StartSection from "@/features/home/StartSection"
import WorldPreview from "@/features/home/WorldPreview"
import HomeArticles from "@/features/home/HomeArticles"
import TrustSection from "@/features/home/TrustSection"
import FeaturedPartners from "@/features/marketplace/FeaturedPartners"
import NaviMindButton from "@/features/navimind/NaviMindButton"
import StateScale from "@/features/tools/StateScale"

export default function Home() {

  return (

    <main>

      <Hero
        title="MenMind"
        intro="Miejsce dla mężczyzn, którzy chcą odzyskać kierunek, spokój i sprawczość."
      />

      <section className="py-16 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-8 text-center">
            Gdzie jesteś teraz?
          </h2>

          <StateScale value={5} />

        </div>
      </section>

      <StartSection />

      <WorldPreview />

      <HomeArticles />

      <section className="py-20 border-t">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Nie chcesz rozmawiać z człowiekiem?
          </h2>

          <p className="text-neutral-600 mb-10">
            Możesz zacząć od rozmowy z NaviMind.
            To asystent AI który pomaga przejść przez trudne momenty.
          </p>

          <NaviMindButton />

        </div>

      </section>

      <TrustSection />

      <FeaturedPartners />

    </main>

  )

}