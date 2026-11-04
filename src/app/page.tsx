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
import ActivityFeed from "@/features/home/ActivityFeed"
import QuickTests from "@/features/home/QuickTests"
import ComeBackTomorrow from "@/features/home/ComeBackTomorrow"
import DailyStep from "@/components/DailyStep"
import HeroTrustBar from "@/components/HeroTrustBar"
import HomeWorkHint from "@/components/HomeWorkHint"
import LiveUsers from "@/components/LiveUsers"
import ActionPaths from "@/features/home/ActionPaths"
import StickyAI from "@/components/StickyAI"
import BalancePanel from "@/features/home/BalancePanel"


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

      <div className="flex justify-center -mt-2 mb-6">
      <LiveUsers />
      </div>
      
      {/* KROK DNIA */}
      {/* KROK DNIA */}
      <DailyStep />

      {/* BALANS */}
      <section className="py-10 border-t">
        <div className="max-w-6xl mx-auto px-6">
        <a 
        href="/balans"
        className="block border rounded-xl p-6 hover:shadow-sm transition"
        >
        <div className="font-semibold mb-1">
          Sprawdź swój balans życia
        </div>
        <div className="text-gray-600 text-sm">
          Sen, praca, stres, energia – zobacz gdzie jesteś
        </div>
        </a>
        </div>
        </section>

      {/* TESTY */}
      <QuickTests />

      <ActionPaths /> 

      <div className="text-center text-sm text-gray-500 -mt-4 mb-6">
      lub przejdź klasycznie:
      </div>

      {/* WYBÓR OBSZARU */}
      <WorldPreview />

      {/* JAK TO DZIAŁA */}
      <HowItWorks />

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

      <BalancePanel />

      <StickyAI />
    </>
  )
}