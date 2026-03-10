export type Word = {
  slug: string
  title: string
  description: string
  world?: string
}

export const words: Word[] = [

{
slug: "alienacja-rodzicielska",
title: "Alienacja rodzicielska",
description:
"Alienacja rodzicielska to sytuacja, w której jedno z rodziców utrudnia dziecku kontakt z drugim rodzicem i wpływa na relację dziecka z drugim rodzicem.",
world: "ojcostwo"
},

{
slug: "opieka-naprzemienna",
title: "Opieka naprzemienna",
description:
"Opieka naprzemienna oznacza, że dziecko mieszka naprzemiennie u obojga rodziców według ustalonego harmonogramu.",
world: "ojcostwo"
},

{
slug: "alimenty",
title: "Alimenty",
description:
"Alimenty to świadczenie finansowe na utrzymanie dziecka, które jeden z rodziców płaci drugiemu.",
world: "ojcostwo"
},

{
slug: "mediacja-rodzinna",
title: "Mediacja rodzinna",
description:
"Mediacja rodzinna to proces rozwiązywania konfliktów przy udziale bezstronnego mediatora.",
world: "kryzys"
},

{
slug: "wypalenie-zawodowe",
title: "Wypalenie zawodowe",
description:
"Wypalenie zawodowe to stan przewlekłego zmęczenia psychicznego i emocjonalnego spowodowany długotrwałym stresem w pracy.",
world: "kryzys"
},

{
slug: "kryzys-zyciowy",
title: "Kryzys życiowy",
description:
"Kryzys życiowy to moment, w którym dotychczasowy sposób funkcjonowania przestaje działać i pojawia się potrzeba zmiany.",
world: "kryzys"
},

{
slug: "rozwod",
title: "Rozwód",
description:
"Rozwód to formalne zakończenie małżeństwa przez sąd.",
world: "kryzys"
},

{
slug: "podzial-majatku",
title: "Podział majątku",
description:
"Podział majątku to proces dzielenia wspólnego majątku małżonków po rozwodzie.",
world: "kryzys"
},

{
slug: "stres",
title: "Stres",
description:
"Stres to reakcja organizmu na trudne sytuacje i przeciążenie psychiczne.",
world: "kryzys"
},

{
slug: "samotnosc",
title: "Samotność",
description:
"Samotność to stan emocjonalny wynikający z braku bliskich relacji lub poczucia niezrozumienia.",
world: "kryzys"
}

]