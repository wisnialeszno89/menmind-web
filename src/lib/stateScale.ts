export type StateLevel = {
  level: number
  label: string
  meaning: string
  actions: { label: string; href: string }[]
}

export const stateScale: StateLevel[] = [

{
level:0,
label:"stabilnie",
meaning:"Twoje podstawy funkcjonują dobrze.",
actions:[
{label:"Zobacz narzędzia rozwoju",href:"/narzedzia"}
]
},

{
level:1,
label:"napięcie",
meaning:"Pojawia się napięcie i przeciążenie.",
actions:[
{label:"Zrób szybki reset",href:"/narzedzia/reset"}
]
},

{
level:2,
label:"przeciążenie",
meaning:"Organizm i psychika są przeciążone.",
actions:[
{label:"Plan stabilizacji 72h",href:"/narzedzia/plan-72h"}
]
},

{
level:3,
label:"kryzys",
meaning:"Twoja sytuacja wymaga większej uwagi.",
actions:[
{label:"Zobacz ścieżki działania",href:"/sciezki"}
]
},

{
level:4,
label:"alarm",
meaning:"Długotrwałe przeciążenie. Warto poszukać wsparcia.",
actions:[
{label:"Znajdź wsparcie",href:"/propozycje"}
]
}

]