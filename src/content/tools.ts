export type World = "kryzys" | "odbudowa" | "wzrost" | "ojcostwo"

export type Tool = {
  slug: string
  title: string
  description: string
  world: World
}

export const tools: Tool[] = [
  {
    slug: "brain-dump",
    title: "Brain Dump",
    description: "Wyrzuć wszystko z głowy",
    world: "kryzys"
  },
  {
    slug: "reset-90",
    title: "Reset 90 sekund",
    description: "Szybkie uspokojenie ciała",
    world: "kryzys"
  },
  {
    slug: "plan-72h",
    title: "Plan 72h",
    description: "Ustabilizuj sytuację w 3 dni",
    world: "kryzys"
  },
  {
    slug: "energy-map",
    title: "Mapa energii",
    description: "Zobacz gdzie tracisz energię",
    world: "wzrost"
  },
  {
  slug: "kompas-decyzji",
  title: "Kompas decyzji",
  description: "Pomaga zdecydować: działać czy poczekać",
  world: "wzrost"
  },
  {
  slug: "plan-czasu-z-dzieckiem",
  title: "Plan czasu z dzieckiem",
  description: "Pomysły na wspólny czas w 15 min, godzinę lub weekend",
  world: "ojcostwo"
  },
  {
  slug: "checklista-obecnego-ojca",
  title: "Checklista obecnego ojca",
  description: "Szybkie sprawdzenie czy jesteś dziś obecny dla dziecka",
  world: "ojcostwo"
  },
  {
  slug: "generator-rozmow-z-dzieckiem",
  title: "Generator rozmów z dzieckiem",
  description: "Jedno pytanie, które pomaga zacząć rozmowę",
  world: "ojcostwo"
  },
  {
  slug: "plan-rozmowy-po-rozstaniu",
  title: "Plan rozmowy po rozstaniu",
  description: "Jak spokojnie porozmawiać z dzieckiem o rozstaniu",
  world: "ojcostwo"
  },
  {
  slug: "tracker-kontaktu-z-dzieckiem",
  title: "Tracker kontaktu z dzieckiem",
  description: "Zaznacz dni, w których miałeś kontakt z dzieckiem",
  world: "ojcostwo"
  },
  {
  slug: "plan-finansowy",
  title: "Plan finansowy",
  description: "Plan wyjścia z chaosu finansowego",
  world: "odbudowa"
  },
  {
  slug: "test-stagnacji",
  title: "Test stagnacji",
  description: "Sprawdź czy stoisz w miejscu czy to tylko zmęczenie",
  world: "wzrost"
  },
  {
  slug: "test-zmiany-pracy",
  title: "Czy zmieniać pracę?",
  description: "Sprawdź czy to stagnacja czy czas na zmianę",
  world: "wzrost"
  },
  {
  slug: "test-kierunku-zycia",
  title: "Test kierunku życia",
  description: "Sprawdź czy stoisz w miejscu czy czas na zmianę",
  world: "wzrost"
  },
  ,
{
  slug: "test-sytuacji",
  title: "Test sytuacji",
  description: "Sprawdź w jakim miejscu życia jesteś",
  world: "kryzys"
},
{
  slug: "test-stresu",
  title: "Test stresu",
  description: "Sprawdź poziom napięcia",
  world: "kryzys"
},
{
  slug: "test-chaosu",
  title: "Test chaosu",
  description: "Zobacz czy potrzebujesz stabilizacji",
  world: "kryzys"
},
{
  slug: "test-energii",
  title: "Test energii",
  description: "Sprawdź poziom energii",
  world: "kryzys"
},
{
  slug: "test-przeciazenia",
  title: "Test przeciążenia",
  description: "Sprawdź czy jesteś przeciążony",
  world: "kryzys"
},
{
  slug: "test-wypalenia",
  title: "Test wypalenia",
  description: "Sprawdź objawy wypalenia",
  world: "kryzys"
},
{
  slug: "test-zycia",
  title: "Test życia",
  description: "Ocena ogólnej sytuacji",
  world: "wzrost"
},
{
  slug: "test-kierunku",
  title: "Test kierunku",
  description: "Sprawdź kierunek działania",
  world: "wzrost"
},
{
  slug: "test-relacji",
  title: "Test relacji",
  description: "Sprawdź stan relacji",
  world: "odbudowa"
},
{
  slug: "test-relacji-ratowac",
  title: "Ratować relację?",
  description: "Sprawdź czy walczyć czy odpuścić",
  world: "odbudowa"
}

]