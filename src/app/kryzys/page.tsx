import Link from "next/link";

export const metadata = {
  title: "Kryzys | MenMind",
  description:
    "Kryzys to nie zawsze dramat. Częściej to przeciągające się napięcie, brak decyzji i utrata kontroli. Sprawdź, co możesz zrobić świadomie.",
};

export default function KryzysPage() {
  return (
    <div className="bg-black text-neutral-200 min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-24">

        {/* H1 */}
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-12">
          Kryzys
        </h1>

        {/* Fundament */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Kryzys to utrata kontroli
          </h2>

          <p className="text-neutral-300 text-lg leading-8">
            Kryzys nie zawsze zaczyna się od dramatu.
            Częściej zaczyna się od napięcia, które nie znika.
          </p>

          <ul className="mt-6 space-y-3 text-neutral-300 text-lg">
            <li>– rozmowy, które niczego nie rozwiązują</li>
            <li>– decyzje odkładane na później</li>
            <li>– brak snu</li>
            <li>– nadmierna praca</li>
            <li>– cisza w domu</li>
          </ul>

          <p className="mt-6 text-neutral-300 text-lg leading-8">
            Nie ma spektakularnego momentu.
            Jest powolne rozchodzenie się rzeczywistości z tym, jak miało być.
          </p>
        </section>

        {/* Czym jest kryzys emocjonalny */}
        <section className="mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Czym jest kryzys emocjonalny naprawdę?
          </h2>

          <p className="text-neutral-300 text-lg leading-8">
            Kryzys emocjonalny rzadko wygląda jak załamanie.
            Częściej wygląda jak przeciążenie.
          </p>

          <ul className="mt-6 space-y-3 text-neutral-300 text-lg">
            <li>– irytacja bez powodu</li>
            <li>– wycofanie</li>
            <li>– impulsywność</li>
            <li>– brak koncentracji</li>
            <li>– chłód wobec bliskich</li>
          </ul>

          <p className="mt-6 text-neutral-300 text-lg leading-8">
            W kryzysie myślenie zawęża się do przetrwania.
            Dlatego wiele decyzji podjętych w tym stanie później okazuje się błędnych.
          </p>
        </section>

        {/* Scenariusze */}
        <section className="mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Najczęstsze scenariusze kryzysu
          </h2>

          <ul className="space-y-6 text-neutral-300 text-lg leading-8">
            <li>
              <strong>Kryzys relacyjny</strong><br />
              Miesiące napięcia bez rozwiązania.
            </li>

            <li>
              <strong>Kryzys zawodowy</strong><br />
              Wypalenie. Utrata sensu. Brak kierunku.
            </li>

            <li>
              <strong>Kryzys tożsamości</strong><br />
              Moment, w którym pytasz: „Czy to jest moje życie?”
            </li>

            <li>
              <strong>Kryzys po stracie</strong><br />
              Destabilizacja po utracie relacji, planu lub pozycji.
            </li>
          </ul>
        </section>

        {/* To, że trwa */}
        <section className="mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Największy problem? To, że trwa.
          </h2>

          <p className="text-neutral-300 text-lg leading-8">
            Na początku myślisz, że to przejdzie.
            Potem: „ogarnę to”.
            Potem: „jakoś to jest”.
          </p>

          <p className="mt-6 text-neutral-300 text-lg leading-8">
            I mijają miesiące.
            Najgroźniejsze nie jest wydarzenie.
            Najgroźniejsze jest utknięcie.
          </p>

          <ul className="mt-6 space-y-3 text-neutral-300 text-lg">
            <li>– funkcjonujesz, ale nie jesteś obecny</li>
            <li>– pracujesz więcej, żeby nie myśleć</li>
            <li>– unikasz rozmowy, bo „to nie moment”</li>
          </ul>
        </section>

        {/* Błędy */}
        <section className="mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Najczęstsze błędy w kryzysie
          </h2>

          <ul className="space-y-3 text-neutral-300 text-lg">
            <li>– decyzje pod wpływem impulsu</li>
            <li>– eskalowanie konfliktu z ego</li>
            <li>– izolowanie się</li>
            <li>– odkładanie konsultacji „na później”</li>
            <li>– czekanie aż samo się ułoży</li>
          </ul>
        </section>

        {/* Co możesz zrobić */}
        <section className="mt-24">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Co możesz zrobić teraz?
          </h2>

          <ul className="space-y-3 text-neutral-300 text-lg">
            <li>– uporządkować fakty</li>
            <li>– porozmawiać z kimś neutralnym</li>
            <li>– sprawdzić swoją sytuację prawną</li>
            <li>– zrozumieć, co realnie się dzieje</li>
          </ul>

          <div className="mt-10 space-y-4">
            <Link
              href="/kategoria/psycholog"
              className="block text-neutral-400 underline underline-offset-4 hover:text-neutral-200"
            >
              Wsparcie psychologiczne →
            </Link>

            <Link
              href="/kategoria/prawo"
              className="block text-neutral-400 underline underline-offset-4 hover:text-neutral-200"
            >
              Wsparcie prawne →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}