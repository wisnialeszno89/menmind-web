"use client";

import Link from "next/link";

const OPTIONS = [
  {
    title: "Jestem po rozstaniu",
    desc: "Zamęt, pustka, tęsknota albo ulga — wszystko naraz.",
    href: "/where/breakup",
    tag: "rozstanie",
  },
  {
    title: "Jestem w środku rozsypki",
    desc: "Nie wiem co dalej. Jestem zmęczony i rozbity.",
    href: "/where/broken",
    tag: "kryzys",
  },
  {
    title: "Jestem pusty / wypalony",
    desc: "Niby żyję, ale jakby bez sensu i bez energii.",
    href: "/where/empty",
    tag: "wypalenie",
  },
  {
    title: "Mam presję i wkurw",
    desc: "Napięcie rośnie. Potrzebuję spuścić ciśnienie i złapać kierunek.",
    href: "/where/ready",
    tag: "złość",
  },
  {
    title: "Chodzi o ojcostwo",
    desc: "Relacja z dzieckiem, matką dziecka, odpowiedzialność, emocje.",
    href: "/where/father",
    tag: "ojciec",
  },
];

export default function WhereYouAre() {
  return (
    <section className="w-full">
      <h2 className="text-lg md:text-xl font-semibold text-zinc-100">
        W którym miejscu jesteś?
      </h2>

      <p className="mt-2 text-sm text-zinc-400">
        Wybierz jedno. To tylko punkt startowy — bez ocen.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {OPTIONS.map((o) => (
          <Link
            key={o.href}
            href={o.href}
            className="group rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 text-left shadow-sm shadow-black/20 backdrop-blur transition hover:bg-zinc-900/40 hover:border-zinc-700"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-base font-semibold text-zinc-100">
                {o.title}
              </p>

              <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-[11px] font-medium text-cyan-200 ring-1 ring-cyan-400/15">
                {o.tag}
              </span>
            </div>

            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              {o.desc}
            </p>

            <p className="mt-3 text-sm text-zinc-300 group-hover:text-cyan-200 transition">
              Wejdź →
            </p>
          </Link>
        ))}
      </div>

      <p className="mt-5 text-xs text-zinc-500">
        Nie zapisujemy rozmów. Możesz wyjść w każdej chwili.
      </p>
    </section>
  );
}