export type Article = {
  slug: string
  title: string
  intro: string
  world: string
  author?: string
  authorSlug?: string
}

export const articles: Article[] = [

  // =====================
  // KRYZYS
  // =====================

  {
    slug: "dlaczego-mezczyzni-zwlekaja",
    title: "Dlaczego mężczyźni zwlekają z proszeniem o pomoc",
    intro: "Wielu mężczyzn próbuje radzić sobie samemu aż do momentu, gdy sytuacja staje się naprawdę trudna.",
    world: "kryzys",
    author: "MenMind",
    authorSlug: "menmind"
  },

  {
    slug: "co-dzieje-sie-w-kryzysie",
    title: "Co naprawdę dzieje się z człowiekiem w kryzysie",
    intro: "Kryzys to moment przeciążenia systemu. Zrozumienie tego pomaga odzyskać kontrolę.",
    world: "kryzys"
  },

  {
    slug: "jak-mezczyzni-reaguja-na-stres",
    title: "Jak mężczyźni reagują na stres",
    intro: "Presja często powoduje wycofanie, złość albo całkowite zamknięcie.",
    world: "kryzys"
  },

  {
    slug: "pierwsze-48h-kryzysu",
    title: "Pierwsze 48 godzin kryzysu",
    intro: "To jak zareagujesz na początku ma ogromny wpływ na dalszy rozwój sytuacji.",
    world: "kryzys"
  },

  {
    slug: "kiedy-warto-szukac-pomocy",
    title: "Kiedy naprawdę warto szukać pomocy",
    intro: "Nie każdy problem wymaga specjalisty. Ale są momenty kiedy warto nie być z tym samemu.",
    world: "kryzys"
  },

  // =====================
  // ODBUDOWA
  // =====================

  {
    slug: "jak-odbudowac-energie",
    title: "Jak odbudować energię po trudnym okresie",
    intro: "Po kryzysie organizm i psychika potrzebują czasu na regenerację.",
    world: "odbudowa"
  },

  {
    slug: "dlaczego-rutyna-jest-wazna",
    title: "Dlaczego rutyna pomaga wrócić do równowagi",
    intro: "Prosta struktura dnia może znacząco zmniejszyć chaos.",
    world: "odbudowa"
  },

  {
    slug: "odbudowa-po-kryzysie",
    title: "Jak odbudować życie po kryzysie",
    intro: "Kryzys nie musi oznaczać końca. Często jest początkiem zmiany.",
    world: "odbudowa"
  },

  // =====================
  // WZROST
  // =====================

  {
    slug: "rozwoj-mezczyzny",
    title: "Rozwój mężczyzny po trzydziestce",
    intro: "Moment w życiu kiedy wielu mężczyzn zaczyna szukać głębszego kierunku.",
    world: "wzrost"
  },

  {
    slug: "dlaczego-dyscyplina-jest-wazna",
    title: "Dlaczego dyscyplina jest ważniejsza niż motywacja",
    intro: "Motywacja przychodzi i odchodzi, system działania zostaje.",
    world: "wzrost"
  },

  {
    slug: "jak-znalezc-kierunek",
    title: "Jak znaleźć kierunek w życiu",
    intro: "Brak kierunku to częsty problem w dorosłym życiu.",
    world: "wzrost"
  },

  // =====================
  // OJCOSTWO
  // =====================

  {
    slug: "ojciec-po-rozwodzie",
    title: "Ojciec po rozwodzie",
    intro: "Jak utrzymać relację z dzieckiem po rozpadzie związku.",
    world: "ojcostwo"
  },

  {
    slug: "dlaczego-relacja-z-dzieckiem-jest-wazna",
    title: "Dlaczego relacja ojca z dzieckiem jest tak ważna",
    intro: "Obecność ojca ma ogromny wpływ na rozwój dziecka.",
    world: "ojcostwo"
  },

  {
    slug: "kontakty-z-dzieckiem",
    title: "Kontakty z dzieckiem po rozstaniu",
    intro: "Jak zadbać o regularny kontakt i relację.",
    world: "ojcostwo"
  }

]