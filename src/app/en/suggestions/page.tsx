import Link from "next/link";
import { Suspense } from "react";

type StateKey =
  | "broken"
  | "breakup"
  | "divorce"
  | "relationship"
  | "empty"
  | "pressure"
  | "father"
  | "ready";

type Offer = {
  id: string;
  state: StateKey;
  kind:
    | "psychologists"
    | "psychiatrists"
    | "community"
    | "training"
    | "trips"
    | "law"
    | "places"
    | "nightlife"
    | "navimind";
  title: string;
  desc: string;
  href: () => string;
  badge?: string;
};

const STATES: {
  key: StateKey;
  label: string;
}[] = [
  { key: "breakup", label: "Breakup" },
  { key: "divorce", label: "Divorce" },
  { key: "relationship", label: "Relationship conflict" },
  { key: "pressure", label: "Pressure" },
  { key: "empty", label: "Burnout / empty" },
  { key: "father", label: "Fatherhood" },
  { key: "ready", label: "Ready" },
  { key: "broken", label: "Crisis" },
];

const OFFERS: Offer[] = [
  // =========================================
  // BREAKUP
  // =========================================
  {
    id: "breakup-navimind",
    state: "breakup",
    kind: "navimind",
    title: "Navimind (talk it out)",
    desc: "Get it out, calm down, regain direction — no judgment.",
    href: () => "/en/navimind?state=breakup",
    badge: "First",
  },
  {
    id: "breakup-community",
    state: "breakup",
    kind: "community",
    title: "Closed groups / forums",
    desc: "People who get it. No explaining. No shame.",
    href: () => "/en/spec/groups",
  },
  {
    id: "breakup-training",
    state: "breakup",
    kind: "training",
    title: "Training / sport",
    desc: "Turn off the mental loop through your body. Simple, effective.",
    href: () => "/en/spec/training",
    badge: "Reset",
  },
  {
    id: "breakup-trips",
    state: "breakup",
    kind: "trips",
    title: "Trips / outdoor / change of environment",
    desc: "Sometimes the best therapy is different air and a new rhythm.",
    href: () => "/en/spec/trips",
  },
  {
    id: "breakup-nightlife",
    state: "breakup",
    kind: "nightlife",
    title: "Clubs / bars / nightlife",
    desc: "Not to escape. To reconnect with life and people.",
    href: () => "/en/partners?tag=nightlife",
    badge: "Optional",
  },
  {
    id: "breakup-psychologists",
    state: "breakup",
    kind: "psychologists",
    title: "Psychologists (optional)",
    desc: "If you’re overwhelmed — one conversation can bring structure back.",
    href: () => "/en/spec/psychologists",
  },
  {
    id: "breakup-psychiatrists",
    state: "breakup",
    kind: "psychiatrists",
    title: "Psychiatrists (if it’s really hard)",
    desc: "When sleep collapses, energy is gone, symptoms are too big.",
    href: () => "/en/spec/psychiatrists",
    badge: "Priority",
  },
  {
    id: "breakup-law",
    state: "breakup",
    kind: "law",
    title: "Legal / mediation (if needed)",
    desc: "Child / property / conflict. Paperwork can sometimes bring peace.",
    href: () => "/en/spec/law",
  },

  // =========================================
  // DIVORCE
  // =========================================
  {
    id: "divorce-law",
    state: "divorce",
    kind: "law",
    title: "Legal support (divorce / custody / finances)",
    desc: "Lawyers, mediation, preparation and protecting your interests.",
    href: () => "/en/spec/law",
    badge: "Practical",
  },
  {
    id: "divorce-community",
    state: "divorce",
    kind: "community",
    title: "Support groups",
    desc: "People who understand it from the inside. No shame, no explaining.",
    href: () => "/en/spec/groups",
  },
  {
    id: "divorce-psychologists",
    state: "divorce",
    kind: "psychologists",
    title: "Psychologist (stability + structure)",
    desc: "If your head is spinning — talk and build a calm plan.",
    href: () => "/en/spec/psychologists",
  },
  {
    id: "divorce-psychiatrists",
    state: "divorce",
    kind: "psychiatrists",
    title: "Psychiatrist (when sleep breaks down)",
    desc: "When you can’t function — medical support can help stabilize.",
    href: () => "/en/spec/psychiatrists",
    badge: "Priority",
  },

  // =========================================
  // RELATIONSHIP
  // =========================================
  {
    id: "relationship-navimind",
    state: "relationship",
    kind: "navimind",
    title: "Navimind (communication + boundaries)",
    desc: "Stop escalation and rebuild calm structure.",
    href: () => "/en/navimind?state=relationship",
    badge: "Now",
  },
  {
    id: "relationship-community",
    state: "relationship",
    kind: "community",
    title: "Groups / forums",
    desc: "Real experience instead of judgment.",
    href: () => "/en/spec/groups",
  },
  {
    id: "relationship-psychologists",
    state: "relationship",
    kind: "psychologists",
    title: "Psychologist (support)",
    desc: "A neutral space and a plan. No drama.",
    href: () => "/en/spec/psychologists",
  },

  // =========================================
  // PRESSURE
  // =========================================
  {
    id: "pressure-navimind",
    state: "pressure",
    kind: "navimind",
    title: "Navimind (calm + direction)",
    desc: "Regulate your system and get back on track.",
    href: () => "/en/navimind?state=pressure",
    badge: "Fast",
  },
  {
    id: "pressure-training",
    state: "pressure",
    kind: "training",
    title: "Training / sport",
    desc: "Reduce stress physically. Faster than analysis.",
    href: () => "/en/spec/training",
  },
  {
    id: "pressure-community",
    state: "pressure",
    kind: "community",
    title: "Support groups",
    desc: "You don’t have to carry pressure alone.",
    href: () => "/en/spec/groups",
  },

  // =========================================
  // EMPTY / BURNOUT
  // =========================================
  {
    id: "empty-training",
    state: "empty",
    kind: "training",
    title: "Training / sport (light)",
    desc: "Minimal movement. Minimal noise. Maximum effect.",
    href: () => "/en/spec/training",
    badge: "Base",
  },
  {
    id: "empty-trips",
    state: "empty",
    kind: "trips",
    title: "Trips / change of environment",
    desc: "Burnout often improves when rhythm and surroundings change.",
    href: () => "/en/spec/trips",
  },
  {
    id: "empty-community",
    state: "empty",
    kind: "community",
    title: "Groups / people",
    desc: "Isolation feeds emptiness. People weaken it.",
    href: () => "/en/spec/groups",
  },
  {
    id: "empty-navimind",
    state: "empty",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "If life feels pointless — we rebuild direction from zero.",
    href: () => "/en/navimind?state=empty",
  },
  {
    id: "empty-psychologists",
    state: "empty",
    kind: "psychologists",
    title: "Psychologist (optional)",
    desc: "If you’re stuck for long — a conversation can pull you out.",
    href: () => "/en/spec/psychologists",
  },

  // =========================================
  // FATHERHOOD
  // =========================================
  {
    id: "father-law",
    state: "father",
    kind: "law",
    title: "Legal / mediation",
    desc: "Set rules and boundaries. Paperwork can protect peace.",
    href: () => "/en/spec/law",
    badge: "Practical",
  },
  {
    id: "father-community",
    state: "father",
    kind: "community",
    title: "Father groups / support",
    desc: "Support from men who actually get fatherhood.",
    href: () => "/en/spec/groups",
  },
  {
    id: "father-navimind",
    state: "father",
    kind: "navimind",
    title: "Navimind (calm + direction)",
    desc: "Regain calm decisions and boundaries.",
    href: () => "/en/navimind?state=father",
  },

  // =========================================
  // READY
  // =========================================
  {
    id: "ready-trips",
    state: "ready",
    kind: "trips",
    title: "Trips / outdoor / men’s activities",
    desc: "New environment. New people. Reset your mind and energy.",
    href: () => "/en/spec/trips",
    badge: "Start",
  },
  {
    id: "ready-training",
    state: "ready",
    kind: "training",
    title: "Training / sport",
    desc: "Form isn’t motivation — it’s repetition.",
    href: () => "/en/spec/training",
  },
  {
    id: "ready-nightlife",
    state: "ready",
    kind: "nightlife",
    title: "Clubs / bars / nightlife",
    desc: "Go out, meet people, change the environment. No pressure — just contact.",
    href: () => "/en/partners?tag=nightlife",
    badge: "Soon",
  },
  {
    id: "ready-places",
    state: "ready",
    kind: "places",
    title: "Places / meetups / new environment",
    desc: "Clubs, restaurants, public spaces — recommended options coming soon.",
    href: () => "/en/partners?tag=community",
    badge: "Soon",
  },

  // =========================================
  // CRISIS
  // =========================================
  {
    id: "broken-navimind",
    state: "broken",
    kind: "navimind",
    title: "Navimind (first aid)",
    desc: "Stop chaos and take a breath. No judgment.",
    href: () => "/en/navimind?state=broken",
    badge: "First",
  },
  {
    id: "broken-psychologists",
    state: "broken",
    kind: "psychologists",
    title: "Psychologist (support)",
    desc: "Structure emotions and return to minimum stability.",
    href: () => "/en/spec/psychologists",
  },
  {
    id: "broken-psychiatrists",
    state: "broken",
    kind: "psychiatrists",
    title: "Psychiatrist (medical support)",
    desc: "When it’s really hard: sleep breaks down, you can’t function.",
    href: () => "/en/spec/psychiatrists",
    badge: "Priority",
  },
];

function Content({ searchParams }: { searchParams?: { state?: string } }) {
  const state = (searchParams?.state as StateKey) ?? "breakup";

  const offers = OFFERS.filter((o) => o.state === state);

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-base text-zinc-300">MenMind · suggestions</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Suggestions
          </h1>

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
            ← Back
          </Link>

          <Link
            href="/en/partnership"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
          >
            Become a partner →
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function SuggestionsPage(props: {
  searchParams?: { state?: string };
}) {
  return (
    <Suspense>
      <Content {...props} />
    </Suspense>
  );
}