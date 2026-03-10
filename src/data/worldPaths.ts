export type WorldPath = {
  name: string
  slug: string
  description: string
}

export const worldPaths: Record<string, WorldPath[]> = {

  kryzys: [
    {
      name: "Rozstanie",
      slug: "rozstanie",
      description: "Jak przejść przez rozstanie i nie rozwalić sobie życia."
    },
    {
      name: "Silny stres",
      slug: "stres",
      description: "Gdy napięcie i presja zaczynają przejmować kontrolę."
    },
    {
      name: "Problemy finansowe",
      slug: "finanse",
      description: "Kiedy sytuacja finansowa zaczyna się sypać."
    },
    {
      name: "Samotność",
      slug: "samotnosc",
      description: "Gdy czujesz że jesteś z tym wszystkim sam."
    }
  ],

  odbudowa: [
    {
      name: "Odzyskanie energii",
      slug: "energia",
      description: "Sen, ruch i powrót do podstaw."
    },
    {
      name: "Powrót do stabilności",
      slug: "stabilnosc",
      description: "Jak zbudować nową równowagę."
    },
    {
      name: "Nowy plan życia",
      slug: "plan",
      description: "Ułożenie kierunku na kolejne lata."
    }
  ],

  wzrost: [
    {
      name: "Kariera",
      slug: "kariera",
      description: "Budowanie silniejszej drogi zawodowej."
    },
    {
      name: "Dyscyplina",
      slug: "dyscyplina",
      description: "System działania zamiast chaosu."
    },
    {
      name: "Relacje",
      slug: "relacje",
      description: "Budowanie wartościowych relacji."
    }
  ],

  ojcostwo: [
    {
      name: "Po rozwodzie",
      slug: "po-rozwodzie",
      description: "Jak być ojcem mimo rozpadu związku."
    },
    {
      name: "Relacja z dzieckiem",
      slug: "relacja",
      description: "Jak odbudować więź z dzieckiem."
    },
    {
      name: "Sprawy prawne",
      slug: "prawo",
      description: "Kontakty z dzieckiem, opieka i prawo."
    }
    
  ]

}
kryzys: [

{
name: "Rozstanie",
slug: "rozstanie",
description: "Jak przejść przez rozpad relacji i nie rozwalić sobie życia."
},

{
name: "Silny stres",
slug: "stres",
description: "Kiedy napięcie i presja zaczynają przejmować kontrolę."
},

{
name: "Samotność",
slug: "samotnosc",
description: "Gdy czujesz że zostałeś z tym wszystkim sam."
},

{
name: "Problemy finansowe",
slug: "finanse",
description: "Kiedy sytuacja finansowa zaczyna się sypać."
},

{
name: "Problemy prawne",
slug: "prawo",
description: "Rozwód, alimenty, konflikty i sprawy sądowe."
},

{
name: "Utrata kierunku",
slug: "brak-kierunku",
description: "Moment kiedy nie wiesz już dokąd iść dalej."
}

]