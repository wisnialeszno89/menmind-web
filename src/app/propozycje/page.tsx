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
  { key: "broken", label: "Rozsypka", hint: "Minimalna stabilizacja + pomoc, jeśli trzeba." },
  { key: "breakup", label: "Rozstanie", hint: "Nie rób destrukcyjnych ruchów. Stabilizuj bazę." },
  { key: "empty", label: "Pustka", hint: "Regeneracja + kontakt z ludźmi + powrót energii." },
  { key: "pressure", label: "Presja", hint: "Uspokój układ nerwowy i wróć na tor." },
  { key: "father", label: "Ojcostwo", hint: "Spokój, obecność, granice. Bez napinki." },
  { key: "ready", label: "Po przejściach, gotowy", hint: "Ruch, ludzie, doświadczenia. Bez gadania." },
];

// ✅ Miasta: wojewódzkie + “duże” (rozsądny start)
// Jeśli chcesz full “>50k wszystkie” to dołożymy jako krok 2, ale UX będzie wymagał wyszukiwarki (już jest).
const CITIES: City[] = [
  { key: "online", label: "Online" },

  // Wojewódzkie
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

  // Duże miasta (bonus)
  { key: "gdynia", label: "Gdynia" },
  { key: "sopot", label: "Sopot" },
  { key: "gliwice", label: "Gliwice" },
  { key: "zabrze", label: "Zabrze" },
  { key: "bielsko", label: "Bielsko-Biała" },
  { key: "czestochowa", label: "Częstochowa" },
  { key: "radom", label: "Radom" },
  { key: "plock", label: "Płock" },
  { key: "siedlce", label: "Siedlce" },
  { key: "tarnow", label: "Tarnów" },
  { key: "nowysacz", label: "Nowy Sącz" },
  { key: "elblag", label: "Elbląg" },
  { key: "slupsk", label: "Słupsk" },
  { key: "koszalin", label: "Koszalin" },
  { key: "legnica", label: "Legnica" },
  { key: "walbrzych", label: "Wałbrzych" },
  { key: "jeleniagora", label: "Jelenia Góra" },
  { key: "piotrkow", label: "Piotrków Trybunalski" },
  { key: "suwalki", label: "Suwałki" },
];

const OFFERS: Offer[] = [
  // BROKEN
  {
    id: "broken-psychiatrists",
    state: "broken",
    kind: "psychiatrists",
    title: "Psychiatrzy (wsparcie medyczne)",
    desc: "Gdy jest naprawdę ciężko: sen siada, organizm nie ciągnie, objawy są za duże.",
    href: "/partners?tag=psychiatrists",
    badge: "Priorytet",
  },
  {
    id: "broken-psychologists",
    state: "broken",
    kind: "psychologists",
    title: "Psychologowie (wsparcie)",
    desc: "Rozmowa, uporządkowanie emocji i powrót do minimalnej stabilności.",
    href: "/partners?tag=psychologists",
  },
  {
    id: "broken-navimind",
    state: "broken",
    kind: "navimind",
    title: "Navimind (rozmowa)",
    desc: "Gdy chcesz wyrzucić chaos i złapać kierunek — bez ocen.",
    href: "/navimind?state=broken",
    badge: "Szybka ulga",
  },

  // BREAKUP
  {
    id: "breakup-community",
    state: "breakup",
    kind: "community",
    title: "Zamknięte grupy / fora",
    desc: "Nie tłumaczysz się. Ludzie rozumieją. Jest lżej oddychać.",
    href: "/partners?tag=community",
  },
  {
    id: "breakup-navimind",
    state: "breakup",
    kind: "navimind",
    title: "Navimind (rozmowa)",
    desc: "Rozładuj emocje po rozstaniu i wróć na tor.",
    href: "/navimind?state=breakup",
    badge: "Na teraz",
  },
  {
    id: "breakup-psychologists",
    state: "breakup",
    kind: "psychologists",
    title: "Psychologowie (wsparcie)",
    desc: "Gdy Cię zalewa. Rozmowa może uratować Ci tydzień.",
    href: "/partners?tag=psychologists",
  },
  {
    id: "breakup-psychiatrists",
    state: "breakup",
    kind: "psychiatrists",
    title: "Psychiatrzy (wsparcie)",
    desc: "Jeśli nie śpisz, nie jesz i czujesz, że odpływasz.",
    href: "/partners?tag=psychiatrists",
  },

  // EMPTY
  {
    id: "empty-training",
    state: "empty",
    kind: "training",
    title: "Ruch / trening",
    desc: "Nie dla formy. Dla energii i powrotu do siebie.",
    href: "/partners?tag=training",
    badge: "Najlepszy start",
  },
  {
    id: "empty-community",
    state: "empty",
    kind: "community",
    title: "Grupy / fora",
    desc: "Pustka maleje, kiedy nie jesteś w tym sam.",
    href: "/partners?tag=community",
  },
  {
    id: "empty-navimind",
    state: "empty",
    kind: "navimind",
    title: "Navimind (rozmowa)",
    desc: "Gdy czujesz, że stoisz w miejscu i nie masz wytłumaczenia.",
    href: "/navimind?state=empty",
  },

  // PRESSURE
  {
    id: "pressure-psychologists",
    state: "pressure",
    kind: "psychologists",
    title: "Psychologowie (wsparcie)",
    desc: "Gdy presja Cię ściska i tracisz kierunek.",
    href: "/partners?tag=psychologists",
  },
  {
    id: "pressure-training",
    state: "pressure",
    kind: "training",
    title: "Ruch / trening",
    desc: "Z ciała schodzi napięcie szybciej niż z głowy.",
    href: "/partners?tag=training",
  },
  {
    id: "pressure-navimind",
    state: "pressure",
    kind: "navimind",
    title: "Navimind (rozmowa)",
    desc: "Rozładuj emocje i wróć do konkretu.",
    href: "/navimind?state=pressure",
    badge: "Tu i teraz",
  },

  // FATHER
  {
    id: "father-law",
    state: "father",
    kind: "law",
    title: "Prawnicy / mediacje",
    desc: "Gdy trzeba ustalić zasady, kontakty i granice — bez wojny.",
    href: "/partners?tag=law",
  },
  {
    id: "father-community",
    state: "father",
    kind: "community",
    title: "Społeczność ojców / grupy",
    desc: "Wymiana doświadczeń, bez oceniania.",
    href: "/partners?tag=community",
  },
  {
    id: "father-psychologists",
    state: "father",
    kind: "psychologists",
    title: "Psychologowie (wsparcie)",
    desc: "Gdy napięcie przenosisz na dom i chcesz to zatrzymać.",
    href: "/partners?tag=psychologists",
  },

  // READY
  {
    id: "ready-trips",
    state: "ready",
    kind: "trips",
    title: "Wyjazdy / aktywności męskie",
    desc: "Ruch + ludzie + nowe środowisko. Bez spiny.",
    href: "/partners?tag=trips",
    badge: "Jedno kliknięcie",
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

  const stateLabel = STATES.find((s) => s.key === state)?.label ?? "Rozsypka";
  const stateHint = STATES.find((s) => s.key === state)?.hint ?? "";

  const cityOptions = CITIES.filter((c) => c.label.toLowerCase().includes(q));

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

          <section className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-4">
            <p className="text-xs text-zinc-500 mb-2">
              Lokalizacja: <span className="text-zinc-300">{currentCityLabel}</span>
            </p>

            <div className="flex flex-col gap-3">
              <input
                defaultValue={searchParams?.q ?? ""}
                placeholder="Szukaj miasta…"
                className="w-full rounded-xl border border-zinc-800/70 bg-zinc-950/30 px-4 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-cyan-500/20"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const value = (e.target as HTMLInputElement).value;
                    const url = `/propozycje?state=${state}&city=${city}&q=${encodeURIComponent(value)}`;
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
                      href={`/propozycje?state=${state}&city=${c.key}`}
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
                Tip: wpisz nazwę miasta i wciśnij Enter.
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
  searchParams?: { state?: string; city?: string; q?: string };
}) {
  return (
    <Suspense>
      <SuggestionsContent {...props} />
    </Suspense>
  );
}