import Hero from "@/features/home/Hero"
import StartSection from "@/features/home/StartSection"
import WorldPreview from "@/features/home/WorldPreview"
import HomeArticles from "@/features/home/HomeArticles"
import TrustSection from "@/features/home/TrustSection"
import FeaturedPartners from "@/features/marketplace/FeaturedPartners"
import NaviMindButton from "@/features/navimind/NaviMindButton"
import UserStateBar from "@/features/home/UserStateBar"

export default function Home() {

  return (

    <main>

      <Hero
        title="MenMind"
        intro="Miejsce dla mężczyzn, którzy chcą odzyskać kierunek, spokój i sprawczość."
      />
      
            {/* 🔥 1. ŚWIATY */}
            <UserStateBar />
      <WorldPreview />

      {/* 🔥 2. TEST (główne wejście jeśli ktoś nie wie) */}
      <StartSection />

      {/* 🔥 3. NAVIMIND (backup emocjonalny) */}
      <section className="py-20 border-t">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-6">
            Pogadaj z NaviMind
          </h2>

          <p className="text-neutral-600 mb-10">
            Nie wiesz od czego zacząć? Zacznij od rozmowy.
          </p>

          <div className="flex justify-center">
            <NaviMindButton />
          </div>

        </div>

      </section>

      {/* 🔥 4. TREŚCI */}
      
      <HomeArticles />

      <TrustSection />

      <FeaturedPartners />

      

    </main>

  )

}