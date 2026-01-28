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

const OFFERS: Offer[] = [
  // ======================
  // ROZSTANIE
  // ======================
  {
    id: "breakup-navimind",
    state: "breakup",
    title: "Navimind (wygadaj się)",
    desc: "Wyrzuć chaos i wróć do steru. Bez ocen.",
    href: "/navimind?state=breakup",
    badge: "Najpierw",
  },
  {
    id: "breakup-community",
    state: "breakup",
    title: "Zamknięte grupy / fora",
    desc: "Ludzie, którzy rozumieją. Bez tłumaczeń.",
    href: "/spec/grupy",
  },
  {
    id: "breakup-training",
    state: "breakup",
    title: "Trening / sport",
    desc: "Wyłącz pętlę w głowie przez ciało.",
    href: "/spec/trening",
    badge: "Reset",
  },
  {
    id: "breakup-trips",
    state: "breakup",
    title: "Wyjazdy / outdoor",
    desc: "Zmiana środowiska często działa lepiej niż analiza.",
    href: "/spec/wyjazdy",
  },
  {
    id: "breakup-nightlife",
    state: "breakup",
    title: "Kluby / bary / imprezy",
    desc: "Nie ucieczka. Kontakt z ludźmi i powrót do życia.",
    href: "/partners?tag=nightlife",
    badge: "Opcja",
  },
  {
    id: "breakup-psychologists",
    state: "breakup",
    title: "Psycholog (opcjonalnie)",
    desc: "Jeśli zalewa — rozmowa daje strukturę.",
    href: "/spec/psychologowie",
  },

  // ======================
  // ROZWÓD (konkret)
  // ======================
  {
    id: "divorce-law",
    state: "divorce",
    title: "Pomoc prawna (priorytet)",
    desc: "Kontakty, alimenty, majątek, mediacje. Papier daje spokój.",
    href: "/spec/prawo",
    badge: "Konkret",
  },
  {
    id: "divorce-psychologists",
    state: "divorce",
    title: "Psycholog (emocje + stabilizacja)",
    desc: "Rozwód mieli głowę. Tu układamy plan i spokój.",
    href: "/spec/psychologowie",
  },
  {
    id: "divorce-psychiatrists",
    state: "divorce",
    title: "Psychiatra (gdy nie śpisz / jedziesz na oparach)",
    desc: "To wsparcie medyczne, nie etykieta.",
    href: "/spec/psychiatrzy",
    badge: "Priorytet",
  },
  {
    id: "divorce-community",
    state: "divorce",
    title: "Grupy wsparcia (faceci po rozwodzie)",
    desc: "Bez tłumaczeń. Ludzie, którzy byli w tym samym.",
    href: "/spec/grupy",
  },

  // ======================
  // OJCOSTWO (bez klubów)
  // ======================
  {
    id: "father-law",
    state: "father",
    title: "Prawo / ustalenia / mediacje",
    desc: "Zasady, granice, kontakty. Mniej wojny, więcej spokoju.",
    href: "/spec/prawo",
    badge: "Konkret",
  },
  {
    id: "father-community",
    state: "father",
    title: "Grupy ojców / wsparcie",
    desc: "Wiedza praktyczna + mniej samotności.",
    href: "/spec/grupy",
  },
  {
    id: "father-psychologists",
    state: "father",
    title: "Psycholog (wsparcie)",
    desc: "Pomaga nie przenosić napięcia na dziecko.",
    href: "/spec/psychologowie",
  },
  {
    id: "father-navimind",
    state: "father",
    title: "Navimind (spokój + kierunek)",
    desc: "Gdy czujesz chaos — wracamy do steru.",
    href: "/navimind?state=father",
  },

  // ======================
  // PRESJA (bez klubów)
  // ======================
  {
    id: "pressure-navimind",
    state: "pressure",
    title: "Navimind (uspokojenie + kierunek)",
    desc: "Najpierw regulacja. Potem decyzje.",
    href: "/navimind?state=pressure",
    badge: "Szybko",
  },
  {
    id: "pressure-training",
    state: "pressure",
    title: "Trening / sport",
    desc: "Zbij napięcie fizycznie. Działa szybciej niż analiza.",
    href: "/spec/trening",
  },
  {
    id: "pressure-community",
    state: "pressure",
    title: "Grupy / kontakt z ludźmi",
    desc: "Presja maleje, gdy nie jesteś z tym sam.",
    href: "/spec/grupy",
  },

  // ======================
  // WYPALENIE / PUSTKA
  // ======================
  {
    id: "empty-sleep",
    state: "empty",
    title: "Reset snu",
    desc: "Sen to fundament energii.",
    href: "/tools/sleep-reset",
    badge: "Baza",
  },
  {
    id: "empty-training",
    state: "empty",
    title: "Trening (lekko)",
    desc: "Minimum ruchu. Maksimum efektu.",
    href: "/spec/trening",
  },
  {
    id: "empty-community",
    state: "empty",
    title: "Grupy / ludzie",
    desc: "Izolacja karmi pustkę. Ludzie ją osłabiają.",
    href: "/spec/grupy",
  },
  {
    id: "empty-psychologists",
    state: "empty",
    title: "Psycholog (opcjonalnie)",
    desc: "Jeśli utknąłeś — rozmowa pomaga ruszyć.",
    href: "/spec/psychologowie",
  },

  // ======================
  // GOTOWY (nightlife OK)
  // ======================
  {
    id: "ready-trips",
    state: "ready",
    title: "Wyjazdy / outdoor",
    desc: "Nowe środowisko. Nowi ludzie. Reset głowy.",
    href: "/spec/wyjazdy",
    badge: "Start",
  },
  {
    id: "ready-training",
    state: "ready",
    title: "Trening / sport",
    desc: "Forma to powtarzalność, nie motywacja.",
    href: "/spec/trening",
  },
  {
    id: "ready-nightlife",
    state: "ready",
    title: "Kluby / bary / imprezy",
    desc: "Wyjście do ludzi. Bez spiny — kontakt i ruch.",
    href: "/partners?tag=nightlife",
    badge: "Wkrótce",
  },

  // ======================
  // ROZSYPKA (bez klubów)
  // ======================
  {
    id: "broken-navimind",
    state: "broken",
    title: "Navimind (pierwsza pomoc)",
    desc: "Zatrzymaj chaos i złap oddech.",
    href: "/navimind?state=broken",
    badge: "Najpierw",
  },
  {
    id: "broken-psychologists",
    state: "broken",
    title: "Psycholog (wsparcie)",
    desc: "Uporządkowanie emocji i powrót do stabilności.",
    href: "/spec/psychologowie",
  },
  {
    id: "broken-psychiatrists",
    state: "broken",
    title: "Psychiatra (medycznie)",
    desc: "Gdy sen siada i organizm nie ciągnie.",
    href: "/spec/psychiatrzy",
    badge: "Priorytet",
  },

  // ======================
  // KRYZYS W ZWIĄZKU
  // ======================
  {
    id: "relationship-navimind",
    state: "relationship",
    title: "Navimind (komunikacja + granice)",
    desc: "Zatrzymaj eskalację i wróć do rozmowy.",
    href: "/navimind?state=relationship",
    badge: "Na teraz",
  },
  {
    id: "relationship-psychologists",
    state: "relationship",
    title: "Psycholog (wsparcie)",
    desc: "Neutralna rozmowa i plan — bez dramy.",
    href: "/spec/psychologowie",
  },
  {
    id: "relationship-community",
    state: "relationship",
    title: "Grupy / fora",
    desc: "Kontakt z ludźmi, którzy rozumieją schematy.",
    href: "/spec/grupy",
  },
];

function Content({ searchParams }: { searchParams?: { state?: string } }) {
  const state = (searchParams?.state as StateKey) ?? "breakup";
  const offers = OFFERS.filter((o) => o.state === state);

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-base text-zinc-300">MenMind · propozycje</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Propozycje
          </h1>
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

              <p className="mt-3 text-sm text-cyan-200">Otwórz →</p>
            </Link>
          ))}
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
          >
            ← Wróć
          </Link>

          <Link
            href="/partners"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-900/40 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-800/70 hover:bg-zinc-800/50 transition"
          >
            Zobacz wszystkie zasoby →
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