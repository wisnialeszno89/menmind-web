import { notFound } from "next/navigation"
import { tools } from "@/content/tools"

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

  try {
    const Tool = (await import(`@/app/narzedzia/${slug}/page`)).default
    return <Tool />
  } catch {
    return notFound()
  }
}