import Link from "next/link"

export default function WorldFirstSteps({ world }: { world: string }) {

  const steps: Record<string, any[]> = {

    kryzys: [
      {
        title: "Zrozum co się dzieje",
        description: "Najpierw uporządkuj sytuację i zobacz co naprawdę się wydarzyło.",
        link: "/content/dlaczego-mezczyzni-zwlekaja"
      },
      {
        title: "Uspokój chaos",
        description: "Zatrzymaj emocjonalną spiralę i odzyskaj kontrolę.",
        link: "/narzedzia/reset"
      },
      {
        title: "Zrób pierwszy ruch",
        description: "Nie wszystko naraz. Jeden konkretny krok.",
        link: "/narzedzia/minimum"
      }
    ],

    odbudowa: [
      {
        title: "Odzyskaj energię",
        description: "Sen, ruch i podstawowa stabilność.",
        link: "/narzedzia/energia"
      },
      {
        title: "Uporządkuj dzień",
        description: "Zbuduj prostą strukturę dnia.",
        link: "/narzedzia/minimum"
      },
      {
        title: "Wracaj do działania",
        description: "Małe kroki które przywracają sprawczość.",
        link: "/narzedzia/kierunek"
      }
    ],

    wzrost: [
      {
        title: "Wyznacz kierunek",
        description: "Zdecyduj dokąd naprawdę chcesz iść.",
        link: "/narzedzia/kierunek"
      },
      {
        title: "Buduj dyscyplinę",
        description: "System codziennych działań.",
        link: "/narzedzia/minimum"
      },
      {
        title: "Rozwijaj potencjał",
        description: "Wejdź na wyższy poziom życia.",
        link: "/narzedzia/energia"
      }
    ],

    ojcostwo: [
      {
        title: "Zrozum sytuację",
        description: "Zobacz gdzie naprawdę jesteś jako ojciec.",
        link: "/ojcostwo/ojciec-po-rozwodzie"
      },
      {
        title: "Popraw relację",
        description: "Małe działania które odbudowują więź.",
        link: "/ojcostwo/rytual-15-min"
      },
      {
        title: "Zadbaj o przyszłość",
        description: "Świadome ojcostwo na dłuższą drogę.",
        link: "/ojcostwo/plan-awaryjny"
      }
    ]

  }

  const worldSteps = steps[world] || []

  if (worldSteps.length === 0) return null

  return (

    <section className="mb-20">

      <h2 className="text-2xl font-semibold text-black mb-6">
        Pierwsze kroki
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {worldSteps.map((step, index) => (

          <Link
            key={index}
            href={step.link}
            className="border rounded-xl p-6 hover:shadow"
          >

            <div className="text-sm text-gray-500 mb-2">
              krok {index + 1}
            </div>

            <h3 className="font-semibold text-black mb-2">
              {step.title}
            </h3>

            <p className="text-sm text-gray-700">
              {step.description}
            </p>

          </Link>

        ))}

      </div>

    </section>

  )

}