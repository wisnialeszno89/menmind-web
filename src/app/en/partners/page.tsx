import Link from "next/link";
import { Suspense } from "react";

type Partner = {
  name: string;
  title: string;
  desc: string;
  tags: string[];
  href: string;
  cta: string;
  region: "EU";
  country?: string;
  note?: string;
};

const PARTNERS_EN: Partner[] = [
  {
    name: "Waypoint Trips",
    title: "Men’s trips: reset + outdoors",
    desc: "Expeditions, hiking, nature, simple structure. For men who need movement and a change of environment.",
    tags: ["trips", "ready"],
    href: "#",
    cta: "Explore trips",
    region: "EU",
    note: "Coming soon: verified organizers",
  },
  {
    name: "Training / Combat",
    title: "Training & martial arts",
    desc: "Body + mind. Consistency brings back energy, calm and confidence.",
    tags: ["training", "ready", "pressure", "empty"],
    href: "#",
    cta: "See options",
    region: "EU",
    note: "Coming soon: gyms & coaches",
  },
  {
    name: "Fatherhood Support",
    title: "Fatherhood: presence & communication",
    desc: "Practical tools and support for fathers. No judgment. No guru vibe.",
    tags: ["fatherhood", "father"],
    href: "#",
    cta: "Explore support",
    region: "EU",
    note: "Coming soon",
  },
  {
    name: "Co-parenting",
    title: "Boundaries & co-parenting",
    desc: "Clear agreements, calm communication, less conflict. Protect the child and yourself.",
    tags: ["co-parenting", "father", "law"],
    href: "#",
    cta: "See options",
    region: "EU",
    note: "Coming soon",
  },

  // NEW: MENTAL
  {
    name: "Crisis support",
    title: "Psychologist / psychiatrist (fast support)",
    desc: "When it gets really heavy — talking to a competent person can help. No shame.",
    tags: ["mental", "father", "pressure", "broken", "breakup", "empty"],
    href: "#",
    cta: "See options",
    region: "EU",
    note: "Coming soon: vetted specialists",
  },

  // NEW: LAW
  {
    name: "Legal support",
    title: "Legal: fatherhood / agreements / conflict",
    desc: "For men who want clarity and calm through structure and proper boundaries.",
    tags: ["law", "father", "co-parenting"],
    href: "#",
    cta: "See options",
    region: "EU",
    note: "Coming soon",
  },

  // NEW: ADDICTION
  {
    name: "Substances & alcohol",
    title: "When you start escaping",
    desc: "No preaching. Practical support when you slip into alcohol, substances or self-destruction.",
    tags: ["addiction", "broken", "pressure", "breakup", "empty"],
    href: "#",
    cta: "Explore support",
    region: "EU",
    note: "Coming soon",
  },

  // NEW: COMMUNITY
  {
    name: "Community",
    title: "Private groups / men-to-men conversations",
    desc: "Sometimes you don’t need advice. You need people who get it.",
    tags: ["community", "broken", "breakup", "empty", "father", "ready"],
    href: "#",
    cta: "See options",
    region: "EU",
    note: "Coming soon",
  },
];

const TAGS_EN: { key: string; label: string }[] = [
  { key: "all", label: "All" },
  { key: "pressure", label: "Pressure" },
  { key: "ready", label: "Ready" },
  { key: "trips", label: "Trips" },
  { key: "training", label: "Training" },

  { key: "father", label: "Fatherhood" },
  { key: "fatherhood", label: "Presence" },
  { key: "co-parenting", label: "Boundaries" },
  { key: "law", label: "Legal" },

  { key: "mental", label: "Mental health" },
  { key: "community", label: "Community" },
  { key: "addiction", label: "Substances" },

  { key: "breakup", label: "Breakup" },
  { key: "broken", label: "Crisis" },
  { key: "empty", label: "Burnout" },
];

function PartnersContentEN({
  searchParams,
}: {
  searchParams?: { tag?: string };
}) {
  const tag = searchParams?.tag ?? "all";

  const filtered =
    tag === "all"
      ? PARTNERS_EN
      : PARTNERS_EN.filter((p) => p.tags.includes(tag));

  const activeTagLabel = TAGS_EN.find((t) => t.key === tag)?.label ?? "All";

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-sm text-zinc-400">Waypoint · partners</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Partners & resources
          </h1>

          <p className="mt-4 text-zinc-300 max-w-3xl leading-relaxed">
            Curated directions and resources that actually help: movement, support,
            structure and clarity. No spam.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {TAGS_EN.map((t) => {
              const active = (tag ?? "all") === t.key;

              return (
                <Link
                  key={t.key}
                  href={t.key === "all" ? "/en/partners" : `/en/partners?tag=${t.key}`}
                  className={[
                    "rounded-full px-3 py-2 text-sm transition",
                    active
                      ? "bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-400/20"
                      : "bg-zinc-900/40 text-zinc-300 ring-1 ring-zinc-800/70 hover:bg-zinc-800/50",
                  ].join(" ")}
                >
                  {t.label}
                </Link>
              );
            })}
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Active filter: <span className="text-zinc-300">{activeTagLabel}</span>
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur"
            >
              <p className="text-xs text-zinc-500">{p.name} · {p.region}</p>

              <h2 className="mt-2 text-lg font-semibold text-zinc-100">
                {p.title}
              </h2>

              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tg) => (
                  <Link
                    key={tg}
                    href={`/en/partners?tag=${tg}`}
                    className="rounded-full bg-zinc-950/30 px-2 py-1 text-[11px] text-zinc-300 ring-1 ring-zinc-800/70 hover:bg-zinc-900/50 transition"
                  >
                    #{tg}
                  </Link>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <Link
                  href={p.href}
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
                >
                  {p.cta} →
                </Link>

                <span className="text-xs text-zinc-500">
                  {p.note ?? "Coming soon"}
                </span>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-6 shadow-sm shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Want to become a partner?
          </h2>

          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            If you offer something that genuinely helps men move forward
            (trips, training, professional support, legal, community) — you can join.
            No cheap ads. Only useful offers.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Message via form →
            </Link>

            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back home
            </Link>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Next version: partner form + verification.
          </p>
        </section>
      </div>
    </main>
  );
}

export default function PartnersPageEN(props: {
  searchParams?: { tag?: string };
}) {
  return (
    <Suspense>
      <PartnersContentEN {...props} />
    </Suspense>
  );
}