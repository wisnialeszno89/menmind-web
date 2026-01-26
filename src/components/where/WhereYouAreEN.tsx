"use client";

import Link from "next/link";

const OPTIONS_EN = [
  {
    title: "I’m coming from a breakup",
    desc: "Messy emotions, emptiness, longing — or relief. All at once.",
    href: "/en/where/breakup",
    tag: "breakup",
  },
  {
    title: "I’m falling apart",
    desc: "I don’t know what’s next. I’m tired and overwhelmed.",
    href: "/en/where/broken",
    tag: "crisis",
  },
  {
    title: "I feel empty / burned out",
    desc: "I’m here, but it doesn’t feel like living.",
    href: "/en/where/empty",
    tag: "burnout",
  },
  {
    title: "I’m under pressure",
    desc: "Too much on my mind. Tension is rising. I need calm and direction.",
    href: "/en/where/pressure",
    tag: "pressure",
  },
  {
    title: "I’ve been through a lot — I’m ready",
    desc: "Not perfect, but I’m back at the wheel. Time to rebuild momentum.",
    href: "/en/where/ready",
    tag: "move",
  },
  {
    title: "This is about fatherhood",
    desc: "Responsibility, emotions, boundaries, relationships.",
    href: "/en/where/father",
    tag: "father",
  },
];

export default function WhereYouAreEN() {
  return (
    <section className="w-full">
      <h2 className="text-lg md:text-xl font-semibold text-zinc-100">
        Where are you right now?
      </h2>

      <p className="mt-2 text-sm text-zinc-400">
        Pick one. This is just a starting point — no judgment.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {OPTIONS_EN.map((o) => (
          <Link
            key={o.href}
            href={o.href}
            className="group rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 text-left shadow-sm shadow-black/20 backdrop-blur transition hover:bg-zinc-900/40 hover:border-zinc-700"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-base font-semibold text-zinc-100">{o.title}</p>

              <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-[11px] font-medium text-cyan-200 ring-1 ring-cyan-400/15">
                {o.tag}
              </span>
            </div>

            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              {o.desc}
            </p>

            <p className="mt-3 text-sm text-zinc-300 group-hover:text-cyan-200 transition">
              Enter →
            </p>
          </Link>
        ))}
      </div>

      <p className="mt-5 text-xs text-zinc-500">
        No accounts. No judgment. No saved conversations.
      </p>
    </section>
  );
}