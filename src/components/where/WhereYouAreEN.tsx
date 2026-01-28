"use client";

import Link from "next/link";

const OPTIONS_EN = [
  {
    title: "After a breakup",
    desc: "Chaos, relief, emptiness — or a new start. We set direction without drama.",
    href: "/en/where/breakup",
    tag: "breakup",
  },
  {
    title: "Going through a divorce",
    desc: "Divorce hurts, but chaos costs the most. Calm + paperwork + protection.",
    href: "/en/where/divorce",
    tag: "divorce",
  },
  {
    title: "I’m in crisis",
    desc: "Too much happening at once. First: sleep, food, stability, support.",
    href: "/en/where/broken",
    tag: "crisis",
  },
  {
    title: "Relationship conflict",
    desc: "Fights, tension, repeating patterns. Stop escalation and reset communication.",
    href: "/en/where/relationship",
    tag: "relationship",
  },
  {
    title: "Burnout / empty",
    desc: "Life works but feels empty. Recovery + movement + people.",
    href: "/en/where/empty",
    tag: "burnout",
  },
  {
    title: "I’m under pressure",
    desc: "Too much on your mind. Calm the nervous system, then build a plan.",
    href: "/en/where/pressure",
    tag: "pressure",
  },
  {
    title: "Fatherhood",
    desc: "Your child, boundaries, agreements. Calm and practical — no war.",
    href: "/en/where/father",
    tag: "father",
  },
  {
    title: "Ready for change",
    desc: "Back at the wheel. Movement + environment + people.",
    href: "/en/where/ready",
    tag: "ready",
  },
];

export default function WhereYouAreEN() {
  return (
    <section className="w-full">
      <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">
        Where are you right now?
      </h2>

      <p className="mt-2 text-base text-zinc-300">
        Pick one. This is a starting point — no judgment.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {OPTIONS_EN.map((o) => (
          <Link
            key={o.href}
            href={o.href}
            className="group rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 text-left shadow-sm shadow-black/20 backdrop-blur transition hover:bg-zinc-900/40 hover:border-zinc-700"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-lg font-semibold text-zinc-100">{o.title}</p>

              <span className="shrink-0 rounded-full bg-cyan-500/10 px-2 py-1 text-[11px] font-medium text-cyan-200 ring-1 ring-cyan-400/15">
                {o.tag}
              </span>
            </div>

            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              {o.desc}
            </p>

            <p className="mt-3 text-sm text-zinc-300 group-hover:text-cyan-200 transition">
              Enter →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}