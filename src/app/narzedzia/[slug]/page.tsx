import { tools } from "@/content/tools"
import BrainDumpPage from "@/features/tools/BrainDumpPage"
import Reset90Page from "@/features/tools/Reset90Page"
import MinimumPage from "@/features/tools/MinimumPage"
import SleepTracker from "@/features/tools/SleepTracker"
import Plan72hPage from "@/features/tools/Plan72hPage"
import { notFound } from "next/navigation"

// 🔥 JEDNO źródło prawdy
const toolMap = {
  "brain-dump": BrainDumpPage,
  "reset-90": Reset90Page,
  "reset": Reset90Page, // alias

  "plan-72h": Plan72hPage,
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

  return <ToolComponent />
}