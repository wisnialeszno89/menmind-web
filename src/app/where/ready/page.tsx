import Link from "next/link";

export default function WhereReadyPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · stan</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Jestem po przejściach, ale gotowy
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            To nie musi być idealny start. Wystarczy, że wracasz do steru.
            Dziś robimy ruch, a nie perfekcję.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            3 kroki na dziś (bez rozkmin)
          </h2>

          <ol className="mt-4 space-y-3 text-zinc-300 leading-relaxed list-decimal list-inside">
            <li>Wybierz 1 rzecz, którą kończysz dziś (małą, ale realną).</li>
            <li>Zrób 20 minut prostej konsekwencji — bez analizowania.</li>
            <li>Ustal jedną granicę: czego dziś nie robisz (scroll, chaos, drama).</li>
          </ol>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              Co dalej?
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/partners?tag=trips"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Wyjście z rutyny</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Wyjazdy / wyprawy / outdoor
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Zmiana otoczenia + ruch + ludzie. Bez presji.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz →</p>
              </Link>

              <Link
                href="/partners?tag=training"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Powrót do formy</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Trening / sporty walki
                </p>
                <p className="mt-2 text-sm text-zinc-400">
                  Regularność daje spokój i pewność szybciej niż myślisz.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz →</p>
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3">
  <Link
    href="/partners?tag=trips"
    className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 hover:bg-zinc-900/50 transition"
  >
    <p className="text-sm text-zinc-400">Po przejściach, ale w ruchu</p>
    <p className="mt-1 text-lg font-semibold text-zinc-100">
      Wyjazdy / sporty / męskie aktywności
    </p>
    <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
      Zmiana otoczenia + ruch + ludzie. Bez spiny.
    </p>
    <p className="mt-3 text-sm text-cyan-200">Zobacz →</p>
  </Link>
</div>

          <p className="mt-6 text-xs text-zinc-500">
            Gotowość = ruch. Nie perfekcja.
          </p>
        </section>
      </div>
    </main>
  );
}