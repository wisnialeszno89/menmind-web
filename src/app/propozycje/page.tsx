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
  kind:
    | "psychologists"
    | "psychiatrists"
    | "community"
    | "training"
    | "trips"
    | "law"
    | "places"
    | "nightlife"
    | "navimind";
  title: string;
  desc: string;
  href: () => string;
  badge?: string;
};

const STATES: {
  key: StateKey;
  label: string;
}[] = [
  { key: "breakup", label: "Rozstanie" },
  { key: "divorce", label: "Rozwód" },
  { key: "relationship", label: "Kryzys w związku" },
  { key: "pressure", label: "Presja" },
  { key: "empty", label: "Wypalenie / pustka" },
  { key: "father", label: "Ojcostwo" },
  { key: "ready", label: "Po przejściach, gotowy" },
  { key: "broken", label: "Rozsypka" },
];

const OFFERS: Offer[] = [
  // =========================================
  // ROZSTANIE
  // =========================================
  {
    id: "breakup-navimind",
    state: "breakup",
    kind: "navimind",
    title: "Navimind (wygadaj się)",
    desc: "Wyrzuć chaos, ustaw kierunek, bez ocen.",
    href: () => "/navimind?state=breakup",
    badge: "Najpierw",
  },
  {
    id: "breakup-community",
    state: "breakup",
    kind: "community",
    title: "Zamknięte grupy / fora",
    desc: "Ludzie, którzy rozumieją. Bez tłumaczeń i wstydu.",
    href: () => "/spec/grupy",
  },
  {
    id: "breakup-training",
    state: "breakup",
    kind: "training",
    title: "Trening / sport",
    desc: "Wyłącz pętlę w głowie przez ciało. Proste i skuteczne.",
    href: () => "/spec/trening",
    badge: "Reset",
  },
  {
    id: "breakup-trips",
    state: "breakup",
    kind: "trips",
    title: "Wyjazdy / outdoor / zmiana środowiska",
    desc: "Czasem najlepszą terapią jest inne powietrze i nowy rytm.",
    href: () => "/spec/wyjazdy",
  },
  {
    id: "breakup-nightlife",
    state: "breakup",
    kind: "nightlife",
    title: "Kluby / bary / imprezy",
    desc: "Nie po to, żeby uciekać. Po to, żeby wrócić do życia i ludzi.",
    href: () => "/partners?tag=nightlife",
    badge: "Opcja",
  },
  {
    id: "breakup-psychologists",
    state: "breakup",
    kind: "psychologists",
    title: "Psychologowie (opcjonalnie)",
    desc: "Jeśli zalewa i nie możesz stanąć na nogi — rozmowa daje strukturę.",
    href: () => "/spec/psychologowie",
  },
  {
    id: "breakup-psychiatrists",
    state: "breakup",
    kind: "psychiatrists",
    title: "Psychiatrzy (jeśli naprawdę ciężko)",
    desc: "Gdy sen siada, organizm nie ciągnie, objawy są za duże.",
    href: () => "/spec/psychiatrzy",
    badge: "Priorytet",
  },
  {
    id: "breakup-law",
    state: "breakup",
    kind: "law",
    title: "Prawo / mediacje (jeśli trzeba)",
    desc: "Dziecko / majątek / konflikt. Papier czasem daje spokój.",
    href: () => "/spec/prawo",
  },

  // =========================================
  // ROZWÓD
  // =========================================
  {
    id: "divorce-law",
    state: "divorce",
    kind: "law",
    title: "Pomoc prawna (rozwód / alimenty / kontakty)",
    desc: "Prawnicy, mediacje, przygotowanie do sprawy i ochrona Twoich interesów.",
    href: () => "/spec/prawo",
    badge: "Konkret",
  },
  {
    id: "divorce-community",
    state: "divorce",
    kind: "community",
    title: "Grupy wsparcia dla facetów po rozwodzie",
    desc: "Bez tłumaczenia się. Ludzie, którzy wiedzą jak to wygląda od środka.",
    href: () => "/spec/grupy",
  },
  {
    id: "divorce-psychologists",
    state: "divorce",
    kind: "psychologists",
    title: "Psycholog (emocje + stabilizacja)",
    desc: "Jeśli czujesz, że Cię mieli — rozmowa daje strukturę i plan działania.",
    href: () => "/spec/psychologowie",
  },
  {
    id: "divorce-psychiatrists",
    state: "divorce",
    kind: "psychiatrists",
    title: "Psychiatra (gdy nie śpisz / jedziesz na oparach)",
    desc: "Gdy organizm siada. To medyczne wsparcie, nie etykieta.",
    href: () => "/spec/psychiatrzy",
    badge: "Priorytet",
  },

  // =========================================
  // KRYZYS W ZWIĄZKU
  // =========================================
  {
    id: "relationship-navimind",
    state: "relationship",
    kind: "navimind",
    title: "Navimind (rozmowa + granice)",
    desc: "Gdy ciągle się kłócicie. Zatrzymujemy eskalację i ustawiamy komunikację.",
    href: () => "/navimind?state=relationship",
    badge: "Na teraz",
  },
  {
    id: "relationship-community",
    state: "relationship",
    kind: "community",
    title: "Zamknięte grupy / fora",
    desc: "Kontakt z ludźmi, którzy nie dorzucają wstydu, tylko doświadczenie.",
    href: () => "/spec/grupy",
  },
  {
    id: "relationship-psychologists",
    state: "relationship",
    kind: "psychologists",
    title: "Psychologowie (wsparcie)",
    desc: "Neutralna rozmowa i plan. Bez dramy, bez przeciągania liny.",
    href: () => "/spec/psychologowie",
  },

  // =========================================
  // PRESJA
  // =========================================
  {
    id: "pressure-navimind",
    state: "pressure",
    kind: "navimind",
    title: "Navimind (uspokojenie + kierunek)",
    desc: "Uspokój układ nerwowy i wróć do steru. Bez przeciążeń.",
    href: () => "/navimind?state=pressure",
    badge: "Szybko",
  },
  {
    id: "pressure-training",
    state: "pressure",
    kind: "training",
    title: "Trening / sport",
    desc: "Zbij napięcie fizycznie. Działa szybciej niż analiza.",
    href: () => "/spec/trening",
  },
  {
    id: "pressure-community",
    state: "pressure",
    kind: "community",
    title: "Grupy wsparcia / fora",
    desc: "Nie musisz być sam z presją. Czasem jedno zdanie od kogoś wystarczy.",
    href: () => "/spec/grupy",
  },

  // =========================================
  // WYPALENIE / PUSTKA
  // =========================================
  {
    id: "empty-training",
    state: "empty",
    kind: "training",
    title: "Trening / sport (lekko)",
    desc: "Minimalny ruch. Minimum bodźców. Maksimum efektu.",
    href: () => "/spec/trening",
    badge: "Baza",
  },
  {
    id: "empty-trips",
    state: "empty",
    kind: "trips",
    title: "Wyjazdy / zmiana środowiska",
    desc: "Wypalenie często leczy się zmianą rytmu i otoczenia.",
    href: () => "/spec/wyjazdy",
  },
  {
    id: "empty-community",
    state: "empty",
    kind: "community",
    title: "Grupy wsparcia / ludzie",
    desc: "Izolacja karmi pustkę. Ludzie ją osłabiają.",
    href: () => "/spec/grupy",
  },
  {
    id: "empty-navimind",
    state: "empty",
    kind: "navimind",
    title: "Navimind (rozmowa)",
    desc: "Gdy czujesz, że nie ma sensu — łapiemy kierunek od zera.",
    href: () => "/navimind?state=empty",
  },
  {
    id: "empty-psychologists",
    state: "empty",
    kind: "psychologists",
    title: "Psychologowie (opcjonalnie)",
    desc: "Jeśli utknąłeś na długo — rozmowa potrafi wyciągnąć z bagna.",
    href: () => "/spec/psychologowie",
  },

  // =========================================
  // OJCOSTWO
  // =========================================
  {
    id: "father-law",
    state: "father",
    kind: "law",
    title: "Prawo / mediacje",
    desc: "Ustal zasady i granice. Dokumenty czasem chronią spokój.",
    href: () => "/spec/prawo",
    badge: "Konkret",
  },
  {
    id: "father-community",
    state: "father",
    kind: "community",
    title: "Grupy ojców / wsparcie",
    desc: "Wsparcie od ludzi, którzy ogarniają ojcostwo bez teorii i ocen.",
    href: () => "/spec/grupy",
  },
  {
    id: "father-navimind",
    state: "father",
    kind: "navimind",
    title: "Navimind (spokój + kierunek)",
    desc: "Jak czujesz chaos — wracamy do spokoju, decyzji i granic.",
    href: () => "/navimind?state=father",
  },

  // =========================================
  // GOTOWY
  // =========================================
  {
    id: "ready-trips",
    state: "ready",
    kind: "trips",
    title: "Wyjazdy / outdoor / męskie aktywności",
    desc: "Nowe środowisko. Nowi ludzie. Reset głowy i energia.",
    href: () => "/spec/wyjazdy",
    badge: "Start",
  },
  {
    id: "ready-training",
    state: "ready",
    kind: "training",
    title: "Trening / sport",
    desc: "Forma to nie motywacja — forma to powtarzalność.",
    href: () => "/spec/trening",
  },
  {
    id: "ready-nightlife",
    state: "ready",
    kind: "nightlife",
    title: "Kluby / bary / imprezy",
    desc: "Wyjście do ludzi i nowe środowisko. Bez spiny — po prostu ruch i kontakt.",
    href: () => "/partners?tag=nightlife",
    badge: "Wkrótce",
  },
  {
    id: "ready-places",
    state: "ready",
    kind: "places",
    title: "Miejsca / spotkania / nowe środowisko",
    desc: "Kluby, restauracje, miejsca publiczne — wkrótce dodamy polecane opcje.",
    href: () => "/partners?tag=community",
    badge: "Wkrótce",
  },

  // =========================================
  // ROZSYPKA
  // =========================================
  {
    id: "broken-navimind",
    state: "broken",
    kind: "navimind",
    title: "Navimind (pierwsza pomoc)",
    desc: "Zatrzymaj chaos i złap oddech. Bez ocen.",
    href: () => "/navimind?state=broken",
    badge: "Najpierw",
  },
  {
    id: "broken-psychologists",
    state: "broken",
    kind: "psychologists",
    title: "Psychologowie (wsparcie)",
    desc: "Rozmowa, uporządkowanie emocji i powrót do minimalnej stabilności.",
    href: () => "/spec/psychologowie",
  },
  {
    id: "broken-psychiatrists",
    state: "broken",
    kind: "psychiatrists",
    title: "Psychiatrzy (wsparcie medyczne)",
    desc: "Gdy jest naprawdę ciężko: sen siada, organizm nie ciągnie.",
    href: () => "/spec/psychiatrzy",
    badge: "Priorytet",
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
          <p className="text-base text-zinc-300">MenMind · propozycje</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Propozycje
          </h1>

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