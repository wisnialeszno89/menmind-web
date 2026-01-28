import Link from "next/link";

const IDEAS = [
  "Spacer + lody",
  "Planszówka 15 minut (Uno / Dobble / warcaby)",
  "Tor przeszkód w domu (poduszki + koc)",
  "Wspólne gotowanie (jajecznica / naleśniki)",
  "Rower / piłka / kosz",
  "Baza z koca i krzeseł",
  "Sklep / teatr / odgrywanie ról",
  "Mycie auta razem",
  "Rysowanie: „narysuj mnie jako bohatera”",
  "Film + jedno pytanie: „co było najlepsze?”",
];

export default function FatherhoodEmergencyPL() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · ojcostwo</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Lista awaryjna: 10 pomysłów
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Gdy masz pustkę w głowie — wybierz 1. Koniec rozkmin.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <ul className="space-y-3 text-zinc-300 leading-relaxed">
            {IDEAS.map((x, i) => (
              <li key={x} className="flex gap-3">
                <span className="text-zinc-500">{i + 1}.</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/spec/ojcostwo-rytualy"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              ← Wróć do rytuałów
            </Link>

            <Link
              href="/where/father"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              Ojcostwo →
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            10 minut Twojej obecności waży więcej niż 2 godziny “obok telefonu”.
          </p>
        </section>
      </div>
    </main>
  );
}