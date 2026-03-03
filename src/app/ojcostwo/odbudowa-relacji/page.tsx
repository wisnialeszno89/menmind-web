import Link from "next/link";

export const metadata = {
  title: "Jak odbudować relację z dzieckiem | MenMind",
  description:
    "Relacja z dzieckiem może się ochłodzić. Sprawdź, jak spokojnie odbudować kontakt i zaufanie.",
};

export default function OdbudowaRelacjiPage() {
  return (
    <main className="bg-[#111827] text-zinc-100">
      <section className="section-2026">
        <div className="container-2026 max-w-4xl">

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-blue-500">
            Odbudowa relacji
          </h1>

          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-16 leading-relaxed max-w-2xl">
            Relacje nie psują się nagle.
            Najczęściej oddalają się powoli.
            Dobra wiadomość? To też można odwrócić.
          </p>

          <div className="space-y-14">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Zauważ dystans bez obrony
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Czasem pierwszym krokiem nie jest działanie,
                ale przyznanie przed sobą, że coś się ochłodziło.
                Bez szukania winnych.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Zacznij od małych rzeczy
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Krótka rozmowa.
                Wspólne wyjście.
                Wiadomość „myślę o tobie”.
                Nie potrzebujesz wielkiego gestu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Przestań udowadniać
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Relacja to nie sala sądowa.
                Jeśli próbujesz udowodnić, że masz rację,
                kontakt zwykle słabnie.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Daj czas
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Zaufanie buduje się powtarzalnością.
                Stabilność działa ciszej niż słowa.
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
              href="/propozycje/stabilizacja"
              className="block text-zinc-400 underline underline-offset-4 hover:text-zinc-200"
            >
              Jeśli potrzebujesz wsparcia →
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}