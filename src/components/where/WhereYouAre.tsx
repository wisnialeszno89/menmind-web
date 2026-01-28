"use client";

import Link from "next/link";

const OPTIONS = [
  {
    title: "Jestem po rozstaniu",
    desc: "Może być chaos, ulga, pustka albo nowe otwarcie. Ustawiamy kierunek bez dramy.",
    href: "/where/breakup",
    tag: "rozstanie",
  },
  {
    title: "Jestem w trakcie rozwodu",
    desc: "Rozwód boli, ale chaos kosztuje najwięcej. Spokój + papier + zabezpieczenie.",
    href: "/where/divorce",
    tag: "rozwód",
  },
  {
    title: "Jestem w środku rozsypki",
    desc: "Za dużo się dzieje. Najpierw baza: sen, jedzenie, stabilizacja, pomoc.",
    href: "/where/broken",
    tag: "kryzys",
  },
  {
    title: "Problem w związku",
    desc: "Kłótnie, napięcie, schematy. Zatrzymujemy eskalację i wracamy do rozmowy.",
    href: "/where/relationship",
    tag: "związek",
  },
  {
    title: "Jestem pusty / wypalony",
    desc: "Niby działa, ale nie ma paliwa. Regeneracja + ruch + ludzie.",
    href: "/where/empty",
    tag: "pustka",
  },
  {
    title: "Jestem pod presją i potrzebuję kierunku",
    desc: "Za dużo na głowie. Najpierw uspokajamy układ nerwowy, potem plan.",
    href: "/where/pressure",
    tag: "presja",
  },
  {
    title: "Chodzi o ojcostwo",
    desc: "Dziecko, granice i ustalenia. Spokojnie, konkretnie, bez wojny.",
    href: "/where/father",
    tag: "ojciec",
  },
  {
    title: "Jestem po przejściach, ale gotowy",
    desc: "Wracam do steru. Ruch + środowisko + ludzie.",
    href: "/where/ready",
    tag: "gotowy",
  },
];

export default function WhereYouAre() {
  return (
    <section className="w-full">
      <h2 className="text-xl md:text-2xl font-semibold text-zinc-100">
        W którym miejscu jesteś?
      </h2>

      <p className="mt-2 text-base text-zinc-300">
        Wybierz jedno. To tylko punkt startowy — bez ocen.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {OPTIONS.map((o) => (
          <Link
            key={o.href}
            href={o.href}
            className="group rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 text-left shadow-sm shadow-black/20 backdrop-blur transition hover:bg-zinc-900/40 hover:border-zinc-700"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-lg font-semibold text-zinc-100">{o.title}</p>

              <span className="shrink-0 rounded-full bg-cyan-500/10 px-2 py-1 text-[11px] font-medium text-cyan-200 ring-1 ring-cyan-400/15">
                {o.tag}
              </span>
            </div>

            <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
              {o.desc}
            </p>

            <p className="mt-3 text-sm text-zinc-300 group-hover:text-cyan-200 transition">
              Wejdź →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}