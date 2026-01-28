import Link from "next/link";

type Proposal = {
  id: string;
  title: string;
  desc: string;
  href?: string;
  comingSoon?: boolean;
};

const PROPOSALS: Proposal[] = [
  {
    id: "navimind",
    title: "Navimind – rozmowa 1:1",
    desc: "Rozmowa bez ocen. Porządkowanie chaosu i odzyskanie kierunku.",
    href: "/navimind",
  },
  {
    id: "psychologists",
    title: "Psychologowie",
    desc: "Rozmowa, stabilizacja, klarowność. Gdy emocje biorą górę.",
    comingSoon: true,
  },
  {
    id: "psychiatrists",
    title: "Psychiatrzy",
    desc: "Wsparcie medyczne przy bezsenności, silnym napięciu i objawach.",
    comingSoon: true,
  },
  {
    id: "law",
    title: "Prawo / mediacje",
    desc: "Rozwód, ojcostwo, ustalenia, alimenty, kontakty. Konkret.",
    comingSoon: true,
  },
  {
    id: "groups",
    title: "Grupy wsparcia",
    desc: "Zamknięte grupy mężczyzn. Bez tłumaczeń, bez ocen.",
    comingSoon: true,
  },
  {
    id: "training",
    title: "Trening / sport",
    desc: "Regulacja napięcia przez ciało. Najprostszy reset głowy.",
    comingSoon: true,
  },
  {
    id: "trips",
    title: "Wyjazdy / outdoor",
    desc: "Zmiana środowiska. Ruch. Ludzie. Natura.",
    comingSoon: true,
  },
  {
    id: "nightlife",
    title: "Kluby / bary / imprezy",
    desc: "Opcja społeczna. Wyjście do ludzi, kontakt, wydarzenia.",
    comingSoon: true,
  },
];

export default function PropozycjePage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10">
          <p className="text-sm text-zinc-400">MenMind · propozycje</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Propozycje
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Pełna lista dostępnych kierunków i narzędzi.  
            To mapa możliwości — wybierasz to, co ma sens teraz.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-4">
          {PROPOSALS.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur"
            >
              <h2 className="text-lg font-semibold text-zinc-100">
                {p.title}
              </h2>

              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-5 flex items-center justify-between">
                {p.href ? (
                  <Link
                    href={p.href}
                    className="text-sm font-medium text-cyan-200 hover:underline"
                  >
                    Otwórz →
                  </Link>
                ) : (
                  <span className="text-sm text-zinc-500">
                    Partnerzy wkrótce
                  </span>
                )}

                {p.comingSoon && (
                  <span className="text-xs text-zinc-500">
                    Partnerzy w przygotowaniu
                  </span>
                )}
              </div>
            </div>
          ))}
        </section>

        <p className="mt-12 text-xs text-zinc-500">
          Bez kont. Bez ocen. Bez zapisywania rozmów.
        </p>
      </div>
    </main>
  );
}