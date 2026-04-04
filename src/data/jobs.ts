export type JobType = "dam" | "szukam"

export type Job = {
  id: string
  type: JobType
  title: string
  location: string
  description: string
  pay?: string
  featured?: boolean
  archived?: boolean
  status?: "pending" | "approved" | "rejected"
  createdAt: string
}

export const jobs: Job[] = [

  {
    id: "1",
    type: "dam",
    title: "Praca fizyczna — magazyn",
    location: "Poznań",
    description: "Pakowanie i prace magazynowe.",
    pay: "35 zł/h",
    featured: false,
    archived: true,
    createdAt: "2026-03-28"
    },

  {
    id: "2",
    type: "szukam",
    title: "Szukam pracy fizycznej",
    location: "Zielona Góra",
    description: "Dyspozycyjny od zaraz, prawo jazdy kat B.",
    featured: false,
    archived: true,
    createdAt: "2026-03-30"
    },

  {
    id: "3",
    type: "dam",
    title: "Kierowca kat B",
    location: "Wrocław",
    description: "Rozwożenie towaru.",
    featured: false,
    archived: true,
    createdAt: "2026-02-01"
    },

    {
    id: "4",
    type: "dam",
    title: "Kierowca kat C",
    location: "Wrocław",
    description: "Transport międzynarodowy.",
    featured: false,
    archived: true,
    createdAt: "2026-02-01"
    
   }

]  


export const archivedJobs = {
  dam: [
    {
      title: "Pomocnik budowlany",
      location: "Poznań",
      pay: "30 zł/h"
    },
    {
      title: "Magazynier",
      location: "Wrocław",
      pay: "5200 zł"
    },
    {
      title: "Kierowca kat. B",
      location: "Warszawa",
      pay: "6000 zł"
    },
    {
      title: "Operator wózka widłowego",
      location: "Łódź",
      pay: "28 zł/h"
    },
    {
      title: "Praca fizyczna przy przeprowadzkach",
      location: "Katowice",
      pay: "200 zł/dzień"
    }
  ],

  szukam: [
    {
      title: "Szukam pracy fizycznej",
      location: "Gdańsk"
    },
    {
      title: "Kierowca kat. B – dyspozycyjny",
      location: "Poznań"
    },
    {
      title: "Praca dodatkowa weekendy",
      location: "Warszawa"
    },
    {
      title: "Magazyn / produkcja",
      location: "Wrocław"
    },
    {
      title: "Pomocnik budowlany",
      location: "Łódź"
    }
  ]
}
