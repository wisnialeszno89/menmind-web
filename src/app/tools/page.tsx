import Link from "next/link";

const TOOLS = [
  {
    title: "Reset 60 sekund",
    desc: "Szybka zmiana stanu: ciało + oddech + jedna czysta myśl.",
    href: "/where/pressure",
    tag: "spokój",
  },
  {
    title: "Zrzut z głowy (3 min)",
    desc: "Gdy masz mętlik: wyrzuć chaos na zewnątrz i nazwij priorytet.",
    href: "/tools/brain-dump",
    tag: "klarowność",
  },
  {
    title: "Plan minimum na dziś",
    desc: "Nie musisz wygrać. Masz odzyskać ster — krok po kroku.",
    href: "/tools/minimum-plan",
    tag: "kierunek",
  },
  {
    title: "Reset snu (wieczór)",
    desc: "Wyciszenie na noc: mniej bodźców, mniej myśli, więcej spokoju.",
    href: "/tools/sleep-reset",
    tag: "sen",
  },
  {
    title: "Wyjście z presji",
    desc: "Gdy nacisk rośnie: uporządkuj źródło presji i zdejmij ciężar.",
    href: "/where/pressure",
    tag: "presja",
  },
  {
    title: "Gotowość do działania",
    desc: "Gdy chcesz ruszyć do przodu: ruch, plan, konsekwencja.",
    href: "/where/ready",
    tag: "ruch",
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-sm text-zinc-400">MenMind · narzędzia</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Toolbox
          </h1>

          <p className="mt-4 text-zinc-300 max-w-3xl leading-relaxed">
            Proste narzędzia na trudne momenty. Bez coachingu, bez gadania.
            Masz się uspokoić, odzyskać ster i zrobić jeden sensowny ruch.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TOOLS.map((t) => (
            <Link
              key={t.href + t.title}
              href={t.href}
              className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur hover:bg-zinc-900/60 transition"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-zinc-100">
                  {t.title}
                </h2>

                <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-[11px] font-medium text-cyan-200 ring-1 ring-cyan-400/15">
                  {t.tag}
                </span>
              </div>

              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                {t.desc}
              </p>

              <p className="mt-4 text-sm text-cyan-200">
                Wejdź →
              </p>
            </Link>
          ))}
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
          >
            ← Wróć na start
          </Link>

          <Link
            href="/partners"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
          >
            Zobacz partnerów →
          </Link>
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          W kolejnych wersjach dojdą: plan 7 dni, praca z zazdrością, tryb nocny, wsparcie “breakup”.
        </p>
      </div>
    </main>
  );
}