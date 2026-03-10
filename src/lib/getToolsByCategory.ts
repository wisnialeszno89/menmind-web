import { tools } from "@/data/tools"

export function getToolsByWorld(world: string) {

  return tools.filter(
    (tool) => tool.world === world
  )

}