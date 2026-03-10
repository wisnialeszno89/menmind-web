export type PathStep = {
  title: string
  description: string
  link?: string
}

export const pathSteps: Record<string, PathStep[]> = {

  rozstanie: [

    {
      title: "Zrozum co się stało",
      description: "Najpierw zobacz co naprawdę wydarzyło się w relacji.",
      link: "/content/co-dzieje-sie-w-kryzysie"
    },

    {
      title: "Uspokój emocje",
      description: "Zatrzymaj spiralę stresu i odzyskaj stabilność.",
      link: "/narzedzia/reset"
    },

    {
      title: "Uporządkuj chaos w głowie",
      description: "Wyrzuć myśli na papier i zobacz co jest naprawdę ważne.",
      link: "/narzedzia/brain-dump"
    },

    {
      title: "Zadbaj o podstawy",
      description: "Sen, jedzenie i ruch pomagają wrócić do równowagi.",
      link: "/narzedzia/minimum"
    },

    {
      title: "Zacznij budować nowy kierunek",
      description: "Powoli zacznij układać kolejne kroki życia.",
      link: "/narzedzia/kierunek"
    }

  ],

  stres: [

    {
      title: "Zatrzymaj napięcie",
      description: "Najpierw uspokój ciało i układ nerwowy.",
      link: "/narzedzia/reset"
    },

    {
      title: "Zrozum źródło stresu",
      description: "Zobacz skąd naprawdę bierze się napięcie i presja."
    },

    {
      title: "Uporządkuj dzień",
      description: "Mała struktura dnia potrafi zmienić bardzo dużo.",
      link: "/narzedzia/minimum"
    }

  ]

}