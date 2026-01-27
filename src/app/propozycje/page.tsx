import Link from "next/link";
import { Suspense } from "react";
import CitySearch from "../../components/suggestions/CitySearch";
import { CITIES_PL } from "../../data/cities-pl";

type StateKey = "broken" | "breakup" | "empty" | "pressure" | "father" | "ready";

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
  { key: "broken", label: "Rozsypka", hint: "Minimalna stabilizacja + pomoc, jeśli trzeba." },
  { key: "breakup", label: "Rozstanie", hint: "Nie rób destrukcyjnych ruchów. Stabilizuj bazę." },
  { key: "empty", label: "Pustka", hint: "Regeneracja + kontakt z ludźmi + powrót energii." },
  { key: "pressure", label: "Presja", hint: "Uspokój układ nerwowy i wróć na tor." },
  { key: "father", label: "Ojcostwo", hint: "Spokój, obecność, granice. Bez napinki." },
  { key: "ready", label: "Po przejściach, gotowy", hint: "Ruch, ludzie, doświadczenia. Bez gadania." },
];

const OFFERS: Offer[] = [
  // ======================
  // ROZSYPKA (max 3)
  // ======================
  {
    id: "broken-psychiatrists",
    state: "broken",
    kind: "psychiatrists",
    title: "Psychiatrzy (wsparcie medyczne)",
    desc: "Gdy jest naprawdę ciężko: sen siada, organizm nie ciągnie, objawy są za duże.",
    href: (city) => `/spec/psychiatrzy?city=${city}`,
    badge: "Priorytet",
  },
  {
    id: "broken-psychologists",
    state: "broken",
    kind: "psychologists",
    title: "Psychologowie (wsparcie)",
    desc: "Rozmowa, uporządkowanie emocji i powrót do minimalnej stabilności.",
    href: (city) => `/spec/psychologowie?city=${city}`,
  },
  {
    id: "broken-navimind",
    state: "broken",
    kind: "navimind",
    title: "Navimind (rozmowa)",
    desc: "Gdy chcesz wyrzucić chaos i złapać kierunek — bez ocen.",
    href: () => "/navimind?state=broken",
    badge: "Szybka ulga",
  },

  // ======================
  // ROZSTANIE (max 4)
  // ======================
  {
    id: "breakup-community",
    state: "breakup",
    kind: "community",
    title: "Zamknięte grupy / fora",
    desc: "Nie tłumaczysz się. Ludzie rozumieją. Jest lżej oddychać.",
    href: (city) => `/spec/grupy?city=${city}`,
  },
  {
    id: "breakup-navimind",
    state: "breakup",
    kind: "navimind",
    title: "Navimind (rozmowa)",
    desc: "Rozładuj emocje po rozstaniu i wróć na tor.",
    href: () => "/navimind?state=breakup",
    badge: "Na teraz",
  },
  {
    id: "breakup-psychologists",
    state: "breakup",
    kind: "psychologists",
    title: "Psychologowie (wsparcie)",
    desc: "Gdy Cię zalewa. Rozmowa może uratować Ci tydzień.",
    href: (city) => `/spec/psychologowie?city=${city}`,
  },
  {
    id: "breakup-psychiatrists",
    state: "breakup",
    kind: "psychiatrists",
    title: "Psychiatrzy (wsparcie)",
    desc: "Jeśli nie śpisz, nie jesz i czujesz, że odpływasz.",
    href: (city) => `/spec/psychiatrzy?city=${city}`,
  },

  // ======================
  // PUSTKA (max 3)
  // ======================
  {
    id: "empty-training",
    state: "empty",
    kind: "training",
    title: "Trening / ruch",
    desc: "Zapal ciało, zanim zrobisz 100 kolejnych analiz w głowie.",
    href: (city) => `/spec/trening?city=${city}`,
    badge: "Reset",
  },
  {
    id: "empty-community",
    state: "empty",
    kind: "community",
    title: "Zamknięte grupy / fora",
    desc: "Najpierw ludzie. Potem reszta. Izolacja karmi pustkę.",
    href: (city) => `/spec/grupy?city=${city}`,
  },
  {
    id: "empty-navimind",
    state: "empty",
    kind: "navimind",
    title: "Navimind (rozmowa)",
    desc: "Gdy czujesz, że nie ma sensu — łapiemy kierunek od zera.",
    href: () => "/navimind?state=empty",
  },

  // ======================
  // PRESJA (max 3)
  // ======================
  {
    id: "pressure-navimind",
    state: "pressure",
    kind: "navimind",
    title: "Navimind (rozmowa)",
    desc: "Uspokój układ nerwowy. Zredukuj chaos. Wróć na tor.",
    href: () => "/navimind?state=pressure",
    badge: "Szybko",
  },
  {
    id: "pressure-training",
    state: "pressure",
    kind: "training",
    title: "Trening / ruch",
    desc: "Zbij napięcie fizycznie. To działa szybciej niż myślisz.",
    href: (city) => `/spec/trening?city=${city}`,
  },
  {
    id: "pressure-psychologists",
    state: "pressure",
    kind: "psychologists",
    title: "Psychologowie (wsparcie)",
    desc: "Jeśli presja Cię mieli, rozmowa robi porządek w głowie.",
    href: (city) => `/spec/psychologowie?city=${city}`,
  },

  // ======================
  // OJCOSTWO (max 3)
  // ======================
  {
    id: "father-law",
    state: "father",
    kind: "law",
    title: "Prawo / mediacje",
    desc: "Kiedy trzeba ogarnąć konkrety i mieć spokój na papierze.",
    href: (city) => `/spec/prawo?city=${city}`,
    badge: "Konkret",
  },
  {
    id: "father-community",
    state: "father",
    kind: "community",
    title: "Zamknięte grupy / fora",
    desc: "Wsparcie od ludzi, którzy ogarniają ojcostwo bez teorii.",
    href: (city) => `/spec/grupy?city=${city}`,
  },
  {
    id: "father-psychologists",
    state: "father",
    kind: "psychologists",
    title: "Psychologowie (wsparcie)",
    desc: "Obecność, spokój, granice. Bez napinki.",
    href: (city) => `/spec/psychologowie?city=${city}`,
  },

  // ======================
  // GOTOWY (max 2)
  // ======================
  {
    id: "ready-trips",
    state: "ready",
    kind: "trips",
    title: "Wyjazdy / aktywności",
    desc: "Ruch + ludzie + nowe środowisko. Bez spiny.",
    href: (city) => `/spec/wyjazdy?city=${city}`,
    badge: "Jedno kliknięcie",
  },
  {
    id: "ready-training",
    state: "ready",
    kind: "training",
    title: "Trening / ruch",
    desc: "Jak jesteś gotowy — ciało robi resztę.",
    href: (city) => `/spec/trening?city=${city}`,
  },
];

function Content({ searchParams }: { searchParams?: { state?: string; city?: string } }) {
  const state = (searchParams?.state as StateKey) ?? "broken";
  const city = searchParams?.city ?? "online";

  const stateLabel = STATES.find((s) => s.key === state)?.label ?? "Rozsypka";
  const stateHint = STATES.find((s) => s.key === state)?.hint ?? "";

  const offers = OFFERS.filter((o) => o.state === state);

  const currentCityLabel = CITIES_PL.find((c) => c.key === city)?.label ?? "Online";

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">Waypoint · propozycje</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Propozycje: {stateLabel}
          </h1>

          <p className="mt-3 text-zinc-300 leading-relaxed">{stateHint}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {STATES.map((s) => {
              const active = s.key === state;

              return (
                <Link
                  key={s.key}
                  href={`/propozycje?state=${s.key}&city=${city}`}
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

          <p className="mt-4 text-xs text-zinc-500">
            Lokalizacja: <span className="text-zinc-300">{currentCityLabel}</span>
          </p>

          <CitySearch
            baseHref="/propozycje"
            state={state}
            city={city}
            cities={CITIES_PL}
            placeholder="Szukaj miasta…"
            tip="Tip: wpisz nazwę miasta (np. Leszno)."
          />
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
                  <h2 className="text-lg font-semibold text-zinc-100">{o.title}</h2>
                  <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{o.desc}</p>
                </div>

                {o.badge ? (
                  <span className="shrink-0 rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-200 ring-1 ring-cyan-400/20">
                    {o.badge}
                  </span>
                ) : null}
              </div>

              <p className="mt-3 text-sm text-cyan-200">Otwórz →</p>
            </Link>
          ))}
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
          >
            ← Wróć do wyboru
          </Link>

          <Link
            href="/partnerstwo"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
          >
            Zgłoś partnera →
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function PropozycjePage(props: { searchParams?: { state?: string; city?: string } }) {
  return (
    <Suspense>
      <Content {...props} />
    </Suspense>
  );
}