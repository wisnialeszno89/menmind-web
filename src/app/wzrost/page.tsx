import Link from "next/link";

export const metadata = {
  title: "Wzrost | MenMind",
  description:
    "Świadome rozszerzanie wpływu, kierunku i odpowiedzialności.",
};

export default function WzrostPage() {
  return (
    <div className="text-neutral-200">
      <div className="max-w-4xl mx-auto px-6 py-24">

        {/* Nagłówek */}
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-blue-500">
          Wzrost
        </h1>
        <div className="h-px w-16 bg-blue-500 mb-12" />

        <p className="text-lg text-neutral-300 mb-16 max-w-2xl leading-8">
          Gdy sytuacja jest stabilna, pojawia się pytanie:  
          co dalej?  
          Wzrost to nie napinka.  
          To świadome rozszerzanie wpływu.
        </p>

        {/* 3 filary */}
        <div className="space-y-16 mb-24">

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              1. Kierunek
            </h2>
            <p className="text-neutral-300 leading-8">
              Czy wiesz, dokąd zmierzasz?
              Wzrost zaczyna się od jasności.
              Nie od ambicji, tylko od decyzji.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. Odpowiedzialność
            </h2>
            <p className="text-neutral-300 leading-8">
              Zamiast reagować na świat,
              zaczynasz go współtworzyć.
              Odpowiedzialność to sprawczość.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Wpływ
            </h2>
            <p className="text-neutral-300 leading-8">
              Twoje decyzje zaczynają mieć większy zasięg —
              w pracy, relacjach, w tym jak jesteś postrzegany.
            </p>
          </section>

        </div>

        {/* Przejścia */}
        <section className="border-t border-neutral-800 pt-16">

          <h2 className="text-2xl font-semibold mb-6">
            Możesz pójść dalej:
          </h2>

          <div className="space-y-4 text-lg">

            <Link
              href="/propozycje/kierunek"
              className="block text-blue-500 underline underline-offset-4 hover:text-blue-400"
            >
              Rozwój zawodowy i mentoring →
            </Link>

            <Link
              href="/propozycje"
              className="block text-neutral-400 underline underline-offset-4 hover:text-neutral-200"
            >
              Sprawdź propozycje →
            </Link>

          </div>

        </section>

      </div>
    </div>
  );
}