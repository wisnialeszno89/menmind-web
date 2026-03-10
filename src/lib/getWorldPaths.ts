import { worldMap } from "@/data/worldMap"

export function getWorldPaths(worldSlug: string) {

  const world = worldMap.find(
    (w) => w.slug === worldSlug
  )

  return world?.paths || []

}