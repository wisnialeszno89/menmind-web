export type Article = {
  slug: string
  title: string
  intro: string
  world: string
  path?: string
}

export const articles: Article[] = [

{
slug: "dlaczego-mezczyzni-zwlekaja",
title: "Dlaczego mężczyźni zwlekają z decyzją",
intro: "Wielu mężczyzn w kryzysie wstrzymuje decyzje. To nie zawsze brak odwagi.",
world: "kryzys",
path: "rozstanie"
},

{
slug: "jak-mezczyzni-reaguja-na-stres",
title: "Jak mężczyźni reagują na stres",
intro: "Stres u mężczyzn często objawia się wycofaniem albo agresją.",
world: "kryzys",
path: "rozstanie"
},

{
slug: "dlaczego-mezczyzni-milcza",
title: "Dlaczego mężczyźni milczą w kryzysie",
intro: "Milczenie to często mechanizm obronny.",
world: "kryzys",
path: "dol-psychiczny"
},

{
slug: "energia-i-dyscyplina",
title: "Dlaczego dyscyplina daje energię",
intro: "Struktura dnia stabilizuje psychikę.",
world: "odbudowa",
path: "fundament-dyscypliny"
},

{
slug: "dlaczego-cialo-ma-znaczenie",
title: "Dlaczego ciało wpływa na psychikę",
intro: "Energia fizyczna i mentalna są połączone.",
world: "odbudowa",
path: "odbudowa-ciala"
},

{
slug: "czym-jest-przywodztwo",
title: "Czym naprawdę jest przywództwo",
intro: "Przywództwo zaczyna się od odpowiedzialności za siebie.",
world: "wzrost",
path: "przywodztwo"
},

{
slug: "koncentracja-w-swiecie-rozproszen",
title: "Koncentracja w świecie rozproszeń",
intro: "Uwaga to jedna z najcenniejszych umiejętności.",
world: "wzrost",
path: "koncentracja"
}

]