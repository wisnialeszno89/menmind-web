export type World = {
  slug: string
  name: string
  description: string
  preview: string[]
}

export const worlds: World[] = [

{
slug: "kryzys",
name: "Kryzys",
description: "Gdy życie zaczyna się sypać: rozstanie, stres, chaos.",

preview: [
"rozstanie",
"silny stres",
"problemy finansowe",
"samotność"
]

},

{
slug: "odbudowa",
name: "Odbudowa",
description: "Powrót do stabilności, energii i poukładania życia.",

preview: [
"powrót do energii",
"nowa rutyna",
"stabilizacja"
]

},

{
slug: "wzrost",
name: "Wzrost",
description: "Rozwój osobisty, kierunek życia i nowe możliwości.",

preview: [
"kariera",
"dyscyplina",
"rozwój osobisty"
]

},

{
slug: "ojcostwo",
name: "Ojcostwo",
description: "Relacja z dzieckiem i odpowiedzialność ojca.",

preview: [
"relacja z dzieckiem",
"opieka naprzemienna",
"prawa ojca"
]

}

]