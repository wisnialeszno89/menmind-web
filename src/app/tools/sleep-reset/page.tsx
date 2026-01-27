import Link from "next/link";

export default function SleepResetToolPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · narzędzie</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Reset snu (wieczór)
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          Jeśli noc Cię mieli, to jutro też będzie ciężkie.
          Zrób dziś krótki reset — nie idealny.
        </p>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <ol className="space-y-4 text-zinc-300 leading-relaxed list-decimal list-inside">
            <li>Telefon odkładasz na 10 minut (tyle wystarczy).</li>
            <li>Woda + coś lekkiego, jeśli jesteś rozjechany.</li>
            <li>Światło niżej. Ciszej. Wolniej.</li>
            <li>
              Jedno zdanie na kartce:{" "}
              <span className="text-zinc-100 font-medium">
                “Jutro zaczynam od…”
              </span>
            </li>
          </ol>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/navimind?state=sleep"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Chcę pogadać →
            </Link>

            <Link
              href="/tools"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Wróć do narzędzi
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Nie naprawiasz życia w nocy. W nocy masz tylko zejść z napięcia.
          </p>
        </section>
      </div>
    </main>
  );
}