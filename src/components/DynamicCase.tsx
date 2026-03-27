"use client"

export default function DynamicCase(){

  const cases = [
    "Mężczyzna 34 lata. Chaos po rozstaniu. Po 10 dniach wrócił do rutyny.",
    "Facet 41 lat. Wypalenie zawodowe. Zaczął od planu 72h.",
    "Ojciec 37 lat. Problemy finansowe. Uporządkował budżet.",
    "Mężczyzna 29 lat. Brak kierunku. Wybrał ścieżkę wzrostu."
  ]

  const random = Math.floor(Math.random()*cases.length)

  return(
    <div className="border rounded-xl p-6 bg-neutral-50">
      <p className="text-sm text-gray-500 mb-2">
        Podobna sytuacja
      </p>

      <p className="font-medium">
        {cases[random]}
      </p>
    </div>
  )
}