import Link from "next/link";

export const metadata = {
  title: "Współpraca | MenMind",
  description:
    "Dołącz do MenMind jako partner. Docieraj do mężczyzn w realnych momentach decyzyjnych.",
};

export default function DlaPartnerowPage() {
  return (
    <main className="bg-[#111827] text-zinc-100">
      <section className="section-2026">
        <div className="container-2026 max-w-4xl">

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-blue-500">
            Współpraca
          </h1>

          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-16 leading-relaxed max-w-2xl">
            MenMind to przestrzeń dla mężczyzn w kryzysie, odbudowie,
            wzroście i ojcostwie.  
            Partnerzy pojawiają się wtedy, gdy są naprawdę potrzebni.
          </p>

          {/* DLACZEGO TO DZIAŁA */}
          <div className="space-y-14 mb-20">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Docierasz do konkretnego momentu
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Użytkownik trafia do Ciebie nie przypadkiem.
                Jest w procesie decyzyjnym – szuka rozwiązania.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Nie jesteśmy katalogiem firm
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Selekcjonujemy partnerów.
                Stawiamy na jakość, nie ilość.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Transparentny model
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Jasne zasady obecności.
                Widoczność zależna od poziomu współpracy.
              </p>
            </section>

          </div>

          {/* POZIOMY WSPÓŁPRACY */}
          <div className="grid md:grid-cols-2 gap-12 mb-28">

            <div className="card-2026 p-10 space-y-6">
              <h3 className="text-xl font-semibold">
                Standard
              </h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>• Obecność w wybranej kategorii i mieście</li>
                <li>• Opis działalności</li>
                <li>• Link do strony</li>
              </ul>
            </div>

            <div className="card-2026 p-10 space-y-6 border border-blue-500">
              <h3 className="text-xl font-semibold">
                Strategic
              </h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>• Wyróżnienie „Polecane przez MenMind”</li>
                <li>• Priorytetowa widoczność</li>
                <li>• Możliwość rozszerzonego opisu</li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div className="border-t border-neutral-800 pt-12 text-center">
            <p className="text-zinc-400 mb-6">
              Jeśli Twoja działalność realnie wspiera mężczyzn,
              porozmawiajmy.
            </p>

            <Link
              href="/dla-partnerow/zgloszenie"
              className="text-blue-500 underline underline-offset-4 hover:text-blue-400 text-lg"
            >
              Zgłoś chęć współpracy →
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}