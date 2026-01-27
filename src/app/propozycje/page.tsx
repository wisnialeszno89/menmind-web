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
  {
    key: "broken",
    label: "Rozsypka",
    hint: "Minimalna stabilizacja + pomoc, jeśli trzeba.",
  },
  {
    key: "breakup",
    label: "Rozstanie",
    hint: "Nie zakładamy Twojego stanu. Pokażemy wszystkie sensowne opcje.",
  },
  {
    key: "relationship",
    label: "Problem w związku",
    hint: "Kłótnie i napięcie. Najpierw rozmowa i zatrzymanie eskalacji.",
  },
  {
    key: "empty",
    label: "Pustka",
    hint: "Regeneracja + kontakt z ludźmi + powrót energii.",
  },
  {
    key: "pressure",
    label: "Presja",
    hint: "Uspokój układ nerwowy i wróć na tor.",
  },
  {
    key: "father",
    label: "Ojcostwo",
    hint: "Spokój, obecność, granice. Konkrety bez chaosu.",
  },
  {
    key: "ready",
    label: "Gotowy",
    hint: "Ruch, środowisko i męskie aktywności. Bez gadania.",
  },
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
    desc: "Gdy objawy są za duże: sen siada, organizm nie ciągnie, jest za ciężko.",
    href: () => `/spec/psychiatrzy`,
    badge: "Priorytet",
  },
  {
    id: "broken-psychologists",
    state: "broken",
    kind: "psychologists",
    title: "Psychologowie (wsparcie)",
    desc: "Rozmowa, uporządkowanie emocji i powrót do minimalnej stabilności.",
    href: () => `/spec/psychologowie`,
  },
  {
    id: "broken-navimind",
    state: "broken",
    kind: "navimind",
    title: "Navimind (rozmowa)",
    desc: "Jeśli chcesz wyrzucić chaos i złapać kierunek — bez ocen.",
    href: () => "/navimind?state=broken",
    badge: "Na teraz",
  },

  // ======================
  // ROZSTANIE (ALL)
  // ======================
  {
    id: "breakup-navimind",
    state: "breakup",
    kind: "navimind",
    title: "Navimind (rozmowa)",
    desc: "Uspokój emocje i złap kierunek po rozstaniu.",
    href: () => "/navimind?state=breakup",
    badge: "Start",
  },
  {
    id: "breakup-psychologists",
    state: "breakup",
    kind: "psychologists",
    title: "Psychologowie (wsparcie)",
    desc: "Gdy Cię zalewa, wraca tęsknota albo masz chaos w głowie.",
    href: () => `/spec/psychologowie`,
  },
  {
    id: "breakup-psychiatrists",
    state: "breakup",
    kind: "psychiatrists",
    title: "Psychiatrzy (wsparcie medyczne)",
    desc: "Jeśli nie śpisz, nie jesz i czujesz, że odpływasz.",
    href: () => `/spec/psychiatrzy`,
  },
  {
    id: "breakup-community",
    state: "breakup",
    kind: "community",
    title: "Zamknięte grupy / fora",
    desc: "Ludzie rozumieją. Jest lżej oddychać. Mniej izolacji.",
    href: () => `/spec/grupy`,
  },
  {
    id: "breakup-training",
    state: "breakup",
    kind: "training",
    title: "Trening / sport",
    desc: "Wyrównaj napięcie ciałem. Ruch stabilizuje głowę.",
    href: () => `/spec/trening`,
  },
  {
    id: "breakup-trips",
    state: "breakup",
    kind: "trips",
    title: "Męskie wyjazdy: reset + outdoor",
    desc: "Zmiana środowiska i struktura. Bez udawania, bez gadania.",
    href: () => `/spec/wyjazdy`,
  },
  {
    id: "breakup-law",
    state: "breakup",
    kind: "law",
    title: "Pomoc prawna (gdy wchodzą ustalenia)",
    desc: "Jeśli sprawy idą w stronę formalności, ochrony i granic.",
    href: () => `/spec/prawo`,
  },

  // ======================
  // PROBLEM W ZWIĄZKU (max 2)
  // ======================
  {
    id: "relationship-navimind",
    state: "relationship",
    kind: "navimind",
    title: "Navimind (rozmowa)",
    desc: "Zatrzymujemy eskalację. Ustawiamy komunikację i granice.",
    href: () => "/navimind?state=relationship",
    badge: "Najpierw",
  },
  {
    id: "relationship-psychologists",
    state: "relationship",
    kind: "psychologists",
    title: "Psychologowie (wsparcie)",
    desc: "Gdy napięcie trwa długo i wracacie w kółko do tego samego.",
    href: () => `/spec/psychologowie`,
  },

  // ======================
  // PUSTKA (max 3)
  // ======================
  {
    id: "empty-training",
    state: "empty",
    kind: "training",
    title: "Trening / sport",
    desc: "Zapal ciało, zanim zrobisz kolejne 100 analiz w głowie.",
    href: () => `/spec/trening`,
    badge: "Reset",
  },
  {
    id: "empty-community",
    state: "empty",
    kind: "community",
    title: "Zamknięte grupy / fora",
    desc: "Ludzie najpierw. Izolacja karmi pustkę.",
    href: () => `/spec/grupy`,
  },
  {
    id: "empty-navimind",
    state: "empty",
    kind: "navimind",
    title: "Navimind (rozmowa)",
    desc: "Jeśli nie czujesz sensu — łapiemy kierunek od zera.",
    href: () => "/navimind?state=empty",
  },

  // ======================
  // PRESJA (max 2-3) — BEZ psychiatrii / prawa
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
    title: "Trening / sport",
    desc: "Zbij napięcie fizycznie. Działa szybciej niż myślisz.",
    href: () => `/spec/trening`,
  },
  {
    id: "pressure-psychologists",
    state: "pressure",
    kind: "psychologists",
    title: "Psychologowie (wsparcie)",
    desc: "Gdy presja mieli głowę — rozmowa i plan robią robotę.",
    href: () => `/spec/psychologowie`,
  },

  // ======================
  // OJCOSTWO (3) — konkret + czat
  // ======================
  {
    id: "father-navimind",
    state: "father",
    kind: "navimind",
    title: "Navimind (rozmowa)",
    desc: "Dziś ustawiamy jedną granicę i jeden kolejny krok.",
    href: () => "/navimind?state=father",
    badge: "Konkret",
  },
  {
    id: "father-law",
    state: "father",
    kind: "law",
    title: "Pomoc prawna / mediacje",
    desc: "Gdy trzeba ogarnąć ustalenia i mieć spokój na papierze.",
    href: () => `/spec/prawo`,
  },
  {
    id: "father-psychologists",
    state: "father",
    kind: "psychologists",
    title: "Psychologowie (wsparcie)",
    desc: "Emocje, komunikacja i spokój. Bez napinki.",
    href: () => `/spec/psychologowie`,
  },

  // ======================
  // GOTOWY (max 3) — MĘSKIE aktywności
  // ======================
  {
    id: "ready-trips",
    state: "ready",
    kind: "trips",
    title: "Męskie wyjazdy: reset + outdoor",
    desc: "Ruch + ludzie + nowe środowisko. Bez udawania.",
    href: () => `/spec/wyjazdy`,
    badge: "Top",
  },
  {
    id: "ready-community",
    state: "ready",
    kind: "community",
    title: "Zamknięte grupy / fora",
    desc: "Ekipa, środowisko, kontakt. Bez tłumaczenia się.",
    href: () => `/spec/grupy`,
  },
  {
    id: "ready-activities",
    state: "ready",
    kind: "activities",
    title: "Inne aktywności (lista)",
    desc: "Sport, outdoor, struktura dnia. Proste rzeczy, które stabilizują.",
    href: () => `/spec/wyjazdy`,
  },
];

function Content({ searchParams }: { searchParams?: { state?: string } }) {
  const state = (searchParams?.state as StateKey) ?? "broken";

  const stateLabel = STATES.find((s) => s.key === state)?.label ?? "Rozsypka";
  const stateHint = STATES.find((s) => s.key === state)?.hint ?? "";
  const offers = OFFERS.filter((o) => o.state === state);

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-base text-zinc-300">MenMind · propozycje</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Propozycje: {stateLabel}
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
                  href={`/propozycje?state=${s.key}`}
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
            Tryb: <span className="text-zinc-200 font-medium">Online</span>
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

export default function PropozycjePage(props: {
  searchParams?: { state?: string };
}) {
  return (
    <Suspense>
      <Content {...props} />
    </Suspense>
  );
}