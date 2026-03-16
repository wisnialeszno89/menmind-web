import { notFound } from "next/navigation"

import WorldLayout from "@/components/layout/WorldLayout"
import WorldArticles from "@/features/worlds/WorldArticles"
import WorldPaths from "@/features/worlds/WorldPaths"
import WorldTools from "@/features/worlds/WorldTools"
import WorldSupport from "@/features/worlds/WorldSupport"

type World =
  | "kryzys"
  | "ojcostwo"
  | "odbudowa"
  | "wzrost"

const worlds: World[] = [
  "kryzys",
  "ojcostwo",
  "odbudowa",
  "wzrost"
]

export default function Page({
  params
}: {
  params: { world: World }
}) {

  const { world } = params

  if (!worlds.includes(world)) return notFound()

  return (

    <WorldLayout title={world}>

      <WorldPaths world={world} />

      <WorldArticles world={world} />

      <WorldTools world={world} />

      <WorldSupport world={world} />

    </WorldLayout>

  )

}