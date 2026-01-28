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
  title: string;
  desc: string;
  href: string;
  badge?: string;
};

const STATE_LABELS: Record<StateKey, string> = {
  breakup: "Breakup",
  divorce: "Divorce",
  relationship: "Relationship conflict",
  pressure: "Pressure",
  empty: "Burnout / empty",
  father: "Fatherhood",
  ready: "Ready",
  broken: "Crisis",
};

const OFFERS: Offer[] = [
  // ======================
  // BREAKUP
  // ======================
  {
    id: "breakup-navimind",
    state: "breakup",
    title: "Navimind (talk it out)",
    desc: "Get it out. Calm down. Regain direction — no judgment.",
    href: "/en/navimind?state=breakup",
    badge: "First",
  },
  {
    id: "breakup-community",
    state: "breakup",
    title: "Closed groups / forums",
    desc: "People who get it. No explaining. No shame.",
    href: "/en/spec/groups",
  },
  {
    id: "breakup-training",
    state: "breakup",
    title: "Training / sport",
    desc: "Turn off the mental loop through your body. Simple and effective.",
    href: "/en/spec/training",
    badge: "Reset",
  },
  {
    id: "breakup-trips",
    state: "breakup",
    title: "Trips / outdoor",
    desc: "Sometimes a new environment helps more than analysis.",
    href: "/en/spec/trips",
  },
  {
    id: "breakup-nightlife",
    state: "breakup",
    title: "Clubs / bars / nightlife",
    desc: "Not escaping. Reconnecting with people and life.",
    href: "/en/partners?tag=nightlife",
    badge: "Optional",
  },
  {
    id: "breakup-psychologists",
    state: "breakup",
    title: "Psychologist (optional)",
    desc: "If you feel overwhelmed — one talk can bring structure back.",
    href: "/en/spec/psychologists",
  },

  // ======================
  // DIVORCE
  // ======================
  {
    id: "divorce-law",
    state: "divorce",
    title: "Legal support (priority)",
    desc: "Custody, finances, agreements, mediation. Paperwork brings peace.",
    href: "/en/spec/law",
    badge: "Practical",
  },
  {
    id: "divorce-psychologists",
    state: "divorce",
    title: "Psychologist (stability + structure)",
    desc: "Divorce messes with your head. Here we build calm and a plan.",
    href: "/en/spec/psychologists",
  },
  {
    id: "divorce-psychiatrists",
    state: "divorce",
    title: "Psychiatrist (when sleep collapses)",
    desc: "This is medical support — not a label.",
    href: "/en/spec/psychiatrists",
    badge: "Priority",
  },
  {
    id: "divorce-community",
    state: "divorce",
    title: "Support groups (men after divorce)",
    desc: "No explaining. People who’ve been through it.",
    href: "/en/spec/groups",
  },

  // ======================
  // FATHERHOOD
  // ======================
  {
    id: "father-law",
    state: "father",
    title: "Legal / agreements / mediation",
    desc: "Rules, boundaries, custody. Less war — more peace.",
    href: "/en/spec/law",
    badge: "Practical",
  },
  {
    id: "father-community",
    state: "father",
    title: "Father groups / support",
    desc: "Practical experience + less isolation.",
    href: "/en/spec/groups",
  },
  {
    id: "father-psychologists",
    state: "father",
    title: "Psychologist (support)",
    desc: "Helps you avoid passing stress onto your child.",
    href: "/en/spec/psychologists",
  },
  {
    id: "father-navimind",
    state: "father",
    title: "Navimind (calm + direction)",
    desc: "When chaos hits — we rebuild control and clarity.",
    href: "/en/navimind?state=father",
  },

  // ======================
  // PRESSURE
  // ======================
  {
    id: "pressure-navimind",
    state: "pressure",
    title: "Navimind (calm + direction)",
    desc: "Regulate first. Decide second.",
    href: "/en/navimind?state=pressure",
    badge: "Fast",
  },
  {
    id: "pressure-training",
    state: "pressure",
    title: "Training / sport",
    desc: "Lower stress physically — faster than analysis.",
    href: "/en/spec/training",
  },
  {
    id: "pressure-community",
    state: "pressure",
    title: "Groups / people",
    desc: "Pressure drops when you’re not alone.",
    href: "/en/spec/groups",
  },

  // ======================
  // BURNOUT / EMPTY
  // ======================
  {
    id: "empty-sleep",
    state: "empty",
    title: "Sleep reset",
    desc: "Sleep is the foundation of energy.",
    href: "/en/tools/sleep-reset",
    badge: "Base",
  },
  {
    id: "empty-training",
    state: "empty",
    title: "Training (light)",
    desc: "Minimum movement. Maximum effect.",
    href: "/en/spec/training",
  },
  {
    id: "empty-community",
    state: "empty",
    title: "Groups / people",
    desc: "Isolation feeds emptiness. People weaken it.",
    href: "/en/spec/groups",
  },
  {
    id: "empty-psychologists",
    state: "empty",
    title: "Psychologist (optional)",
    desc: "If you’re stuck — a conversation can move you forward.",
    href: "/en/spec/psychologists",
  },

  // ======================
  // READY
  // ======================
  {
    id: "ready-trips",
    state: "ready",
    title: "Trips / outdoor",
    desc: "New environment. New people. Mind reset.",
    href: "/en/spec/trips",
    badge: "Start",
  },
  {
    id: "ready-training",
    state: "ready",
    title: "Training / sport",
    desc: "Form isn’t motivation — it’s repetition.",
    href: "/en/spec/training",
  },
  {
    id: "ready-nightlife",
    state: "ready",
    title: "Clubs / bars / nightlife",
    desc: "Go out. Meet people. No pressure — just contact and movement.",
    href: "/en/partners?tag=nightlife",
    badge: "Soon",
  },

  // ======================
  // CRISIS
  // ======================
  {
    id: "broken-navimind",
    state: "broken",
    title: "Navimind (first aid)",
    desc: "Stop the chaos and breathe. No judgment.",
    href: "/en/navimind?state=broken",
    badge: "First",
  },
  {
    id: "broken-psychologists",
    state: "broken",
    title: "Psychologist (support)",
    desc: "Structure emotions and return to minimum stability.",
    href: "/en/spec/psychologists",
  },
  {
    id: "broken-psychiatrists",
    state: "broken",
    title: "Psychiatrist (medical support)",
    desc: "When sleep collapses and you can’t function.",
    href: "/en/spec/psychiatrists",
    badge: "Priority",
  },

  // ======================
  // RELATIONSHIP CONFLICT
  // ======================
  {
    id: "relationship-navimind",
    state: "relationship",
    title: "Navimind (communication + boundaries)",
    desc: "Stop escalation and get back to a calmer structure.",
    href: "/en/navimind?state=relationship",
    badge: "Now",
  },
  {
    id: "relationship-psychologists",
    state: "relationship",
    title: "Psychologist (support)",
    desc: "Neutral space and a plan — without drama.",
    href: "/en/spec/psychologists",
  },
  {
    id: "relationship-community",
    state: "relationship",
    title: "Groups / forums",
    desc: "Experience and perspective from people who get it.",
    href: "/en/spec/groups",
  },
];

function Content({ searchParams }: { searchParams?: { state?: string } }) {
  const state = (searchParams?.state as StateKey) ?? "breakup";
  const label = STATE_LABELS[state] ?? "Suggestions";
  const offers = OFFERS.filter((o) => o.state === state);

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-base text-zinc-300">MenMind · suggestions</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Suggestions
          </h1>

          <p className="mt-3 text-lg text-zinc-200">{label}</p>
        </header>

        <section className="grid grid-cols-1 gap-3">
          {offers.map((o) => (
            <Link
              key={o.id}
              href={o.href}
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
            href="/en/partners"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-900/40 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-800/70 hover:bg-zinc-800/50 transition"
          >
            View all resources →
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