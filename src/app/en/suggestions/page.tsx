import Link from "next/link";
import { Suspense } from "react";

type StateKey =
  | "broken"
  | "breakup"
  | "relationship"
  | "empty"
  | "pressure"
  | "father"
  | "ready";

type OfferKind =
  | "psychologists"
  | "psychiatrists"
  | "community"
  | "training"
  | "trips"
  | "law"
  | "navimind"
  | "activities";

type Offer = {
  id: string;
  state: StateKey;
  kind: OfferKind;
  title: string;
  desc: string;
  href: () => string;
  badge?: string;
};

const STATES: { key: StateKey; label: string; hint: string }[] = [
  { key: "broken", label: "Crisis", hint: "Basics first + help if needed." },
  {
    key: "breakup",
    label: "Breakup",
    hint: "We won’t assume your mental state. We show all available options.",
  },
  {
    key: "relationship",
    label: "Relationship conflict",
    hint: "Fights and tension. Talk first — stop escalation.",
  },
  { key: "empty", label: "Burnout", hint: "Recovery + people + energy." },
  { key: "pressure", label: "Pressure", hint: "Calm the system and regain direction." },
  { key: "father", label: "Fatherhood", hint: "Boundaries, agreements, calm. Practical steps." },
  { key: "ready", label: "Ready", hint: "Movement, environment, men’s activities." },
];

const OFFERS: Offer[] = [
  // ======================
  // CRISIS (max 3)
  // ======================
  {
    id: "broken-psychiatrists",
    state: "broken",
    kind: "psychiatrists",
    title: "Psychiatrists (medical support)",
    desc: "When symptoms are too strong and sleep collapses.",
    href: () => `/en/spec/psychiatrists`,
    badge: "Priority",
  },
  {
    id: "broken-psychologists",
    state: "broken",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "Talk, clarity, emotional stability.",
    href: () => `/en/spec/psychologists`,
  },
  {
    id: "broken-navimind",
    state: "broken",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "Unload the chaos and find direction — no judgment.",
    href: () => "/en/navimind?state=broken",
    badge: "Start",
  },

  // ======================
  // BREAKUP (ALL)
  // ======================
  {
    id: "breakup-navimind",
    state: "breakup",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "Stabilize after breakup and regain direction.",
    href: () => "/en/navimind?state=breakup",
    badge: "Start",
  },
  {
    id: "breakup-psychologists",
    state: "breakup",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "When emotions flood you or your mind loops.",
    href: () => `/en/spec/psychologists`,
  },
  {
    id: "breakup-psychiatrists",
    state: "breakup",
    kind: "psychiatrists",
    title: "Psychiatrists (medical support)",
    desc: "If you can’t sleep or eat and feel like you’re drifting.",
    href: () => `/en/spec/psychiatrists`,
  },
  {
    id: "breakup-community",
    state: "breakup",
    kind: "community",
    title: "Community / closed groups",
    desc: "Less isolation. People who get it.",
    href: () => `/en/spec/community`,
  },
  {
    id: "breakup-training",
    state: "breakup",
    kind: "training",
    title: "Training / sport",
    desc: "Regulate tension through the body. Works fast.",
    href: () => `/en/spec/training`,
  },
  {
    id: "breakup-trips",
    state: "breakup",
    kind: "trips",
    title: "Men’s trips: reset + outdoor",
    desc: "New environment and structure. No overthinking.",
    href: () => `/en/spec/trips`,
  },
  {
    id: "breakup-law",
    state: "breakup",
    kind: "law",
    title: "Legal help (if agreements matter)",
    desc: "Structure and boundaries when things get formal.",
    href: () => `/en/spec/law`,
  },

  // ======================
  // RELATIONSHIP CONFLICT (max 2)
  // ======================
  {
    id: "relationship-navimind",
    state: "relationship",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "Stop escalation. Rebuild communication and boundaries.",
    href: () => "/en/navimind?state=relationship",
    badge: "First",
  },
  {
    id: "relationship-psychologists",
    state: "relationship",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "When the tension lasts and the pattern repeats.",
    href: () => `/en/spec/psychologists`,
  },

  // ======================
  // BURNOUT (max 3)
  // ======================
  {
    id: "empty-training",
    state: "empty",
    kind: "training",
    title: "Training / sport",
    desc: "Move your body before your mind runs 100 more loops.",
    href: () => `/en/spec/training`,
    badge: "Reset",
  },
  {
    id: "empty-community",
    state: "empty",
    kind: "community",
    title: "Community / closed groups",
    desc: "People first. Isolation feeds burnout.",
    href: () => `/en/spec/community`,
  },
  {
    id: "empty-navimind",
    state: "empty",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "If nothing makes sense — we rebuild direction from zero.",
    href: () => "/en/navimind?state=empty",
  },

  // ======================
  // PRESSURE (NO law / NO psychiatry)
  // ======================
  {
    id: "pressure-navimind",
    state: "pressure",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "Calm your nervous system and reduce chaos fast.",
    href: () => "/en/navimind?state=pressure",
    badge: "Fast",
  },
  {
    id: "pressure-training",
    state: "pressure",
    kind: "training",
    title: "Training / sport",
    desc: "Cut tension physically. Works better than you think.",
    href: () => `/en/spec/training`,
  },
  {
    id: "pressure-psychologists",
    state: "pressure",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "Clarity and structure when pressure grinds you down.",
    href: () => `/en/spec/psychologists`,
  },

  // ======================
  // FATHERHOOD (3) — practical + chat
  // ======================
  {
    id: "father-navimind",
    state: "father",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "One boundary. One next step. Calm and practical.",
    href: () => "/en/navimind?state=father",
    badge: "Practical",
  },
  {
    id: "father-law",
    state: "father",
    kind: "law",
    title: "Law / mediation",
    desc: "Agreements, structure and peace on paper.",
    href: () => `/en/spec/law`,
  },
  {
    id: "father-psychologists",
    state: "father",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "Emotions, communication, boundaries. No pressure.",
    href: () => `/en/spec/psychologists`,
  },

  // ======================
  // READY (max 3)
  // ======================
  {
    id: "ready-trips",
    state: "ready",
    kind: "trips",
    title: "Men’s trips: reset + outdoor",
    desc: "Movement + people + new environment. No overthinking.",
    href: () => `/en/spec/trips`,
    badge: "Top",
  },
  {
    id: "ready-community",
    state: "ready",
    kind: "community",
    title: "Community / closed groups",
    desc: "Your environment matters. Find your people.",
    href: () => `/en/spec/community`,
  },
  {
    id: "ready-activities",
    state: "ready",
    kind: "activities",
    title: "Other activities (list)",
    desc: "Sport, routine, outdoor. Simple things that build calm.",
    href: () => `/en/spec/trips`,
  },
];

function Content({ searchParams }: { searchParams?: { state?: string } }) {
  const state = (searchParams?.state as StateKey) ?? "broken";

  const stateLabel = STATES.find((s) => s.key === state)?.label ?? "Crisis";
  const stateHint = STATES.find((s) => s.key === state)?.hint ?? "";
  const offers = OFFERS.filter((o) => o.state === state);

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-base text-zinc-300">MenMind · suggestions</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Suggestions: {stateLabel}
          </h1>

          <p className="mt-4 text-lg text-zinc-200 leading-relaxed">
            {stateHint}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {STATES.map((s) => {
              const active = s.key === state;

              return (
                <Link
                  key={s.key}
                  href={`/en/suggestions?state=${s.key}`}
                  className={[
                    "rounded-full px-3 py-2 text-sm transition",
                    active
                      ? "bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-400/20"
                      : "bg-zinc-900/40 text-zinc-300 ring-1 ring-zinc-800/70 hover:bg-zinc-800/50",
                  ].join(" ")}
                >
                  {s.label}
                </Link>
              );
            })}
          </div>

          <p className="mt-4 text-sm text-zinc-400">
            Mode: <span className="text-zinc-200 font-medium">Online</span>
          </p>
        </header>

        <section className="grid grid-cols-1 gap-3">
          {offers.map((o) => (
            <Link
              key={o.id}
              href={o.href()}
              className="block rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-5 transition hover:bg-zinc-900/55 hover:border-zinc-700/70 hover:shadow-lg hover:shadow-black/30"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-100">
                    {o.title}
                  </h2>
                  <p className="mt-2 text-base text-zinc-300 leading-relaxed">
                    {o.desc}
                  </p>
                </div>

                {o.badge ? (
                  <span className="shrink-0 rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-200 ring-1 ring-cyan-400/20">
                    {o.badge}
                  </span>
                ) : null}
              </div>

              <p className="mt-3 text-sm text-cyan-200">Open →</p>
            </Link>
          ))}
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/en"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
          >
            ← Back to choices
          </Link>

          <Link
            href="/en/partnership"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
          >
            Apply as partner →
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function SuggestionsPageEN(props: {
  searchParams?: { state?: string };
}) {
  return (
    <Suspense>
      <Content {...props} />
    </Suspense>
  );
}