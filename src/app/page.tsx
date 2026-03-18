"use client"

import Hero from "@/features/home/Hero"
import StartSection from "@/features/home/StartSection"
import WorldPreview from "@/features/home/WorldPreview"
import HomeArticles from "@/features/home/HomeArticles"
import TrustSection from "@/features/home/TrustSection"
import FeaturedPartners from "@/features/marketplace/FeaturedPartners"
import UserStateBanner from "@/features/home/UserStateBanner"

import { MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <main>

      {/* 🔥 STAN UŻYTKOWNIKA */}
      <UserStateBanner />

      {/* 🔥 HERO */}
      <Hero
        title="Miejsce, w którym możesz poukładać swoją sytuację"
        intro="Bez presji. Krok po kroku, w swoim tempie."
      />

      {/* 🔥 START */}
      <StartSection />

      {/* 🔥 NAVIMIND (subtelne wejście) */}
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

      {/* 🔥 EKSPLORACJA */}
      <WorldPreview />

      {/* 🔥 TREŚCI */}
      <HomeArticles />

      {/* 🔥 PARTNERZY */}
      <FeaturedPartners />

      {/* 🔥 ZAUFANIE */}
      <TrustSection />

    </main>
  )
}