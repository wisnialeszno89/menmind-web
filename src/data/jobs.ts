export type JobType = "dam" | "szukam"

export type Job = {
  id: string
  type: JobType
  title: string
  location: string
  description: string
  pay?: string
  featured?: boolean
  createdAt: string
}

export const jobs: Job[] = [

  {
    id: "1",
    type: "dam",
    title: "Praca fizyczna — magazyn",
    location: "Poznań",
    description: "Pakowanie i prace magazynowe.",
    pay: "28 zł/h",
    featured: true,
    createdAt: "2026-03-28"
  },

  {
    id: "2",
    type: "szukam",
    title: "Szukam pracy fizycznej",
    location: "Zielona Góra",
    description: "Dyspozycyjny od zaraz, prawo jazdy kat B.",
    createdAt: "2026-03-30"
  },

  {
    id: "3",
    type: "dam",
    title: "Kierowca kat B",
    location: "Wrocław",
    description: "Rozwożenie towaru.",
    createdAt: "2026-02-01"
  }

]