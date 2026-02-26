export default function DlaPartnerowPage() {
  return (
    <main className="bg-[#F8F8F6] text-zinc-900">

      {/* HERO */}
      <section className="section-2026">
        <div className="container-2026 max-w-3xl">

          <h1 className="text-5xl font-semibold tracking-tight mb-8">
            Dla partnerów
          </h1>

          <p className="text-lg text-zinc-600 leading-relaxed">
            MenMind to kuratorska przestrzeń wsparcia dla mężczyzn.
            Współpracujemy wyłącznie z wybranymi specjalistami.
          </p>

        </div>
      </section>

      {/* DLA KOGO */}
      <section className="section-compact">
        <div className="container-2026 grid md:grid-cols-3 gap-8">

          <div className="card-2026 p-8 bg-white">
            <h3 className="text-xl font-semibold mb-4">
              Psychologowie / Terapeuci
            </h3>
            <p className="text-sm text-zinc-600">
              Praca z mężczyznami w kryzysie, rozstaniu, wypaleniu.
            </p>
          </div>

          <div className="card-2026 p-8 bg-white">
            <h3 className="text-xl font-semibold mb-4">
              Prawnicy / Mediatorzy
            </h3>
            <p className="text-sm text-zinc-600">
              Sprawy rodzinne, opieka, konflikty.
            </p>
          </div>

          <div className="card-2026 p-8 bg-white">
            <h3 className="text-xl font-semibold mb-4">
              Trenerzy / Organizatorzy
            </h3>
            <p className="text-sm text-zinc-600">
              Ruch, reset, rozwój, wyjazdy.
            </p>
          </div>

        </div>
      </section>

      {/* JAK DZIAŁA */}
      <section className="section-compact">
        <div className="container-2026 max-w-3xl">

          <div className="card-2026 p-10 bg-white">
            <h3 className="text-2xl font-semibold mb-6">
              Jak działa współpraca?
            </h3>

            <ul className="space-y-4 text-sm text-zinc-600 leading-relaxed">
              <li>• Weryfikujemy zgłoszenia</li>
              <li>• Dbamy o jakość i dopasowanie</li>
              <li>• Budujemy długofalową współpracę</li>
              <li>• Selekcja ważniejsza niż ilość</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-compact">
        <div className="container-2026 max-w-2xl text-center">

          <div className="card-2026 p-8 bg-white">
            <h3 className="text-xl font-semibold mb-4">
              Zgłoszenie współpracy
            </h3>

            <p className="text-sm text-zinc-600 mb-6">
              Opisz swoją specjalizację i doświadczenie.
              Odpowiadamy po weryfikacji.
            </p>

            <a
              href="/kontakt"
              className="accent-bg px-6 py-3 rounded-xl text-sm inline-block"
            >
              Zgłoś współpracę
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}