import Link from "next/link";
import { Suspense } from "react";
import CitySearch from "../../components/suggestions/CitySearch";


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
  { key: "broken", label: "Rozsypka", hint: "Minimalna stabilizacja + pomoc, jeśli trzeba." },
  { key: "breakup", label: "Rozstanie", hint: "Nie rób destrukcyjnych ruchów. Stabilizuj bazę." },
  { key: "empty", label: "Pustka", hint: "Regeneracja + kontakt z ludźmi + powrót energii." },
  { key: "pressure", label: "Presja", hint: "Uspokój układ nerwowy i wróć na tor." },
  { key: "father", label: "Ojcostwo", hint: "Spokój, obecność, granice. Bez napinki." },
  { key: "ready", label: "Po przejściach, gotowy", hint: "Ruch, ludzie, doświadczenia. Bez gadania." },
];

const CITIES: City[] = [
  { key: "online", label: "Online" },
  { key: "warszawa", label: "Warszawa" },
  { key: "krakow", label: "Kraków" },
  { key: "wroclaw", label: "Wrocław" },
  { key: "poznan", label: "Poznań" },
  { key: "gdansk", label: "Gdańsk" },
  { key: "szczecin", label: "Szczecin" },
  { key: "lodz", label: "Łódź" },
  { key: "katowice", label: "Katowice" },
  { key: "lublin", label: "Lublin" },
  { key: "bialystok", label: "Białystok" },
  { key: "rzeszow", label: "Rzeszów" },
  { key: "olsztyn", label: "Olsztyn" },
  { key: "kielce", label: "Kielce" },
  { key: "opole", label: "Opole" },
  { key: "gorzow", label: "Gorzów Wielkopolski" },
  { key: "zielonagora", label: "Zielona Góra" },
  { key: "torun", label: "Toruń" },
  { key: "bydgoszcz", label: "Bydgoszcz" },
];

const OFFERS: Offer[] = [
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

  {
    id: "breakup-community",
    state: "breakup",
    kind: "community",
    title: "Zamknięte grupy / fora",
    desc: "Nie tłumaczysz się. Ludzie rozumieją. Jest lżej oddychać.",
    href: () => "/partners?tag=community",
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

  {
    id: "ready-trips",
    state: "ready",
    kind: "trips",
    title: "Wyjazdy / aktywności męskie",
    desc: "Ruch + ludzie + nowe środowisko. Bez spiny.",
    href: () => "/partners?tag=trips",
    badge: "Jedno kliknięcie",
  },
];

function Content({ searchParams }: { searchParams?: { state?: string; city?: string } }) {
  const state = (searchParams?.state as StateKey) ?? "broken";
  const city = searchParams?.city ?? "online";

  const stateLabel = STATES.find((s) => s.key === state)?.label ?? "Rozsypka";
  const stateHint = STATES.find((s) => s.key === state)?.hint ?? "";

  const offers = OFFERS.filter((o) => o.state === state);

  const currentCityLabel = CITIES.find((c) => c.key === city)?.label ?? "Online";

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
            cities={CITIES}
            placeholder="Szukaj miasta…"
            tip="Tip: wpisz nazwę miasta (np. Rzeszów)."
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