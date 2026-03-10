import Link from "next/link"

export default function WorldFirstSteps({ world }: { world: string }) {

  const steps: Record<string, any[]> = {

    kryzys: [
      {
        title: "Zrozum co się dzieje",
        description: "Najpierw zobacz co naprawdę się wydarzyło.",
        link: "/content/co-dzieje-sie-w-kryzysie"
      },
      {
        title: "Uspokój chaos",
        description: "Zatrzymaj spiralę emocji i odzyskaj stabilność.",
        link: "/narzedzia/reset"
      },
      {
        title: "Zrób pierwszy krok",
        description: "Mały konkretny krok pomaga odzyskać kontrolę.",
        link: "/narzedzia/minimum"
      }
    ],

    odbudowa: [
      {
        title: "Odzyskaj energię",
        description: "Sen, ruch i regeneracja są fundamentem.",
        link: "/narzedzia/energia"
      },
      {
        title: "Uporządkuj dzień",
        description: "Mała struktura dnia przywraca stabilność.",
        link: "/narzedzia/minimum"
      },
      {
        title: "Zacznij działać",
        description: "Powoli wracaj do aktywności i planów.",
        link: "/narzedzia/kierunek"
      }
    ],

    wzrost: [
      {
        title: "Określ kierunek",
        description: "Zastanów się gdzie chcesz iść dalej.",
        link: "/narzedzia/kierunek"
      },
      {
        title: "Buduj dyscyplinę",
        description: "System działania jest ważniejszy niż motywacja.",
        link: "/narzedzia/minimum"
      },
      {
        title: "Rozwijaj kompetencje",
        description: "Nowe umiejętności otwierają nowe możliwości.",
        link: "/content/rozwoj-mezczyzny"
      }
    ],

    ojcostwo: [
      {
        title: "Zrozum sytuację",
        description: "Najpierw zobacz gdzie jesteś jako ojciec.",
        link: "/ojcostwo/ojciec-po-rozwodzie"
      },
      {
        title: "Popraw relację",
        description: "Małe działania budują więź z dzieckiem.",
        link: "/ojcostwo/rytual-15-min"
      },
      {
        title: "Zadbaj o przyszłość",
        description: "Świadome ojcostwo to decyzje na lata.",
        link: "/ojcostwo/plan-awaryjny"
      }
    ]

  }

  const worldSteps = steps[world] || []

  if (worldSteps.length === 0) return null

  return (

    <section className="mb-20">

      <h2 className="text-2xl font-semibold text-black mb-6">
        Możesz zacząć od
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {worldSteps.map((step, index) => (

          <Link
            key={index}
            href={step.link}
            className="border rounded-xl p-6 hover:shadow"
          >

            <h3 className="font-semibold text-black mb-2">
              {step.title}
            </h3>

            <p className="text-sm text-gray-600">
              {step.description}
            </p>

          </Link>

        ))}

      </div>

    </section>

  )

}