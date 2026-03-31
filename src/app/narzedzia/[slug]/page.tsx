import BrainDumpPage from "@/features/tools/BrainDumpPage"
import Reset90Page from "@/features/tools/Reset90Page"
import MinimumPage from "@/features/tools/MinimumPage"
import SleepTracker from "@/features/tools/SleepTracker"
import Plan72hPage from "@/features/tools/Plan72hPage"
import DecisionCompass from "@/app/narzedzia/kompas-decyzji/page"

import { notFound } from "next/navigation"

import RelatedArticles from "@/features/articles/RelatedArticles"
import ExploreTools from "@/components/ExploreTools"
import NextSteps from "@/components/NextSteps"
import ToolCompleted from "@/components/ToolCompleted"
import ToolNextBar from "@/components/ToolNextBar"

const toolMap = {
  "brain-dump": BrainDumpPage,
  "reset-90": Reset90Page,
  "reset": Reset90Page,
  "plan-72h": Plan72hPage,
  "minimum": MinimumPage,
  "energy-map": SleepTracker,
  "kompas-decyzji": DecisionCompass,
  "reset-7-krokow": Reset90Page,
  "stabilizacja": MinimumPage,
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const ToolComponent = toolMap[slug as keyof typeof toolMap]

  if (!ToolComponent) return notFound()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      <ToolCompleted slug={slug} />

      <ToolComponent />

      <ToolNextBar />

      <section className="mt-16">
        <NextSteps world="kryzys" />
      </section>

      <section className="mt-16">
        <ExploreTools />
      </section>

      <section className="mt-16 border-t pt-10">
        <h3 className="text-xl font-semibold mb-6">
          Przeczytaj także
        </h3>

        <RelatedArticles world="kryzys" slug={slug} />
      </section>

    </div>
  )
}