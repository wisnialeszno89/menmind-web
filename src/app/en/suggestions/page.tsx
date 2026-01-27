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
    | "navimind";
  title: string;
  desc: string;
  href: () => string;
  badge?: string;
};

const STATES: {
  key: StateKey;
  label: string;
  hint: string;
  extra?: string;
}[] = [
  {
    key: "breakup",
    label: "After a breakup",
    hint: "Stabilize first. Decisions later. You don’t have to carry this alone.",
    extra:
      "It’s normal to feel a mix: emptiness / anger / relief / longing. That’s not weakness — it’s a process.",
  },
  {
    key: "relationship",
    label: "Relationship conflict",
    hint: "Arguments, tension, chaos. Stop escalation and rebuild communication + boundaries.",
    extra:
      "If you keep looping the same fight — you don’t need to win. You need calm and structure.",
  },
  {
    key: "pressure",
    label: "Pressure",
    hint: "Too much on your mind. Calm your system and regain direction.",
    extra:
      "Pressure loves silence inside. Your brain brings noise. Body first, plan second.",
  },
  {
    key: "empty",
    label: "Burnout / emptiness",
    hint: "Biological + mental recovery, people, and energy coming back.",
    extra:
      "You don’t need meaning today. You need small movement and small connection.",
  },
  {
    key: "father",
    label: "Fatherhood",
    hint: "Presence, calm, boundaries. No pressure.",
    extra:
      "This is not about ego. It’s about stability — for the child and for you.",
  },
  {
    key: "ready",
    label: "Ready for change",
    hint: "Movement, new environment, people. No overthinking.",
    extra:
      "You have fuel. Now you burn it well: consistency + new input + fresh environment.",
  },
  {
    key: "broken",
    label: "Crisis",
    hint: "Basics first + help if needed.",
    extra:
      "If you don’t sleep or eat — this is not an ambition moment. This is a base-rebuild moment.",
  },
];

const OFFERS: Offer[] = [
  // =========================================
  // BREAKUP — full set, clean order
  // =========================================
  {
    id: "breakup-navimind",
    state: "breakup",
    kind: "navimind",
    title: "Navimind (talk it out)",
    desc: "Unload the chaos and get direction — no judgment.",
    href: () => "/en/navimind?state=breakup",
    badge: "Start here",
  },
  {
    id: "breakup-community",
    state: "breakup",
    kind: "community",
    title: "Community / closed groups",
    desc: "People who get it. Less isolation, more air.",
    href: () => "/en/spec/community",
  },
  {
    id: "breakup-training",
    state: "breakup",
    kind: "training",
    title: "Training / sport",
    desc: "Kill the mental loop through the body. Simple and effective.",
    href: () => "/en/spec/training",
    badge: "Reset",
  },
  {
    id: "breakup-trips",
    state: "breakup",
    kind: "trips",
    title: "Trips / outdoor / change environment",
    desc: "Sometimes the best therapy is new air and a new rhythm.",
    href: () => "/en/spec/trips",
  },
  {
    id: "breakup-psychologists",
    state: "breakup",
    kind: "psychologists",
    title: "Psychologists (optional)",
    desc: "If you’re drowning — a structured talk helps a lot.",
    href: () => "/en/spec/psychologists",
  },
  {
    id: "breakup-psychiatrists",
    state: "breakup",
    kind: "psychiatrists",
    title: "Psychiatrists (if it’s really heavy)",
    desc: "When sleep collapses and symptoms are too strong.",
    href: () => "/en/spec/psychiatrists",
    badge: "Priority",
  },
  {
    id: "breakup-law",
    state: "breakup",
    kind: "law",
    title: "Law / mediation (if needed)",
    desc: "Child / assets / conflict. Paper can create peace.",
    href: () => "/en/spec/law",
  },

  // =========================================
  // RELATIONSHIP CONFLICT
  // =========================================
  {
    id: "relationship-navimind",
    state: "relationship",
    kind: "navimind",
    title: "Navimind (calm + boundaries)",
    desc: "When you keep fighting. Stop escalation and rebuild communication.",
    href: () => "/en/navimind?state=relationship",
    badge: "Right now",
  },
  {
    id: "relationship-community",
    state: "relationship",
    kind: "community",
    title: "Community / closed groups",
    desc: "Support without shame. Real experience, not lectures.",
    href: () => "/en/spec/community",
  },
  {
    id: "relationship-psychologists",
    state: "relationship",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "Neutral perspective + plan. No drama, no tug-of-war.",
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
    desc: "Calm your system and get back to the wheel.",
    href: () => "/en/navimind?state=pressure",
    badge: "Fast",
  },
  {
    id: "pressure-training",
    state: "pressure",
    kind: "training",
    title: "Training / sport",
    desc: "Cut tension physically. Faster than analysis.",
    href: () => "/en/spec/training",
  },
  {
    id: "pressure-community",
    state: "pressure",
    kind: "community",
    title: "Support groups / community",
    desc: "You don’t have to hold pressure alone.",
    href: () => "/en/spec/community",
  },

  // =========================================
  // BURNOUT / EMPTY
  // =========================================
  {
    id: "empty-training",
    state: "empty",
    kind: "training",
    title: "Training / sport (light)",
    desc: "Minimum movement. Maximum return.",
    href: () => "/en/spec/training",
    badge: "Base",
  },
  {
    id: "empty-trips",
    state: "empty",
    kind: "trips",
    title: "Trips / change environment",
    desc: "Burnout often improves when your rhythm changes.",
    href: () => "/en/spec/trips",
  },
  {
    id: "empty-community",
    state: "empty",
    kind: "community",
    title: "Community / people",
    desc: "Isolation feeds burnout. People weaken it.",
    href: () => "/en/spec/community",
  },
  {
    id: "empty-navimind",
    state: "empty",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "If nothing makes sense — we rebuild direction from zero.",
    href: () => "/en/navimind?state=empty",
  },
  {
    id: "empty-psychologists",
    state: "empty",
    kind: "psychologists",
    title: "Psychologists (optional)",
    desc: "If you’ve been stuck for too long — clarity helps.",
    href: () => "/en/spec/psychologists",
  },

  // =========================================
  // FATHERHOOD
  // =========================================
  {
    id: "father-law",
    state: "father",
    kind: "law",
    title: "Law / mediation",
    desc: "Agreements, boundaries and peace on paper.",
    href: () => "/en/spec/law",
    badge: "Practical",
  },
  {
    id: "father-community",
    state: "father",
    kind: "community",
    title: "Support groups / fathers",
    desc: "Support from men who understand fatherhood in real life.",
    href: () => "/en/spec/community",
  },
  {
    id: "father-navimind",
    state: "father",
    kind: "navimind",
    title: "Navimind (calm + direction)",
    desc: "If emotions are chaotic — we get calm and boundaries back.",
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
    desc: "New environment. New people. Reset and momentum.",
    href: () => "/en/spec/trips",
    badge: "Start",
  },
  {
    id: "ready-training",
    state: "ready",
    kind: "training",
    title: "Training / sport",
    desc: "Momentum comes from repetition, not motivation.",
    href: () => "/en/spec/training",
  },
  {
    id: "ready-places",
    state: "ready",
    kind: "places",
    title: "Places / meetups / new environment",
    desc: "Clubs, restaurants, public places — we’ll add curated options soon.",
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
    desc: "Stop the chaos and breathe. No judgment.",
    href: () => "/en/navimind?state=broken",
    badge: "Start here",
  },
  {
    id: "broken-psychologists",
    state: "broken",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "Talk, clarity, and minimal stability.",
    href: () => "/en/spec/psychologists",
  },
  {
    id: "broken-psychiatrists",
    state: "broken",
    kind: "psychiatrists",
    title: "Psychiatrists (medical support)",
    desc: "When symptoms are too strong and sleep collapses.",
    href: () => "/en/spec/psychiatrists",
    badge: "Priority",
  },
];

function Content({ searchParams }: { searchParams?: { state?: string } }) {
  const state = (searchParams?.state as StateKey) ?? "breakup";

  const current = STATES.find((s) => s.key === state) ?? STATES[0];
  const offers = OFFERS.filter((o) => o.state === state);

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-base text-zinc-300">MenMind · suggestions</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Suggestions
          </h1>

          <p className="mt-2 text-lg text-zinc-200 leading-relaxed">
            {current.label}
          </p>

          <p className="mt-4 text-base text-zinc-300 leading-relaxed">
            {current.hint}
          </p>

          {current.extra ? (
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
              {current.extra}
            </p>
          ) : null}

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

export default function SuggestionsPageEN(props: { searchParams?: { state?: string } }) {
  return (
    <Suspense>
      <Content {...props} />
    </Suspense>
  );
}