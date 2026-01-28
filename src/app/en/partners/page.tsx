import Link from "next/link";
import { Suspense } from "react";

type Partner = {
  name: string;
  title: string;
  desc: string;
  tags: string[];
  cta: string;
  href: string;
  note?: string;
};

const PARTNERS: Partner[] = [
  // ✅ Trips
  {
    name: "MenMind",
    title: "Men’s trips: reset + outdoor",
    desc: "Expeditions, hiking, nature, simple structure. For men who need movement and a change of environment.",
    tags: ["trips", "ready", "breakup"],
    cta: "Open trips",
    href: "/en/spec/trips",
    note: "Coming soon: verified organizers",
  },

  // ✅ Training / sport
  {
    name: "MenMind",
    title: "Training / sport",
    desc: "Body first. Consistency brings back energy, calm and confidence.",
    tags: ["training", "ready", "pressure", "empty", "breakup"],
    cta: "Open training",
    href: "/en/spec/training",
    note: "Coming soon: gyms & coaches",
  },

  // ✅ Community
  {
    name: "MenMind",
    title: "Private groups / forums",
    desc: "Sometimes you don’t need advice. You need people who get it.",
    tags: ["community", "broken", "breakup", "empty", "father", "ready"],
    cta: "Open community",
    href: "/en/spec/community",
    note: "Coming soon",
  },

  // ✅ Psychologists
  {
    name: "MenMind",
    title: "Psychologists (talk + clarity)",
    desc: "When you need to talk, untangle emotions and regain stability. No shame.",
    tags: [
      "psychologists",
      "father",
      "pressure",
      "broken",
      "breakup",
      "empty",
      "relationship",
    ],
    cta: "Open psychologists",
    href: "/en/spec/psychologists",
    note: "Verified list coming soon",
  },

  // ✅ Psychiatrists
  {
    name: "MenMind",
    title: "Psychiatrists (medical support)",
    desc: "When symptoms are too strong, sleep collapses and your body can’t carry it. Treatment is a tool — not weakness.",
    tags: ["psychiatrists", "broken", "breakup"],
    cta: "Open psychiatrists",
    href: "/en/spec/psychiatrists",
    note: "Verified list coming soon",
  },

  // ✅ Law / mediation
  {
    name: "MenMind",
    title: "Legal support (fatherhood / agreements)",
    desc: "Practical steps, agreements and calmer communication. Structure creates peace.",
    tags: ["law", "father", "breakup"],
    cta: "Open legal support",
    href: "/en/spec/law",
    note: "Coming soon",
  },

  // ✅ Navimind (always useful)
  {
    name: "Navimind",
    title: "Talk now (Navimind chat)",
    desc: "If you need calm and direction right now — no judgment, no pressure.",
    tags: [
      "navimind",
      "broken",
      "breakup",
      "empty",
      "pressure",
      "father",
      "ready",
      "relationship",
    ],
    cta: "Open chat",
    href: "/en/navimind?state=unknown",
    note: "Available now",
  },
];

// ✅ Only visible filters (nightlife is intentionally hidden)
const TAGS: { key: string; label: string }[] = [
  { key: "all", label: "All" },

  // states
  { key: "pressure", label: "Pressure" },
  { key: "ready", label: "Ready" },
  { key: "breakup", label: "Breakup" },
  { key: "broken", label: "Crisis" },
  { key: "empty", label: "Burnout" },
  { key: "father", label: "Fatherhood" },
  { key: "relationship", label: "Relationship" },

  // paths
  { key: "trips", label: "Trips" },
  { key: "training", label: "Training" },
  { key: "community", label: "Groups / forums" },
  { key: "law", label: "Legal" },

  // specialists
  { key: "psychologists", label: "Psychologists" },
  { key: "psychiatrists", label: "Psychiatrists" },

  // tool
  { key: "navimind", label: "Chat" },
];

// ✅ Hidden tag labels (allowed via URL, not shown as buttons)
const HIDDEN_TAG_LABELS: Record<string, string> = {
  nightlife: "Nightlife",
};

function PartnersContent({ searchParams }: { searchParams?: { tag?: string } }) {
  const tag = searchParams?.tag ?? "all";

  const filtered =
    tag === "all" ? PARTNERS : PARTNERS.filter((p) => p.tags.includes(tag));

  const activeTagLabel =
    TAGS.find((t) => t.key === tag)?.label ??
    HIDDEN_TAG_LABELS[tag] ??
    "All";

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-sm text-zinc-400">MenMind · partners</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Partners & resources
          </h1>

          <p className="mt-4 text-zinc-300 max-w-3xl leading-relaxed">
            Curated directions and resources that actually help: movement,
            support, structure and clarity. No spam.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {TAGS.map((t) => {
              const active = tag === t.key;

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
            Active filter:{" "}
            <span className="text-zinc-300">{activeTagLabel}</span>
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur"
            >
              <p className="text-xs text-zinc-500">{p.name}</p>

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
            If you offer something that genuinely helps men move forward (trips,
            training, support, legal, community) — you can apply. No cheap ads.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/en/partnership"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Apply as partner →
            </Link>

            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back home
            </Link>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Next version: verification + partner panel.
          </p>
        </section>
      </div>
    </main>
  );
}

export default function PartnersPageEN(props: { searchParams?: { tag?: string } }) {
  return (
    <Suspense>
      <PartnersContent {...props} />
    </Suspense>
  );
}