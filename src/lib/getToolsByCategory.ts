import { tools } from "@/data/tools"

export function getToolsByCategory(category: string) {
  return tools.filter(
    (tool) => tool.category === category
  )
}

export function getToolsByWorld(world: string) {
  return tools.filter(
    (tool) => tool.world === world
  )
}