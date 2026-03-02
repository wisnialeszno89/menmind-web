import Link from "next/link";

export const metadata = {
  title: "Kierunek | MenMind",
  description: "Zmiana pracy, biznesu lub planu.",
};

export default function KierunekPage() {
  return (
    <div className="text-neutral-200">
      <div className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-blue-500">
          Kierunek
        </h1>
        <div className="h-px w-16 bg-blue-500 mb-12" />

        <p className="text-lg text-neutral-300 mb-12 max-w-2xl">
          Gdy czujesz stagnację lub brak sensu.
          Szukasz zmiany zawodowej albo nowego planu.
        </p>

        <ul className="space-y-4 text-neutral-300 text-lg mb-16">
          <li>– mentoring</li>
          <li>– zmiana branży</li>
          <li>– rozwój kompetencji</li>
          <li>– budowanie biznesu</li>
        </ul>

        <Link
          href="/propozycje/kierunek/miasto"
          className="text-blue-500 underline underline-offset-4 hover:text-blue-400 text-lg"
        >
          Wybierz miasto →
        </Link>

      </div>
    </div>
  );
}