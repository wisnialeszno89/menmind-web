import Link from "next/link";

export default function DlaPartnerowPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-4xl">

        {/* HERO */}
        <section>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Dołącz do ekosystemu wsparcia dla mężczyzn
          </h1>

          <p className="mt-6 text-textMuted max-w-2xl leading-relaxed">
            MenMind łączy mężczyzn z realnym wsparciem: psychologicznym,
            prawnym, sportowym i rozwojowym. Jeśli Twoja praca pomaga
            mężczyznom stanąć na nogi — możesz być częścią tego systemu.
          </p>

          <div className="mt-10">
            <Link
              href="/dla-partnerow/zglos-sie"
              className="inline-block rounded-xl bg-accent px-8 py-4 font-medium text-black"
            >
              Zgłoś swoją działalność →
            </Link>
          </div>
        </section>

        {/* DLA KOGO */}
        <section className="mt-24">
          <h2 className="text-2xl font-semibold">
            Kogo szukamy
          </h2>

          <ul className="mt-6 space-y-4 text-textMuted">
            <li>• Psychologów i psychiatrów</li>
            <li>• Trenerów i specjalistów pracy z ciałem</li>
            <li>• Prawników rodzinnych</li>
            <li>• Grup wsparcia i społeczności męskich</li>
            <li>• Organizatorów wyjazdów rozwojowych</li>
          </ul>
        </section>

        {/* MODEL */}
        <section className="mt-24">
          <h2 className="text-2xl font-semibold">
            Model współpracy
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-8">

            <div className="rounded-2xl border border-borderSoft p-8">
              <h3 className="text-lg font-medium">
                Wpis standardowy
              </h3>
              <p className="mt-4 text-sm text-textMuted">
                Nazwa, krótki opis, link zewnętrzny. Widoczność w wybranym mieście
                i kategorii.
              </p>
            </div>

            <div className="rounded-2xl border border-accent p-8">
              <h3 className="text-lg font-medium">
                Partner Premium
              </h3>
              <p className="mt-4 text-sm text-textMuted">
                Wyróżnienie w mieście, rozszerzony opis, dedykowana sekcja
                oraz możliwość prezentacji oferty dla społeczności MenMind.
              </p>
            </div>

          </div>
        </section>

        {/* DLACZEGO TO DZIAŁA */}
        <section className="mt-24">
          <h2 className="text-2xl font-semibold">
            Dlaczego to działa
          </h2>

          <p className="mt-6 text-textMuted leading-relaxed">
            MenMind nie jest katalogiem przypadkowych usług. To system drogi.
            Użytkownicy trafiają tu w konkretnym momencie życia i szukają
            realnych rozwiązań. Intencja jest wysoka.
          </p>
        </section>

        {/* CTA */}
        <section className="mt-24 text-center">
          <Link
            href="/dla-partnerow/zglos-sie"
            className="inline-block rounded-xl bg-accent px-8 py-4 font-medium text-black"
          >
            Dołącz do systemu →
          </Link>
        </section>

      </div>
    </main>
  );
}