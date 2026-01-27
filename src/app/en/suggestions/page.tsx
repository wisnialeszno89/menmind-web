import Link from "next/link";
import { Suspense } from "react";
import CitySearch from "../../../components/suggestions/CitySearch";
import { CITIES_EN } from "data/cities-en";

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
    | "navimind";
  title: string;
  desc: string;
  href: (city: string) => string;
  badge?: string;
};

const STATES: { key: StateKey; label: string; hint: string }[] = [
  { key: "broken", label: "Crisis", hint: "Basics first + help if needed." },
  { key: "breakup", label: "Breakup", hint: "Stabilize and avoid destructive moves." },
  {
    key: "relationship",
    label: "Relationship conflict",
    hint: "Arguments, tension, chaos. Stop escalation and rebuild communication + boundaries.",
  },
  { key: "empty", label: "Burnout", hint: "Recovery + people + energy." },
  { key: "pressure", label: "Pressure", hint: "Calm the system and regain direction." },
  { key: "father", label: "Fatherhood", hint: "Presence, calm, boundaries." },
  { key: "ready", label: "Ready", hint: "Movement, people, experiences. No overthinking." },
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
    desc: "When it’s really heavy: sleep collapses and symptoms are too strong.",
    href: (city) => `/en/spec/psychiatrists?city=${city}`,
    badge: "Priority",
  },
  {
    id: "broken-psychologists",
    state: "broken",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "Talk, clarity, emotional stability.",
    href: (city) => `/en/spec/psychologists?city=${city}`,
  },
  {
    id: "broken-navimind",
    state: "broken",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "Unload the chaos and find direction — no judgment.",
    href: () => "/en/navimind?state=broken",
    badge: "Fast relief",
  },

  // ======================
  // BREAKUP (max 4)
  // ======================
  {
    id: "breakup-community",
    state: "breakup",
    kind: "community",
    title: "Community / closed groups",
    desc: "People who get it. Less isolation, more air.",
    href: (city) => `/en/spec/community?city=${city}`,
  },
  {
    id: "breakup-navimind",
    state: "breakup",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "Stabilize after breakup and regain direction.",
    href: () => "/en/navimind?state=breakup",
    badge: "Right now",
  },
  {
    id: "breakup-psychologists",
    state: "breakup",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "When emotions flood you — a talk can save your week.",
    href: (city) => `/en/spec/psychologists?city=${city}`,
  },
  {
    id: "breakup-psychiatrists",
    state: "breakup",
    kind: "psychiatrists",
    title: "Psychiatrists (medical support)",
    desc: "If you don’t sleep, don’t eat, and feel like you’re drifting.",
    href: (city) => `/en/spec/psychiatrists?city=${city}`,
  },

  // ======================
  // RELATIONSHIP CONFLICT (max 3)
  // ======================
  {
    id: "relationship-navimind",
    state: "relationship",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "When you keep fighting. We stop escalation and rebuild communication + boundaries.",
    href: () => "/en/navimind?state=relationship",
    badge: "Right now",
  },
  {
    id: "relationship-psychologists",
    state: "relationship",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "If the tension lasts — clarity and structure help a lot.",
    href: (city) => `/en/spec/psychologists?city=${city}`,
  },
  {
    id: "relationship-training",
    state: "relationship",
    kind: "training",
    title: "Training / movement",
    desc: "Reduce tension in your body. A calmer body means a calmer mind.",
    href: (city) => `/en/spec/training?city=${city}`,
  },

  // ======================
  // BURNOUT (max 3)
  // ======================
  {
    id: "empty-training",
    state: "empty",
    kind: "training",
    title: "Training / movement",
    desc: "Light up the body before you run 100 more mental loops.",
    href: (city) => `/en/spec/training?city=${city}`,
    badge: "Reset",
  },
  {
    id: "empty-community",
    state: "empty",
    kind: "community",
    title: "Community / closed groups",
    desc: "People first. Isolation feeds burnout.",
    href: (city) => `/en/spec/community?city=${city}`,
  },
  {
    id: "empty-navimind",
    state: "empty",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "If you feel there’s no point — we rebuild direction from zero.",
    href: () => "/en/navimind?state=empty",
  },

  // ======================
  // PRESSURE (max 3)
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
    title: "Training / movement",
    desc: "Cut tension physically. Works better than you think.",
    href: (city) => `/en/spec/training?city=${city}`,
  },
  {
    id: "pressure-psychologists",
    state: "pressure",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "When pressure grinds you down — clarity helps.",
    href: (city) => `/en/spec/psychologists?city=${city}`,
  },

  // ======================
  // FATHERHOOD (max 3)
  // ======================
  {
    id: "father-law",
    state: "father",
    kind: "law",
    title: "Law / mediation",
    desc: "Practical steps, agreements, and peace on paper.",
    href: (city) => `/en/spec/law?city=${city}`,
    badge: "Practical",
  },
  {
    id: "father-community",
    state: "father",
    kind: "community",
    title: "Community / closed groups",
    desc: "Support from men who understand fatherhood in real life.",
    href: (city) => `/en/spec/community?city=${city}`,
  },
  {
    id: "father-psychologists",
    state: "father",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "Presence, calm, boundaries. No pressure.",
    href: (city) => `/en/spec/psychologists?city=${city}`,
  },

  // ======================
  // READY (max 2)
  // ======================
  {
    id: "ready-trips",
    state: "ready",
    kind: "trips",
    title: "Trips / activities",
    desc: "Movement + people + new environment. No overthinking.",
    href: (city) => `/en/spec/trips?city=${city}`,
    badge: "One click",
  },
  {
    id: "ready-training",
    state: "ready",
    kind: "training",
    title: "Training / movement",
    desc: "When you’re ready — the body does the rest.",
    href: (city) => `/en/spec/training?city=${city}`,
  },
];

function Content({ searchParams }: { searchParams?: { state?: string; city?: string } }) {
  const state = (searchParams?.state as StateKey) ?? "broken";
  const city = searchParams?.city ?? "online";

  const stateLabel = STATES.find((s) => s.key === state)?.label ?? "Crisis";
  const stateHint = STATES.find((s) => s.key === state)?.hint ?? "";

  const offers = OFFERS.filter((o) => o.state === state);

  const currentCityLabel = CITIES_EN.find((c) => c.key === city)?.label ?? "Online";

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-base text-zinc-300">Waypoint · suggestions</p>

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
                  href={`/en/suggestions?state=${s.key}&city=${city}`}
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
            Location:{" "}
            <span className="text-zinc-200 font-medium">{currentCityLabel}</span>
          </p>

          <CitySearch
            baseHref="/en/suggestions"
            state={state}
            city={city}
            cities={CITIES_EN}
            placeholder="Search city…"
            tip="Tip: type a city name (e.g. Warsaw)."
          />
        </header>

        <section className="grid grid-cols-1 gap-3">
          {offers.map((o) => (
            <Link
              key={o.id}
              href={o.href(city)}
              className="block rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-5 transition hover:bg-zinc-900/55 hover:border-zinc-700/70 hover:shadow-lg hover:shadow-black/30"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-100">{o.title}</h2>

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

export default function SuggestionsPageEN(props: { searchParams?: { state?: string; city?: string } }) {
  return (
    <Suspense>
      <Content {...props} />
    </Suspense>
  );
}