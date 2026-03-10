export type StateLevel = {
  level: number
  label: string
  color: string
  meaning: string
  actions: { label: string; href: string }[]
}

export const stateScale: StateLevel[] = [

{
level:0,
label:"stabilnie",
color:"text-green-600",
meaning:"Twoja sytuacja wygląda stabilnie. Dbaj o rytm dnia i rozwój.",
actions:[
{label:"Zobacz narzędzia rozwoju",href:"/narzedzia"}
]
},

{
level:1,
label:"napięcie",
color:"text-yellow-600",
meaning:"Pojawia się napięcie. Warto zadbać o regenerację.",
actions:[
{label:"Zrób szybki reset",href:"/narzedzia/reset"}
]
},

{
level:2,
label:"przeciążenie",
color:"text-orange-600",
meaning:"Organizm jest przeciążony. Potrzebna stabilizacja.",
actions:[
{label:"Plan stabilizacji 72h",href:"/narzedzia/stabilizacja/plan-72h"}
]
},

{
level:3,
label:"kryzys",
color:"text-red-600",
meaning:"Twoja sytuacja wymaga większej uwagi.",
actions:[
{label:"Zobacz ścieżki działania",href:"/sciezki"}
]
},

{
level:4,
label:"alarm",
color:"text-red-700",
meaning:"Długotrwałe przeciążenie. Warto poszukać wsparcia.",
actions:[
{label:"Znajdź wsparcie",href:"/propozycje"}
]
}

]