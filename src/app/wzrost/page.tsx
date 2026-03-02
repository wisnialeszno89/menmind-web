import Link from "next/link";

export default function WzrostPage() {
  return (
    <main className="bg-[#0F172A] text-zinc-100">

      {/* HERO */}
      <section className="section-2026">
        <div className="container-2026 max-w-3xl">

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-blue-500">
  Wzrost
</h1>
<div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 leading-relaxed">
            Rozwój to kierunek i konsekwencja.
            Bez presji. Bez spektaklu.
          </p>

        </div>
      </section>

      {/* FILARY */}
      <section className="section-compact">
        <div className="container-2026 grid md:grid-cols-3 gap-8">

          <div className="card-2026 p-8">
            <h3 className="text-xl font-semibold mb-4">
              Kierunek
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Jasność celu upraszcza decyzje i eliminuje chaos.
            </p>
          </div>

          <div className="card-2026 p-8">
            <h3 className="text-xl font-semibold mb-4">
              Relacje
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Otoczenie wpływa na tempo i jakość wzrostu.
            </p>
          </div>

          <div className="card-2026 p-8">
            <h3 className="text-xl font-semibold mb-4">
              Dyscyplina
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Małe działania powtarzane codziennie.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-compact">
        <div className="container-2026 max-w-2xl">

          <div className="card-2026 p-10 text-center">
            <p className="text-zinc-300 leading-relaxed mb-6">
              Jeśli czujesz, że potrzebujesz wsparcia w swoim kierunku —
              możesz skorzystać z wyselekcjonowanych propozycji.
            </p>

            <Link
              href="/propozycje"
              className="accent-bg px-8 py-3 rounded-xl text-sm inline-block"
            >
              Zobacz propozycje
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}