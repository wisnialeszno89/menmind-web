"use client"

import Hero from "@/features/home/Hero"
import StartSection from "@/features/home/StartSection"
import WorldPreview from "@/features/home/WorldPreview"
import HomeArticles from "@/features/home/HomeArticles"
import TrustSection from "@/features/home/TrustSection"
import FeaturedPartners from "@/features/marketplace/FeaturedPartners"
import UserStateBanner from "@/features/home/UserStateBanner"
import HomeSeoArticles from "@/features/home/HomeSeoArticles"
import QuickProblems from "@/features/home/QuickProblems"
import PopularTools from "@/features/home/PopularTools"
import LiveActivity from "@/components/LiveActivity"
import HowItWorks from "@/features/home/HowItWorks"
import Testimonials from "@/features/home/Testimonials"
import TrendingPaths from "@/features/home/TrendingPaths"
import StatsCounter from "@/components/StatsCounter"
import ActivityFeed from "@/features/home/ActivityFeed"
import StartSteps from "@/features/home/StartSteps"
import QuickTests from "@/features/home/QuickTests"
import PathsSection from "@/features/home/PathsSection"
import ComeBackTomorrow from "@/features/home/ComeBackTomorrow"

import QuickOnboarding from "@/components/QuickOnboarding"

import { MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* STAN */}
      <UserStateBanner />

      {/* HERO */}
      <Hero
        title="Miejsce, w którym możesz poukładać swoją sytuację"
        intro="Bez presji. Krok po kroku, w swoim tempie."
      />

      {/* DOPASOWANIE */}
      <QuickOnboarding />

      {/* PIERWSZE KROKI */}
      <StartSteps />

      {/* TESTY */}
      <QuickTests />

      {/* ŚCIEŻKI */}
      <PathsSection />

      {/* JAK TO DZIAŁA */}
      <HowItWorks />

      <StatsCounter />

      <ActivityFeed />

      {/* NAVIMIND */}
      <section className="py-20 border-t">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Nie wiesz co wybrać?
          </h2>

          <p className="text-neutral-600 mb-8">
            Możesz to spokojnie przegadać i zobaczyć kolejny krok.
          </p>

          <a
            href="https://navimind.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-700 hover:text-black transition"
          >
            <MessageCircle size={18} />
            Przejdź do rozmowy w NaviMind
          </a>
        </div>
      </section>

      {/* EKSPLORACJA */}
      <WorldPreview />

      {/* SEO */}
      <HomeSeoArticles />

      {/* MARKETPLACE CTA */}
      <section className="py-20 border-t">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Nie wiesz który kierunek wybrać?
          </h2>

          <p className="text-neutral-600 mb-8">
            Możesz od razu zobaczyć specjalistów i formy wsparcia dopasowane do Twojej sytuacji.
          </p>

          <a
            href="/propozycje"
            className="inline-block border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition"
          >
            Zobacz dostępne wsparcie
          </a>
        </div>
      </section>

      {/* TREŚCI */}
      <HomeArticles />

      {/* PARTNERZY */}
      <FeaturedPartners />

      {/* ZAUFANIE */}
      <TrustSection />

      <Testimonials />

      {/* NAJCZĘŚCIEJ WYBIERANE */}
      <PopularTools />

      <TrendingPaths />

      <ComeBackTomorrow />

      {/* SZYBKIE PROBLEMY */}
      <QuickProblems />

      <LiveActivity />
    </>
  )
}