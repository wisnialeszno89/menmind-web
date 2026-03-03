import Link from "next/link";

export const metadata = {
  title: "Jak odbudować relację z nastolatkiem | MenMind",
  description:
    "Relacja z nastolatkiem bywa trudna. Sprawdź, jak odbudować zaufanie i kontakt bez presji i wykładów.",
};

export default function RelacjaZNastolatkiemPage() {
  return (
    <main className="bg-[#111827] text-zinc-100">
      <section className="section-2026">
        <div className="container-2026 max-w-4xl">

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-blue-500">
            Relacja z nastolatkiem
          </h1>

          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-16 leading-relaxed max-w-2xl">
            Nastolatek nie odsuwa się bez powodu.
            Zmienia się jego świat.
            Twoja rola też musi się zmienić.
          </p>

          <div className="space-y-14">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Przestań wygłaszać wykłady
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Im więcej moralizowania, tym większy dystans.
                Rozmowa działa lepiej niż pouczanie.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Szanuj granice
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Prywatność nie jest buntem.
                To etap budowania tożsamości.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Buduj kontakt w działaniu
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Wspólny trening, projekt, wyjazd.
                W ruchu łatwiej o rozmowę niż przy stole.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Odbudowa wymaga czasu
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Jeśli relacja była napięta,
                zaufanie nie wróci w tydzień.
                Konsekwencja i spokój działają lepiej niż presja.
              </p>
            </section>

          </div>

          <div className="mt-20 border-t border-neutral-800 pt-10 space-y-4">

            <p className="text-zinc-400">
              Jeśli czujesz, że relacja wymyka się spod kontroli,
              warto porozmawiać ze specjalistą.
            </p>

            <Link
              href="/propozycje/stabilizacja"
              className="block text-blue-500 underline underline-offset-4 hover:text-blue-400"
            >
              Sprawdź dostępne wsparcie →
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}