import Link from "next/link";
import { Suspense } from "react";

type StateKey = "broken" | "breakup" | "empty" | "pressure" | "father" | "ready";

type City = {
  key: string;
  label: string;
};

type Offer = {
  id: string;
  state: StateKey;
  kind: "psychologists" | "psychiatrists" | "community" | "training" | "trips" | "law" | "navimind";
  title: string;
  desc: string;
  href: string;
  badge?: string;
};

const STATES: { key: StateKey; label: string; hint: string }[] = [
  { key: "broken", label: "Crisis", hint: "Basics first + help if needed." },
  { key: "breakup", label: "Breakup", hint: "Stabilize and avoid destructive moves." },
  { key: "empty", label: "Burnout", hint: "Recovery + people + energy." },
  { key: "pressure", label: "Pressure", hint: "Calm the system and regain direction." },
  { key: "father", label: "Fatherhood", hint: "Presence, calm, boundaries." },
  { key: "ready", label: "Ready", hint: "Movement, people, experiences. No overthinking." },
];

const CITIES: City[] = [
  { key: "online", label: "Online" },

  // Poland - main cities (simple for EN MVP)
  { key: "warsaw", label: "Warsaw" },
  { key: "krakow", label: "Kraków" },
  { key: "wroclaw", label: "Wrocław" },
  { key: "poznan", label: "Poznań" },
  { key: "gdansk", label: "Gdańsk" },
  { key: "lodz", label: "Łódź" },
  { key: "katowice", label: "Katowice" },
  { key: "szczecin", label: "Szczecin" },
  { key: "lublin", label: "Lublin" },
];

const OFFERS: Offer[] = [
  // BROKEN
  {
    id: "broken-psychiatrists",
    state: "broken",
    kind: "psychiatrists",
    title: "Psychiatrists (medical support)",
    desc: "When it’s really heavy: sleep collapses and symptoms are too strong.",
    href: "/en/partners?tag=psychiatrists",
    badge: "Priority",
  },
  {
    id: "broken-psychologists",
    state: "broken",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "Talk, clarity, emotional stability.",
    href: "/en/partners?tag=psychologists",
  },
  {
    id: "broken-navimind",
    state: "broken",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "Unload the chaos and find direction — no judgment.",
    href: "/en/navimind?state=broken",
    badge: "Fast relief",
  },

  // BREAKUP
  {
    id: "breakup-community",
    state: "breakup",
    kind: "community",
    title: "Private groups / forums",
    desc: "No explaining. Just people who get it.",
    href: "/en/partners?tag=community",
  },
  {
    id: "breakup-navimind",
    state: "breakup",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "Release pressure and regain direction after a breakup.",
    href: "/en/navimind?state=breakup",
    badge: "For now",
  },
  {
    id: "breakup-psychologists",
    state: "breakup",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "When it floods you — support can save your week.",
    href: "/en/partners?tag=psychologists",
  },
  {
    id: "breakup-psychiatrists",
    state: "breakup",
    kind: "psychiatrists",
    title: "Psychiatrists (support)",
    desc: "If you don’t sleep, don’t eat and feel like drifting away.",
    href: "/en/partners?tag=psychiatrists",
  },

  // EMPTY
  {
    id: "empty-training",
    state: "empty",
    kind: "training",
    title: "Movement / training",
    desc: "Not for performance. For energy and stability.",
    href: "/en/partners?tag=training",
    badge: "Best start",
  },
  {
    id: "empty-community",
    state: "empty",
    kind: "community",
    title: "Groups / forums",
    desc: "Emptiness shrinks when you’re not alone in it.",
    href: "/en/partners?tag=community",
  },
  {
    id: "empty-navimind",
    state: "empty",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "When you feel stuck and can’t explain why.",
    href: "/en/navimind?state=empty",
  },

  // PRESSURE
  {
    id: "pressure-psychologists",
    state: "pressure",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "When pressure squeezes you and you lose direction.",
    href: "/en/partners?tag=psychologists",
  },
  {
    id: "pressure-training",
    state: "pressure",
    kind: "training",
    title: "Movement / training",
    desc: "Body releases tension faster than the mind.",
    href: "/en/partners?tag=training",
  },
  {
    id: "pressure-navimind",
    state: "pressure",
    kind: "navimind",
    title: "Navimind (talk)",
    desc: "Unload and return to concrete steps.",
    href: "/en/navimind?state=pressure",
    badge: "Now",
  },

  // FATHER
  {
    id: "father-law",
    state: "father",
    kind: "law",
    title: "Legal / mediation",
    desc: "When you need clear agreements without war.",
    href: "/en/partners?tag=law",
  },
  {
    id: "father-community",
    state: "father",
    kind: "community",
    title: "Fathers community",
    desc: "Experience exchange without judgment.",
    href: "/en/partners?tag=community",
  },
  {
    id: "father-psychologists",
    state: "father",
    kind: "psychologists",
    title: "Psychologists (support)",
    desc: "If tension leaks into home and you want to stop it.",
    href: "/en/partners?tag=psychologists",
  },

  // READY
  {
    id: "ready-trips",
    state: "ready",
    kind: "trips",
    title: "Trips / men’s activities",
    desc: "Movement + people + new environment. No pressure.",
    href: "/en/partners?tag=trips",
    badge: "One click",
  },
];

function SuggestionsContent({
  searchParams,
}: {
  searchParams?: { state?: string; city?: string; q?: string };
}) {
  const state = (searchParams?.state as StateKey) ?? "broken";
  const city = searchParams?.city ?? "online";
  const q = (searchParams?.q ?? "").toLowerCase();

  const stateLabel = STATES.find((s) => s.key === state)?.label ?? "Crisis";
  const stateHint = STATES.find((s) => s.key === state)?.hint ?? "";

  const cityOptions = CITIES.filter((c) => c.label.toLowerCase().includes(q));
  const offers = OFFERS.filter((o) => o.state === state);

  const currentCityLabel = CITIES.find((c) => c.key === city)?.label ?? "Online";

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · suggestions</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Suggestions: {stateLabel}
          </h1>

          <p className="mt-3 text-zinc-300 leading-relaxed">{stateHint}</p>

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

          <section className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-4">
            <p className="text-xs text-zinc-500 mb-2">
              Location: <span className="text-zinc-300">{currentCityLabel}</span>
            </p>

            <div className="flex flex-col gap-3">
              <input
                defaultValue={searchParams?.q ?? ""}
                placeholder="Search city…"
                className="w-full rounded-xl border border-zinc-800/70 bg-zinc-950/30 px-4 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-cyan-500/20"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const value = (e.target as HTMLInputElement).value;
                    const url = `/en/suggestions?state=${state}&city=${city}&q=${encodeURIComponent(value)}`;
                    window.location.href = url;
                  }
                }}
              />

              <div className="flex flex-wrap gap-2">
                {cityOptions.slice(0, 16).map((c) => {
                  const active = c.key === city;
                  return (
                    <Link
                      key={c.key}
                      href={`/en/suggestions?state=${state}&city=${c.key}`}
                      className={[
                        "rounded-full px-3 py-2 text-sm transition",
                        active
                          ? "bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-400/20"
                          : "bg-zinc-950/30 text-zinc-300 ring-1 ring-zinc-800/70 hover:bg-zinc-900/50",
                      ].join(" ")}
                    >
                      {c.label}
                    </Link>
                  );
                })}
              </div>

              <p className="text-xs text-zinc-500">
                Tip: type a city name and press Enter.
              </p>
            </div>
          </section>
        </header>

        <section className="grid grid-cols-1 gap-3">
          {offers.map((o) => (
            <Link
              key={o.id}
              href={o.href}
              className="block rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-5 hover:bg-zinc-900/55 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-100">
                    {o.title}
                  </h2>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
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
  searchParams?: { state?: string; city?: string; q?: string };
}) {
  return (
    <Suspense>
      <SuggestionsContent {...props} />
    </Suspense>
  );
}