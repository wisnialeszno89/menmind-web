import Link from "next/link";

export const metadata = {
  title: "Gdy dziecko nie chce rozmawiać | MenMind",
  description:
    "Milczenie dziecka nie zawsze oznacza bunt. Sprawdź, jak reagować spokojnie i budować kontakt.",
};

export default function GdyDzieckoNieChceRozmawiacPage() {
  return (
    <main className="bg-[#111827] text-zinc-100">
      <section className="section-2026">
        <div className="container-2026 max-w-4xl">

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-blue-500">
            Gdy dziecko nie chce rozmawiać
          </h1>

          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-16 leading-relaxed max-w-2xl">
            Cisza nie zawsze oznacza bunt.
            Czasem oznacza brak poczucia bezpieczeństwa,
            czasem zmęczenie, czasem po prostu etap.
          </p>

          <div className="space-y-14">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Nie wymuszaj rozmowy
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Presja zamyka jeszcze bardziej.
                Lepiej zostawić przestrzeń niż próbować „wydobyć” odpowiedzi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Rozmawiaj w ruchu
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Spacer, jazda samochodem, wspólny trening.
                Obok siebie łatwiej mówić niż naprzeciwko.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Pytaj krócej
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Zamiast „co się stało?”, spróbuj:
                „Jak się z tym czujesz?”
                albo po prostu: „Chcesz pogadać czy nie teraz?”
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Buduj most, nie przesłuchanie
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Czasem wystarczy powiedzieć:
                „Jestem, gdy będziesz gotowy”.
                To zdanie zostaje na długo.
              </p>
            </section>

          </div>

          <div className="mt-20 border-t border-neutral-800 pt-10 space-y-4">

            <Link
              href="/ojcostwo/relacja-z-nastolatkiem"
              className="block text-blue-500 underline underline-offset-4 hover:text-blue-400"
            >
              Relacja z nastolatkiem →
            </Link>

            <Link
              href="/ojcostwo/odbudowa-relacji"
              className="block text-zinc-400 underline underline-offset-4 hover:text-zinc-200"
            >
              Odbudowa relacji →
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}