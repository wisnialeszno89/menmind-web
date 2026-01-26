import Link from "next/link";

const TOOLS_EN = [
  {
    title: "60-second reset",
    desc: "Quick state shift: body + breath + one clean thought.",
    href: "/en/where/pressure",
    tag: "calm",
  },
  {
    title: "Brain dump (3 min)",
    desc: "When your head is overloaded: unload the chaos and pick one priority.",
    href: "/en/tools/brain-dump",
    tag: "clarity",
  },
  {
    title: "Minimum plan for today",
    desc: "You don’t have to win today. Just regain the wheel — step by step.",
    href: "/en/tools/minimum-plan",
    tag: "direction",
  },
  {
    title: "Sleep reset (evening)",
    desc: "Calm down before bed: fewer inputs, fewer thoughts, more stability.",
    href: "/en/tools/sleep-reset",
    tag: "sleep",
  },
  {
    title: "Getting out of pressure",
    desc: "When the weight is too much: reduce overload and restore control.",
    href: "/en/where/pressure",
    tag: "pressure",
  },
  {
    title: "Ready to move",
    desc: "When you want momentum: movement, plan, consistency.",
    href: "/en/where/ready",
    tag: "move",
  },
];

export default function ToolsPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-sm text-zinc-400">Waypoint · tools</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Toolbox
          </h1>

          <p className="mt-4 text-zinc-300 max-w-3xl leading-relaxed">
            Simple tools for hard moments. No hype, no preaching.
            You calm down, regain the wheel, and make one real move.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TOOLS_EN.map((t) => (
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
                Enter →
              </p>
            </Link>
          ))}
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/en"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
          >
            ← Back home
          </Link>

          <Link
            href="/en/partners"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
          >
            See partners →
          </Link>
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          Next versions: 7-day plan, jealousy/obsession toolkit, night mode, breakup support.
        </p>
      </div>
    </main>
  );
}