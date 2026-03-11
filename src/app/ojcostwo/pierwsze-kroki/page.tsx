import Link from "next/link";

export const metadata = {
  title: "Pierwsze kroki po rozstaniu | MenMind",
  description:
    "Jeśli właśnie przechodzisz przez rozstanie lub rozwód i masz dziecko — zacznij od tych kroków.",
};

export default function PierwszeKrokiPage() {
  return (
    <main className="bg-[#111827] text-zinc-100 min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-24">

        {/* HERO */}

        <h1 className="text-4xl md:text-5xl font-semibold text-blue-500 mb-6">
          Pierwsze kroki po rozstaniu
        </h1>

        <div className="h-px w-16 bg-blue-500 mb-12" />

        <p className="text-lg text-zinc-400 max-w-2xl mb-16 leading-relaxed">
          Rozstanie z partnerką nie oznacza końca ojcostwa.
          Najważniejsze jest teraz zachowanie spokoju
          i skupienie się na relacji z dzieckiem.
        </p>

        {/* KROKI */}

        <div className="space-y-14">

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              1. Zachowaj spokój
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              Emocje po rozstaniu są silne.
              Impulsywne decyzje często pogarszają sytuację.
              Najpierw zatrzymaj się i uporządkuj sytuację.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              2. Skup się na relacji z dzieckiem
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              Konflikt między rodzicami nie powinien
              zniszczyć relacji z dzieckiem.
              Stabilność i obecność są ważniejsze niż idealne słowa.
            </p>

            <Link
              href="/ojcostwo/ojciec-po-rozwodzie"
              className="text-blue-500 underline hover:text-blue-400 mt-4 block"
            >
              Jak nie stracić relacji →
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              3. Poznaj swoje prawa
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              Wielu ojców nie zna swoich praw.
              To powoduje niepotrzebny stres i chaos.
            </p>

            <Link
              href="/ojcostwo/prawa-ojca"
              className="text-blue-500 underline hover:text-blue-400 mt-4 block"
            >
              Sprawdź prawa ojca →
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Ustal kontakty z dzieckiem
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              Jasne zasady kontaktów pomagają
              uniknąć wielu konfliktów.
            </p>

            <Link
              href="/ojcostwo/kontakty-z-dzieckiem"
              className="text-blue-500 underline hover:text-blue-400 mt-4 block"
            >
              Jak ustalić kontakty →
            </Link>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. Nie próbuj wszystkiego robić sam
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              W trudnych sytuacjach warto skorzystać
              z pomocy mediatora, psychologa lub prawnika.
            </p>

            <Link
              href="/propozycje/stabilizacja"
              className="text-blue-500 underline hover:text-blue-400 mt-4 block"
            >
              Sprawdź dostępne wsparcie →
            </Link>
          </section>

        </div>

        {/* NAWIGACJA */}

        <div className="mt-20 border-t border-neutral-800 pt-10">

          <Link
            href="/ojcostwo"
            className="text-blue-500 underline hover:text-blue-400"
          >
            ← Wróć do świata Ojcostwo
          </Link>

        </div>

      </div>

    </main>
  );
}