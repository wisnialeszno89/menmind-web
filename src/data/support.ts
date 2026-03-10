export type SupportItem = {
  name: string
  slug: string
  description: string
}

export const supportByWorld: Record<string, SupportItem[]> = {

  kryzys: [
    {
      name: "Psycholog",
      slug: "psycholog",
      description: "Rozmowa z kimś kto pomoże uporządkować emocje i sytuację."
    },
    {
      name: "Mediator rodzinny",
      slug: "mediator",
      description: "Pomoc w konflikcie lub trudnych rozmowach."
    },
    {
      name: "Prawnik rodzinny",
      slug: "prawnik-rodzinny",
      description: "Wsparcie w sprawach rozwodowych, opiece nad dzieckiem i alimentach."
    },
    {
      name: "Grupa wsparcia",
      slug: "grupa-wsparcia",
      description: "Spotkania z innymi mężczyznami w podobnej sytuacji."
    }
  ],

  odbudowa: [
    {
      name: "Trener personalny",
      slug: "trener",
      description: "Powrót do energii przez ruch i trening."
    },
    {
      name: "Dietetyk",
      slug: "dietetyk",
      description: "Odzyskaj energię przez lepsze odżywianie."
    },
    {
      name: "Regeneracja i zdrowie",
      slug: "zdrowie",
      description: "Sen, stres i odbudowa organizmu."
    },
    {
      name: "Aktywności sportowe",
      slug: "sport",
      description: "Sport i ruch jako narzędzie stabilizacji."
    }
  ],

  wzrost: [
    {
      name: "Mentor biznesowy",
      slug: "mentor",
      description: "Ktoś kto pomoże zobaczyć kolejne kroki w karierze."
    },
    {
      name: "Szkolenia i kursy",
      slug: "szkolenia",
      description: "Nowe umiejętności i rozwój kompetencji."
    },
    {
      name: "Networking",
      slug: "networking",
      description: "Poznaj ludzi którzy idą w podobnym kierunku."
    },
    {
      name: "Nowa praca",
      slug: "praca",
      description: "Może to moment na zmianę kierunku zawodowego."
    }
  ],

  ojcostwo: [
    {
      name: "Mediator rodzinny",
      slug: "mediator",
      description: "Pomoc w sprawach związanych z opieką nad dzieckiem."
    },
    {
      name: "Prawnik rodzinny",
      slug: "prawnik",
      description: "Prawo rodzinne, kontakty z dzieckiem i alimenty."
    },
    {
      name: "Psycholog dziecięcy",
      slug: "psycholog-dzieciecy",
      description: "Wsparcie dla relacji ojciec–dziecko."
    },
    {
      name: "Warsztaty dla ojców",
      slug: "warsztaty-ojcowskie",
      description: "Rozwój roli ojca i budowanie relacji."
    }
  ]

}