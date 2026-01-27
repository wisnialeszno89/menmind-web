import Link from "next/link";
import { Suspense } from "react";

type Partner = {
  name: string;
  title: string;
  desc: string;
  tags: string[];
  cta: string;
  href: string;
  note?: string;
};

const PARTNERS: Partner[] = [
  {
    name: "MenMind Trips",
    title: "Wyjazdy męskie: reset + outdoor",
    desc: "Wyprawy, trekking, natura, prosta forma. Dla facetów, którzy chcą zmiany otoczenia i kontaktu z ludźmi.",
    tags: ["trips", "ready"],
    cta: "Zobacz wyjazdy",
    href: "#",
    note: "Wkrótce: lista organizatorów + formularz zgłoszeń",
  },
  {
    name: "Trening / Combat",
    title: "Trening i sporty walki",
    desc: "Dla ciała i głowy. Regularność daje szybki zwrot: energia, spokój, pewność siebie.",
    tags: ["training", "ready", "pressure", "empty"],
    cta: "Zobacz polecanych",
    href: "#",
    note: "Wkrótce: miejsca + trenerzy",
  },
  {
    name: "Fatherhood Support",
    title: "Ojcostwo: relacja, obecność, komunikacja",
    desc: "Materiały, konsultacje i praktyczne wsparcie dla ojców. Bez oceniania, bez guru.",
    tags: ["fatherhood", "father"],
    cta: "Zobacz wsparcie",
    href: "#",
    note: "Wkrótce: polecane zasoby",
  },
  {
    name: "Co-parenting",
    title: "Granice i współrodzicielstwo",
    desc: "Pomoc w uporządkowaniu komunikacji, zasad i emocji w relacji z matką dziecka — bez wojny.",
    tags: ["co-parenting", "father", "law"],
    cta: "Zobacz opcje",
    href: "#",
    note: "Wkrótce: prawnicy + mediacje + materiały",
  },

  // ✅ Psychologists
  {
    name: "Wsparcie psychologiczne",
    title: "Psychologowie (rozmowa i praca nad sobą)",
    desc: "Gdy chcesz z kimś pogadać, poukładać emocje i odzyskać stabilność. Bez wstydu, bez etykiet.",
    tags: ["psychologists", "father", "pressure", "broken", "breakup", "empty"],
    cta: "Zobacz opcje",
    href: "#",
    note: "Wkrótce: polecani specjaliści",
  },

  // ✅ Psychiatrists
  {
    name: "Wsparcie medyczne",
    title: "Psychiatrzy (gdy jest naprawdę ciężko)",
    desc: "Dla momentów, kiedy objawy są za duże, sen się sypie, a organizm nie ciągnie. To leczenie, nie słabość.",
    tags: ["psychiatrists", "father", "pressure", "broken", "breakup", "empty"],
    cta: "Zobacz opcje",
    href: "#",
    note: "Wkrótce: kontakty i wskazówki",
  },

  {
    name: "Wsparcie prawne",
    title: "Prawo: ojcostwo / ustalenia / konflikty",
    desc: "Dla facetów, którzy chcą uporządkować sytuację formalnie i odzyskać spokój.",
    tags: ["law", "father", "co-parenting"],
    cta: "Zobacz opcje",
    href: "#",
    note: "Wkrótce: polecani prawnicy",
  },

  {
    name: "Używki i alkohol",
    title: "Gdy zaczyna ciągnąć w złą stronę",
    desc: "Bez moralizowania. Narzędzia i wsparcie, gdy uciekasz w alkohol, używki albo autodestrukcję.",
    tags: ["addiction", "broken", "pressure", "breakup", "empty"],
    cta: "Zobacz wsparcie",
    href: "#",
    note: "Wkrótce: kontakty i materiały",
  },

  {
    name: "Społeczność",
    title: "Zamknięte grupy / rozmowy z innymi facetami",
    desc: "Czasem nie potrzebujesz porad. Potrzebujesz ludzi, którzy rozumieją i nie oceniają.",
    tags: ["community", "broken", "breakup", "empty", "father", "ready"],
    cta: "Zobacz opcje",
    href: "#",
    note: "Wkrótce: kanały tematyczne",
  },
];

const TAGS: { key: string; label: string }[] = [
  { key: "all", label: "Wszystko" },

  // states
  { key: "pressure", label: "Presja" },
  { key: "ready", label: "Gotowość" },
  { key: "breakup", label: "Rozstanie" },
  { key: "broken", label: "Rozsypka" },
  { key: "empty", label: "Pustka" },

  // action paths
  { key: "trips", label: "Wyjazdy" },
  { key: "training", label: "Trening" },
  { key: "community", label: "Grupy / fora" },
  { key: "addiction", label: "Używki" },

  // fatherhood
  { key: "father", label: "Ojcostwo" },
  { key: "fatherhood", label: "Obecność" },
  { key: "co-parenting", label: "Granice" },
  { key: "law", label: "Prawo" },

  // specialists
  { key: "psychologists", label: "Psychologowie" },
  { key: "psychiatrists", label: "Psychiatrzy" },
];

function PartnersContent({ searchParams }: { searchParams?: { tag?: string } }) {
  const tag = searchParams?.tag ?? "all";

  const filtered =
    tag === "all" ? PARTNERS : PARTNERS.filter((p) => p.tags.includes(tag));

  const activeTagLabel = TAGS.find((t) => t.key === tag)?.label ?? "Wszystko";

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-sm text-zinc-400">MenMind · polecani</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Partnerzy i zasoby
          </h1>

          <p className="mt-4 text-zinc-300 max-w-3xl leading-relaxed">
            Tu są kierunki i zasoby, które realnie pomagają ruszyć dalej:
            ruch, rozmowa, wsparcie, formalności. Bez spamu i bez przypadkowych poleceń.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {TAGS.map((t) => {
              const active = tag === t.key;

              return (
                <Link
                  key={t.key}
                  href={t.key === "all" ? "/partners" : `/partners?tag=${t.key}`}
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

          <p className="mt-4 text-xs text-zinc-500">
            Filtr aktywny:{" "}
            <span className="text-zinc-300">{activeTagLabel}</span>
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur"
            >
              <p className="text-xs text-zinc-500">{p.name}</p>

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
                    href={`/partners?tag=${tg}`}
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
                  {p.note ?? "Dostępne wkrótce"}
                </span>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-6 shadow-sm shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Chcesz być partnerem?
          </h2>

          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            Jeśli masz realną ofertę (wyjazdy, trening, wsparcie, prawo, społeczność) —
            możesz się zgłosić. Bez taniej reklamy.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/partnerstwo"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Zgłoś się jako partner →
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Wróć na start
            </Link>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            W kolejnej wersji dodamy weryfikację + panel partnerów.
          </p>
        </section>
      </div>
    </main>
  );
}

export default function PartnersPage(props: { searchParams?: { tag?: string } }) {
  return (
    <Suspense>
      <PartnersContent {...props} />
    </Suspense>
  );
}