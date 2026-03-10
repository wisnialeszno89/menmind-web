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
      name: "Powrót do energii",
      slug: "energia",
      description: "Jak odzyskać siłę fizyczną i psychiczną."
    },
    {
      name: "Nowa stabilność",
      slug: "stabilnosc",
      description: "Budowanie nowej równowagi w życiu."
    },
    {
      name: "Rutyna i dyscyplina",
      slug: "rutyna",
      description: "Małe codzienne działania które stabilizują życie."
    }
  ],

  wzrost: [
    {
      name: "Kariera",
      slug: "kariera",
      description: "Rozwój zawodowy i nowe możliwości."
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
      name: "Relacja z dzieckiem",
      slug: "relacja",
      description: "Jak budować więź z dzieckiem."
    },
    {
      name: "Po rozwodzie",
      slug: "po-rozwodzie",
      description: "Jak być ojcem mimo rozpadu relacji."
    },
    {
      name: "Sprawy prawne",
      slug: "prawo",
      description: "Kontakty, opieka i prawo rodzinne."
    }
  ]

}