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
    name: "MenMind",
    title: "Wyjazdy męskie: reset + outdoor",
    desc: "Wyprawy, góry, natura i prosta struktura. Dla facetów, którzy potrzebują ruchu i zmiany otoczenia.",
    tags: ["trips"],
    cta: "Otwórz wyjazdy",
    href: "/spec/wyjazdy",
    note: "Wkrótce: zweryfikowani organizatorzy",
  },
  {
    name: "MenMind",
    title: "Trening / sport",
    desc: "Najpierw ciało. Regularność przywraca energię, spokój i pewność.",
    tags: ["training"],
    cta: "Otwórz trening",
    href: "/spec/trening",
    note: "Wkrótce: siłownie i trenerzy",
  },
  {
    name: "MenMind",
    title: "Zamknięte grupy / fora",
    desc: "Czasem nie potrzebujesz rady. Potrzebujesz ludzi, którzy rozumieją.",
    tags: ["community"],
    cta: "Otwórz grupy",
    href: "/spec/grupy",
    note: "Wkrótce",
  },
  {
    name: "MenMind",
    title: "Psychologowie (rozmowa + klarowność)",
    desc: "Gdy potrzebujesz rozmowy, uporządkowania emocji i stabilizacji. Bez wstydu.",
    tags: ["psychologists"],
    cta: "Otwórz psychologów",
    href: "/spec/psychologowie",
    note: "Wkrótce: zweryfikowana lista",
  },
  {
    name: "MenMind",
    title: "Psychiatrzy (wsparcie medyczne)",
    desc: "Gdy objawy są za mocne, sen siada i organizm nie ciągnie. Leczenie to narzędzie — nie słabość.",
    tags: ["psychiatrists"],
    cta: "Otwórz psychiatrów",
    href: "/spec/psychiatrzy",
    note: "Wkrótce: zweryfikowana lista",
  },
  {
    name: "MenMind",
    title: "Prawo (rozwód / ojcostwo / ustalenia / mediacje)",
    desc: "Konkretne kroki, zasady i spokojniejsza komunikacja. Struktura daje spokój.",
    tags: ["law"],
    cta: "Otwórz prawo",
    href: "/spec/prawo",
    note: "Wkrótce",
  },
  {
    name: "Navimind",
    title: "Porozmawiaj teraz (Navimind)",
    desc: "Jeśli potrzebujesz spokoju i kierunku — bez ocen, bez presji.",
    tags: ["navimind"],
    cta: "Otwórz czat",
    href: "/navimind?state=unknown",
    note: "Dostępne teraz",
  },

  // ✅ Nightlife jako “ukryty zasób” – działa przez URL, nie pokazujemy go jako filtr
  {
    name: "MenMind",
    title: "Kluby / bary / imprezy",
    desc: "Opcja na przyszłość: miejsca, wydarzenia i partnerzy. Kontakt z ludźmi — bez spiny.",
    tags: ["nightlife"],
    cta: "Zobacz (wkrótce)",
    href: "/partners?tag=nightlife",
    note: "Wkrótce: partnerzy",
  },
];

// ✅ Filtry TYLKO zasobów (bez stanów!)
const TAGS: { key: string; label: string }[] = [
  { key: "all", label: "Wszystko" },

  // kierunki / zasoby
  { key: "trips", label: "Wyjazdy" },
  { key: "training", label: "Trening" },
  { key: "community", label: "Grupy / fora" },
  { key: "law", label: "Prawo" },

  // specjaliści
  { key: "psychologists", label: "Psychologowie" },
  { key: "psychiatrists", label: "Psychiatrzy" },

  // narzędzie
  { key: "navimind", label: "Czat" },
];

// ✅ Tag działa przez URL, ale nie jest widoczny jako przycisk filtra
const HIDDEN_TAG_LABELS: Record<string, string> = {
  nightlife: "Kluby / bary / imprezy",
};

function PartnersContent({ searchParams }: { searchParams?: { tag?: string } }) {
  const tag = searchParams?.tag ?? "all";

  const filtered =
    tag === "all" ? PARTNERS : PARTNERS.filter((p) => p.tags.includes(tag));

  const activeTagLabel =
    TAGS.find((t) => t.key === tag)?.label ??
    HIDDEN_TAG_LABELS[tag] ??
    "Wszystko";

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-sm text-zinc-400">MenMind · partnerzy</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Partnerzy i zasoby
          </h1>

          <p className="mt-4 text-zinc-300 max-w-3xl leading-relaxed">
            Wybrane kierunki i zasoby, które realnie pomagają: ruch, wsparcie,
            struktura i klarowność. Bez spamu.
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
            Aktywny filtr:{" "}
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
                  {p.note ?? "Wkrótce"}
                </span>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-6 shadow-sm shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Chcesz zostać partnerem?
          </h2>

          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            Zgłoś swoją usługę. Weryfikujemy ręcznie. Publikujemy tylko konkret.
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
            Następna wersja: weryfikacja + panel partnera.
          </p>
        </section>
      </div>
    </main>
  );
}

export default function PartnersPagePL(props: { searchParams?: { tag?: string } }) {
  return (
    <Suspense>
      <PartnersContent {...props} />
    </Suspense>
  );
}