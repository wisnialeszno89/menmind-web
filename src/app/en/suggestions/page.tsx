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
  href: (city: string) => string;
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
              href={o.href(city)}
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