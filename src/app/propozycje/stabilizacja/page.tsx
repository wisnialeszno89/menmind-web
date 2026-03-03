import Link from "next/link";

export const metadata = {
  title: "Stabilizacja | MenMind",
  description: "Uporządkowanie sytuacji, konfliktów i decyzji.",
};

export default function StabilizacjaPage() {
  return (
    <main className="bg-[#111827] text-zinc-100">
      <section className="section-2026">
        <div className="container-2026 max-w-4xl">

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-blue-500">
            Stabilizacja
          </h1>

          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-12 max-w-2xl leading-relaxed">
            Gdy sytuacja wymaga uporządkowania.
            Konflikty, decyzje prawne, napięcie finansowe.
          </p>

          <ul className="space-y-4 text-zinc-300 text-lg mb-16">
            <li>– wsparcie psychologiczne</li>
            <li>– mediacje</li>
            <li>– prawo rodzinne</li>
            <li>– doradztwo finansowe</li>
          </ul>

          <Link
            href="/kategoria/prawo"
            className="text-blue-500 underline underline-offset-4 hover:text-blue-400 text-lg"
          >
            Wybierz miasto →
          </Link>

        </div>
      </section>
    </main>
  );
}