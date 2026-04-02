"use client"

import Hero from "@/features/home/Hero"
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
import StatsCounter from "@/components/StatsCounter"
import ActivityFeed from "@/features/home/ActivityFeed"
import QuickTests from "@/features/home/QuickTests"
import ComeBackTomorrow from "@/features/home/ComeBackTomorrow"
import ContinueWhereLeft from "@/components/ContinueWhereLeft"
import DailyStep from "@/components/DailyStep"
import HeroTrustBar from "@/components/HeroTrustBar"
import HomeWorkHint from "@/components/HomeWorkHint"

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
      <HeroTrustBar />

      {/* POWRÓT */}
      <ContinueWhereLeft />

      {/* KROK DNIA */}
      <DailyStep />

      {/* TESTY */}
      <QuickTests />

      {/* WYBÓR OBSZARU */}
      <WorldPreview />

      {/* JAK TO DZIAŁA */}
      <HowItWorks />

      <StatsCounter />

      {/* NAVIMIND */}
      <section className="py-16 border-t">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-semibold mb-6">
            Nie wiesz co wybrać?
          </h2>

          <a
            href="https://navimind.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-2xl p-6 hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              <MessageCircle className="mt-1" size={22} />

              <div>
                <div className="font-medium mb-1">
                  Porozmawiaj w NaviMind
                </div>

                <div className="text-neutral-600 text-sm">
                  Możesz spokojnie przegadać sytuację i zobaczyć kolejny krok.
                </div>
              </div>
            </div>
          </a>

        </div>
      </section>

      <HomeSeoArticles />

      <HomeArticles />

      <HomeWorkHint />
    
      <PopularTools />

      <TrustSection />

      <Testimonials />

      <FeaturedPartners />

      <ComeBackTomorrow />

      <QuickProblems />

      <ActivityFeed />

      <LiveActivity />
    </>
  )
}