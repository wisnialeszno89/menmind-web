import Link from "next/link";

export const metadata = {
  title: "Stabilizacja | MenMind",
  description: "Uporządkowanie sytuacji, konfliktów i decyzji.",
};

export default function StabilizacjaPage() {
  return (
    <div className="text-neutral-200">
      <div className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-blue-500">
          Stabilizacja
        </h1>
        <div className="h-px w-16 bg-blue-500 mb-12" />

        <p className="text-lg text-neutral-300 mb-12 max-w-2xl">
          Gdy sytuacja wymaga uporządkowania.
          Konflikty, decyzje prawne, napięcie finansowe.
        </p>

        <ul className="space-y-4 text-neutral-300 text-lg mb-16">
          <li>– wsparcie psychologiczne</li>
          <li>– mediacje</li>
          <li>– prawo rodzinne i gospodarcze</li>
          <li>– doradztwo finansowe</li>
        </ul>

        <Link
          href="/propozycje/stabilizacja/miasto"
          className="text-blue-500 underline underline-offset-4 hover:text-blue-400 text-lg"
        >
          Wybierz miasto →
        </Link>

      </div>
    </div>
  );
}