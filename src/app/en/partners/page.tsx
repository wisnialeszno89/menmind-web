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
  country?: string; // "PL", "DE", "ES"...
  note?: string;
};

const PARTNERS_EN: Partner[] = [
  {
    name: "Waypoint Trips",
    title: "Men’s trips: reset + outdoors",
    desc: "Expeditions, hiking, nature, simple structure. For men who need change, movement, and people.",
    tags: ["trips", "ready"],
    href: "#",
    cta: "Explore trips",
    region: "EU",
    country: "PL",
    note: "Coming soon: verified organizers across Europe",
  },
  {
    name: "Training / Combat",
    title: "Training & martial arts",
    desc: "Body + mind. Consistency returns energy, calmness and confidence faster than you expect.",
    tags: ["training", "ready"],
    href: "#",
    cta: "See options",
    region: "EU",
    country: "DE",
    note: "Coming soon: gyms & coaches",
  },
  {
    name: "Fatherhood Support",
    title: "Fatherhood: presence, connection, communication",
    desc: "Practical support for fathers. No guru energy. No shame. Just real tools.",
    tags: ["fatherhood", "father"],
    href: "#",
    cta: "Explore support",
    region: "EU",
    note: "Coming soon",
  },
  {
    name: "Co-parenting",
    title: "Boundaries & co-parenting",
    desc: "Clear agreements, calm communication, less conflict. A way to protect the child and yourself.",
    tags: ["co-parenting", "father"],
    href: "#",
    cta: "See options",
    region: "EU",
    note: "Coming soon",
  },
  {
    name: "Specialists",
    title: "Recommended professionals",
    desc: "Sometimes you need a competent person. Not a life sentence — just a tool that helps.",
    tags: ["broken", "breakup", "empty"],
    href: "#",
    cta: "See recommendations",
    region: "EU",
    note: "Coming soon: curated list",
  },
  {
    name: "Community",
    title: "Community & real conversations",
    desc: "You don’t have to carry everything alone. The right people can change everything.",
    tags: ["broken", "breakup", "empty", "ready", "father"],
    href: "#",
    cta: "Enter",
    region: "EU",
    note: "Coming soon",
  },
];

const TAGS_EN: { key: string; label: string }[] = [
  { key: "all", label: "All" },
  { key: "trips", label: "Trips" },
  { key: "training", label: "Training" },
  { key: "fatherhood", label: "Fatherhood" },
  { key: "co-parenting", label: "Boundaries" },
  { key: "breakup", label: "Breakup" },
  { key: "broken", label: "Crisis" },
  { key: "empty", label: "Burnout" },
  { key: "ready", label: "Ready" },
];

const COUNTRIES_EU: { key: string; label: string }[] = [
  { key: "all", label: "Europe" },
  { key: "PL", label: "Poland" },
  { key: "DE", label: "Germany" },
  { key: "CZ", label: "Czechia" },
  { key: "SK", label: "Slovakia" },
  { key: "AT", label: "Austria" },
  { key: "CH", label: "Switzerland" },
  { key: "NL", label: "Netherlands" },
  { key: "BE", label: "Belgium" },
  { key: "FR", label: "France" },
  { key: "ES", label: "Spain" },
  { key: "IT", label: "Italy" },
  { key: "SE", label: "Sweden" },
  { key: "NO", label: "Norway" },
  { key: "DK", label: "Denmark" },
  { key: "UK", label: "United Kingdom" },
];

function buildUrl(base: string, params: Record<string, string | undefined>) {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v && v !== "all") query.set(k, v);
  });
  const qs = query.toString();
  return qs ? `${base}?${qs}` : base;
}

function PartnersContentEN({
  searchParams,
}: {
  searchParams?: { tag?: string; country?: string };
}) {
  const tag = searchParams?.tag ?? "all";
  const country = searchParams?.country ?? "all";

  const filtered = PARTNERS_EN.filter((p) => {
    const matchTag = tag === "all" ? true : p.tags.includes(tag);
    const matchCountry =
      country === "all" ? true : (p.country ?? "EU") === country;
    return matchTag && matchCountry;
  });

  const activeTagLabel = TAGS_EN.find((t) => t.key === tag)?.label ?? "All";
  const activeCountryLabel =
    COUNTRIES_EU.find((c) => c.key === country)?.label ?? "Europe";

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-sm text-zinc-400">Waypoint · partners</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Partners & resources
          </h1>

          <p className="mt-4 text-zinc-300 max-w-3xl leading-relaxed">
            A curated space for offers that actually help men move forward:
            trips, training, professional support, community. No spam.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {TAGS_EN.map((t) => {
              const active = tag === t.key;

              return (
                <Link
                  key={t.key}
                  href={buildUrl("/en/partners", { tag: t.key, country })}
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

          <div className="mt-3 flex flex-wrap gap-2">
            {COUNTRIES_EU.map((c) => {
              const active = country === c.key;

              return (
                <Link
                  key={c.key}
                  href={buildUrl("/en/partners", { tag, country: c.key })}
                  className={[
                    "rounded-full px-3 py-2 text-sm transition",
                    active
                      ? "bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-400/20"
                      : "bg-zinc-900/40 text-zinc-300 ring-1 ring-zinc-800/70 hover:bg-zinc-800/50",
                  ].join(" ")}
                >
                  {c.label}
                </Link>
              );
            })}
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Active filters:{" "}
            <span className="text-zinc-300">
              {activeTagLabel}
            </span>{" "}
            ·{" "}
            <span className="text-zinc-300">
              {activeCountryLabel}
            </span>
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur"
            >
              <p className="text-xs text-zinc-500">
                {p.name} · {p.region}
                {p.country ? ` · ${p.country}` : ""}
              </p>

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
                    href={buildUrl("/en/partners", { tag: tg, country })}
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
            (trips, training, coaching, legal support, community),
            you’ll be able to join this space. No cheap ads — only useful offers.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=partners"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              Message us →
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
  searchParams?: { tag?: string; country?: string };
}) {
  return (
    <Suspense>
      <PartnersContentEN {...props} />
    </Suspense>
  );
}