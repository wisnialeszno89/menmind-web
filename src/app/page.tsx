import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";

export default function HomePage() {
  return (
    <main className="bg-[#0F172A] text-zinc-100">

      {/* HERO (bez animacji) */}
      <section className="section-2026">
        <div className="container-2026 max-w-4xl">

          <h1 className="text-6xl font-semibold tracking-tight leading-tight mb-8">
            Miejsce dla mężczyzn
            <br />
            w kryzysie, odbudowie i wzroście.
          </h1>

          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10">
            MenMind to przestrzeń, w której możesz określić,
            gdzie jesteś i wybrać kierunek.
            Bez presji. Bez hałasu.
          </p>

          <div className="flex gap-6">
            <Link
              href="/kryzys"
              className="accent-bg px-8 py-3 rounded-xl text-sm"
            >
              Zacznij od swojego momentu
            </Link>

            <Link
              href="/propozycje"
              className="px-8 py-3 rounded-xl text-sm border border-zinc-700"
            >
              Zobacz propozycje
            </Link>
          </div>

        </div>
      </section>

      {/* 4 ŚCIEŻKI */}
      <FadeInSection>
        <section className="section-compact">
          <div className="container-2026 grid md:grid-cols-4 gap-8">

            <Link href="/kryzys" className="card-2026 p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Kryzys</h3>
              <p className="text-sm text-zinc-400">
                Regulacja i pierwsze decyzje.
              </p>
            </Link>

            <Link href="/odbudowa" className="card-2026 p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Odbudowa</h3>
              <p className="text-sm text-zinc-400">
                Powrót do fundamentu.
              </p>
            </Link>

            <Link href="/wzrost" className="card-2026 p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Wzrost</h3>
              <p className="text-sm text-zinc-400">
                Kierunek i konsekwencja.
              </p>
            </Link>

            <Link href="/ojcostwo" className="card-2026 p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Ojcostwo</h3>
              <p className="text-sm text-zinc-400">
                Relacja i odpowiedzialność.
              </p>
            </Link>

          </div>
        </section>
      </FadeInSection>

      {/* CZYM JEST MENMIND */}
      <FadeInSection>
        <section className="section-compact">
          <div className="container-2026 max-w-3xl">

            <div className="card-2026 p-10 text-center">
              <h2 className="text-2xl font-semibold mb-6">
                Czym jest MenMind?
              </h2>

              <p className="text-zinc-400 leading-relaxed">
                To nie terapia online.
                To nie forum.
                To nie coaching.
              </p>

              <p className="text-zinc-300 leading-relaxed mt-6">
                To mapa stanów, narzędzia regulacji
                i wyselekcjonowane kierunki wsparcia.
              </p>
            </div>

          </div>
        </section>
      </FadeInSection>

      {/* SPOŁECZNY KONTEKST */}
      <FadeInSection>
        <section className="section-compact">
          <div className="container-2026 max-w-2xl text-center">

            <p className="text-sm text-zinc-500 leading-relaxed">
              Budujemy świadomą przestrzeń dla mężczyzn w Polsce.
              Projekt rozwija się etapami — z naciskiem na jakość.
            </p>

          </div>
        </section>
      </FadeInSection>

    </main>
  );
}