export type Tool = {
  slug: string
  title: string
  description: string
  category: string
  world: string
}

export const tools: Tool[] = [
  {
    slug: "brain-dump",
    title: "Brain dump",
    description: "Wyrzuć chaos z głowy na papier.",
    category: "stabilizacja",
    world: "kryzys"
  },
  {
    slug: "minimum-plan",
    title: "Plan minimum",
    description: "Najprostszy plan dnia kiedy wszystko się sypie.",
    category: "stabilizacja",
    world: "kryzys"
  }
  

]