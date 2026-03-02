import Link from "next/link";

export const metadata = {
  title: "Propozycje | MenMind",
  description:
    "Wybierz kierunek dopasowany do Twojej sytuacji. Stabilizacja, energia, kierunek lub tożsamość.",
};

export default function PropozycjePage() {
  return (
    <div className="text-neutral-200">

      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Nagłówek */}
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-blue-500">
          Propozycje
        </h1>
        <div className="h-px w-16 bg-blue-500 mb-12" />

        <p className="text-lg text-neutral-300 mb-16 max-w-2xl">
          Wybierz kierunek. Sprawdzisz dostępne opcje i zdecydujesz,
          co w Twojej sytuacji ma teraz sens.
        </p>

        {/* 4 bloki */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Stabilizacja */}
          <Link
            href="/propozycje/stabilizacja"
            className="block border border-neutral-800 rounded-xl p-8 hover:border-blue-500 transition"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Stabilizacja
            </h2>
            <p className="text-neutral-300 leading-7">
              Uporządkowanie sytuacji, konfliktów i decyzji.
              Gdy potrzebujesz jasności i konkretu.
            </p>
          </Link>

          {/* Energia */}
          <Link
            href="/propozycje/energia"
            className="block border border-neutral-800 rounded-xl p-8 hover:border-blue-500 transition"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Energia
            </h2>
            <p className="text-neutral-300 leading-7">
              Ciało, ruch i regeneracja.
              Gdy trzeba wrócić do siły fizycznej.
            </p>
          </Link>

          {/* Kierunek */}
          <Link
            href="/propozycje/kierunek"
            className="block border border-neutral-800 rounded-xl p-8 hover:border-blue-500 transition"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Kierunek
            </h2>
            <p className="text-neutral-300 leading-7">
              Zmiana pracy, biznesu lub planu.
              Gdy czujesz stagnację albo brak sensu.
            </p>
          </Link>

          {/* Tożsamość */}
          <Link
            href="/propozycje/tozsamosc"
            className="block border border-neutral-800 rounded-xl p-8 hover:border-blue-500 transition"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Tożsamość
            </h2>
            <p className="text-neutral-300 leading-7">
              Rzeczy i doświadczenia, które coś znaczą.
              Nie dla konsumpcji. Dla symbolu.
            </p>
          </Link>

        </div>

      </div>
    </div>
  );
}