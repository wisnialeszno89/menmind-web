export type World = "kryzys" | "odbudowa" | "wzrost" | "ojcostwo"

export type Tool = {
  slug: string
  title: string
  description: string
  world: World
}

export const tools: Tool[] = [
  {
    slug: "brain-dump",
    title: "Brain Dump",
    description: "Wyrzuć wszystko z głowy",
    world: "kryzys"
  },
  {
    slug: "reset-90",
    title: "Reset 90 sekund",
    description: "Szybkie uspokojenie ciała",
    world: "kryzys"
  },
  {
    slug: "plan-72h",
    title: "Plan 72h",
    description: "Ustabilizuj sytuację w 3 dni",
    world: "kryzys"
  },
  {
    slug: "energy-map",
    title: "Mapa energii",
    description: "Zobacz gdzie tracisz energię",
    world: "wzrost"
  }
]