export type Category = {
  slug: string
  label: string
  group: string
  seoTitle: string
  seoDescription: string
}

export type CategoryGroup = {
  slug: string
  label: string
}

/*
GRUPY KATEGORII
*/

export const categoryGroups: CategoryGroup[] = [

  {
    slug: "psychika",
    label: "Wsparcie psychiczne",
  },

  {
    slug: "prawo",
    label: "Prawo i konflikty",
  },

  {
    slug: "energia",
    label: "Ciało i energia",
  },

  {
    slug: "kierunek",
    label: "Praca i kierunek",
  },

  {
    slug: "relacje",
    label: "Relacje",
  },

  {
    slug: "rozwoj",
    label: "Rozwój",
  },

  {
    slug: "styl-zycia",
    label: "Styl życia",
  },

]

/*
KATEGORIE
*/

export const categories: Category[] = [

  /* PSYCHIKA */

  {
    slug: "psycholog",
    label: "Psycholog",
    group: "psychika",
    seoTitle: "Psycholog dla mężczyzn",
    seoDescription:
      "Znajdź psychologa specjalizującego się w pracy z mężczyznami.",
  },

  {
    slug: "psychiatra",
    label: "Psychiatra",
    group: "psychika",
    seoTitle: "Psychiatra dla mężczyzn",
    seoDescription:
      "Wsparcie psychiatryczne dla mężczyzn w kryzysie lub przeciążeniu.",
  },

  {
    slug: "terapia-uzaleznien",
    label: "Terapia uzależnień",
    group: "psychika",
    seoTitle: "Terapia uzależnień dla mężczyzn",
    seoDescription:
      "Specjaliści pomagający wyjść z uzależnień i odzyskać kontrolę.",
  },

  {
    slug: "grupy-wsparcia",
    label: "Grupy wsparcia",
    group: "psychika",
    seoTitle: "Grupy wsparcia dla mężczyzn",
    seoDescription:
      "Spotkania i społeczności dla mężczyzn przechodzących przez trudne momenty.",
  },

  /* PRAWO */

  {
    slug: "prawnik-rozwodowy",
    label: "Prawnik rozwodowy",
    group: "prawo",
    seoTitle: "Prawnik rozwodowy dla mężczyzn",
    seoDescription:
      "Pomoc prawna w sprawach rozwodowych, kontaktach z dzieckiem i alimentach.",
  },

  {
    slug: "mediacje",
    label: "Mediator",
    group: "prawo",
    seoTitle: "Mediator rodzinny",
    seoDescription:
      "Rozwiązywanie konfliktów rodzinnych bez eskalacji sądowej.",
  },

  {
    slug: "alimenty",
    label: "Sprawy alimentacyjne",
    group: "prawo",
    seoTitle: "Pomoc w sprawach alimentacyjnych",
    seoDescription:
      "Doradztwo prawne dotyczące alimentów i obowiązków rodzicielskich.",
  },

  {
    slug: "opieka-nad-dzieckiem",
    label: "Opieka nad dzieckiem",
    group: "prawo",
    seoTitle: "Opieka nad dzieckiem po rozwodzie",
    seoDescription:
      "Wsparcie prawne w ustalaniu opieki nad dzieckiem i kontaktów.",
  },

  /* ENERGIA */

  {
    slug: "trener-personalny",
    label: "Trener personalny",
    group: "energia",
    seoTitle: "Trener personalny",
    seoDescription:
      "Trening i odbudowa siły fizycznej.",
  },

  {
    slug: "fizjoterapia",
    label: "Fizjoterapia",
    group: "energia",
    seoTitle: "Fizjoterapia",
    seoDescription:
      "Powrót do sprawności fizycznej i regeneracji.",
  },

  {
    slug: "masaz",
    label: "Masaż",
    group: "energia",
    seoTitle: "Masaż regeneracyjny",
    seoDescription:
      "Regeneracja ciała i redukcja napięcia.",
  },

  {
    slug: "sporty-walki",
    label: "Sporty walki",
    group: "energia",
    seoTitle: "Sporty walki",
    seoDescription:
      "Trening siły, dyscypliny i charakteru.",
  },

  /* KIERUNEK */

  {
    slug: "doradztwo-zawodowe",
    label: "Doradztwo zawodowe",
    group: "kierunek",
    seoTitle: "Doradztwo zawodowe",
    seoDescription:
      "Wsparcie w zmianie pracy i kierunku zawodowego.",
  },

  {
    slug: "mentor-biznesowy",
    label: "Mentor biznesowy",
    group: "kierunek",
    seoTitle: "Mentor biznesowy",
    seoDescription:
      "Wsparcie w prowadzeniu biznesu i rozwoju firmy.",
  },

  {
    slug: "finanse",
    label: "Doradztwo finansowe",
    group: "kierunek",
    seoTitle: "Doradztwo finansowe",
    seoDescription:
      "Planowanie finansowe i stabilizacja sytuacji.",
  },

  /* RELACJE */

  {
    slug: "terapia-par",
    label: "Terapia par",
    group: "relacje",
    seoTitle: "Terapia par",
    seoDescription:
      "Wsparcie w naprawie relacji i komunikacji.",
  },

  {
    slug: "komunikacja",
    label: "Komunikacja w relacji",
    group: "relacje",
    seoTitle: "Warsztaty komunikacji",
    seoDescription:
      "Budowanie zdrowej komunikacji w relacjach.",
  },

  /* ROZWÓJ */

  {
    slug: "warsztaty",
    label: "Warsztaty rozwojowe",
    group: "rozwoj",
    seoTitle: "Warsztaty dla mężczyzn",
    seoDescription:
      "Warsztaty rozwoju osobistego i mentalnego.",
  },

  {
    slug: "wyjazdy",
    label: "Wyjazdy rozwojowe",
    group: "rozwoj",
    seoTitle: "Wyjazdy dla mężczyzn",
    seoDescription:
      "Wyjazdy integracyjne i rozwojowe.",
  },

  /* STYL ŻYCIA */

  {
    slug: "zegarki",
    label: "Zegarki",
    group: "styl-zycia",
    seoTitle: "Zegarki dla mężczyzn",
    seoDescription:
      "Klasyczne i nowoczesne zegarki dla mężczyzn.",
  },

  {
    slug: "noze",
    label: "Noże",
    group: "styl-zycia",
    seoTitle: "Noże outdoorowe",
    seoDescription:
      "Sprzęt outdoorowy i survivalowy.",
  },

  {
    slug: "sprzet-outdoor",
    label: "Sprzęt outdoor",
    group: "styl-zycia",
    seoTitle: "Sprzęt outdoor dla mężczyzn",
    seoDescription:
      "Sprzęt do aktywności w naturze.",
  },

]