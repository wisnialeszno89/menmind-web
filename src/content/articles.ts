export type ArticlePreview = {
  slug: string
  title: string
  intro: string
  world: string
  path?: string
  author?: string
  authorSlug?: string
}

export const articles: ArticlePreview[] = [

  {slug:"samotnosc-mezczyzny",title:"Samotność mężczyzny",intro:"Dlaczego tak wielu mężczyzn doświadcza samotności.",world:"kryzys"},
  {slug:"jak-poradzic-sobie-z-rozstaniem",title:"Jak poradzić sobie z rozstaniem",intro:"Rozstanie potrafi zachwiać całym życiem.",world:"kryzys"},
  {slug:"kryzys-po-30",title:"Kryzys mężczyzny po trzydziestce",intro:"Moment gdy zaczynasz inaczej patrzeć na swoje życie.",world:"kryzys"},
  {slug:"brak-sensu-zycia",title:"Gdy życie zaczyna tracić sens",intro:"Dlaczego pojawia się poczucie pustki.",world:"kryzys"},
  {slug:"jak-przestac-myslec-o-bylej",title:"Jak przestać myśleć o byłej",intro:"Dlaczego myśli wracają i jak je uspokoić.",world:"kryzys"},

  {slug:"pierwsze-kroki-po-kryzysie",title:"Pierwsze kroki po kryzysie",intro:"Od czego zacząć gdy najgorsze już minęło.",world:"odbudowa"},
  {slug:"jak-odzyskac-energie",title:"Jak odzyskać energię",intro:"Dlaczego po trudnym czasie czujesz wyczerpanie.",world:"odbudowa"},
  {slug:"dlaczego-rutyna-pomaga",title:"Dlaczego rutyna pomaga wrócić do równowagi",intro:"Prosta struktura dnia zmniejsza chaos.",world:"odbudowa"},
  {slug:"jak-odbudowac-pewnosc-siebie",title:"Jak odbudować pewność siebie",intro:"Po kryzysie wielu mężczyzn traci wiarę w siebie.",world:"odbudowa"},
  {slug:"jak-wrocic-do-ludzi",title:"Jak wrócić do ludzi po trudnym czasie",intro:"Samotność po kryzysie jest bardzo częsta.",world:"odbudowa"},

  // NOWE SEO
  {slug:"kryzys-po-35",title:"Kryzys po 35 roku życia u mężczyzny",intro:"Objawy i pierwsze kroki stabilizacji.",world:"kryzys"},
  {slug:"brak-sensu-zycia-mezczyzna",title:"Brak sensu życia u mężczyzny",intro:"Kiedy wszystko jest, a nic nie cieszy.",world:"kryzys"},
  {slug:"co-robic-po-rozstaniu-mezczyzna",title:"Co zrobić po rozstaniu",intro:"Pierwsze kroki po zakończeniu relacji.",world:"kryzys"},
  {slug:"kryzys-w-malzenstwie-mezczyzna",title:"Kryzys w małżeństwie",intro:"Jak wygląda kryzys z perspektywy mężczyzny.",world:"kryzys"},
  {slug:"brak-motywacji-do-pracy-mezczyzna",title:"Brak motywacji do pracy",intro:"Kiedy przestaje się chcieć działać.",world:"kryzys"},
  {slug:"wypalenie-po-30",title:"Wypalenie po 30",intro:"Dlaczego energia zaczyna znikać.",world:"kryzys"},
  {slug:"jak-ogarnac-finanse-mezczyzna",title:"Jak ogarnąć finanse",intro:"Prosty plan odzyskania kontroli.",world:"odbudowa"},
  {slug:"chaos-w-zyciu-mezczyzna",title:"Chaos w życiu mężczyzny",intro:"Od czego zacząć porządkowanie.",world:"kryzys"}

]