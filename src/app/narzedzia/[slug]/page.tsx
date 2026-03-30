import { tools } from "@/content/tools"
import BrainDumpPage from "@/features/tools/BrainDumpPage"
import Reset90Page from "@/features/tools/Reset90Page"
import MinimumPage from "@/features/tools/MinimumPage"
import SleepTracker from "@/features/tools/SleepTracker"
import Plan72hPage from "@/features/tools/Plan72hPage"
import { notFound } from "next/navigation"

import RelatedArticles from "@/features/articles/RelatedArticles"
import ExploreTools from "@/components/ExploreTools"
import NextSteps from "@/components/NextSteps"

const toolMap = {
  "brain-dump": BrainDumpPage,
  "reset-90": Reset90Page,
  "reset": Reset90Page,
  "plan-72h": Plan72hPage,
  "minimum": MinimumPage,
  "energy-map": SleepTracker,
}

export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }))
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

      {/* TOOL */}
      <ToolComponent />

      {/* NEXT KROK */}
      <section className="mt-16">
        <NextSteps world="kryzys" />
      </section>

      {/* POWIĄZANE NARZĘDZIA */}
      <section className="mt-16">
        <ExploreTools />
      </section>

      {/* POWIĄZANE ARTYKUŁY */}
      <section className="mt-16 border-t pt-10">
        <h3 className="text-xl font-semibold mb-6">
          Przeczytaj także
        </h3>

        <RelatedArticles world="kryzys" slug={slug} />
      </section>

    </div>
  )
}