import Link from "next/link";

export default function DrogaPage() {
  return (
    <main className="bg-[#0F172A] text-zinc-100 min-h-screen">

      {/* HERO */}
      <section className="section-2026">
        <div className="container-2026 max-w-3xl text-center">

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            W którym miejscu jesteś teraz?
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Nie musisz wiedzieć wszystkiego.
            <br />
            Wystarczy, że wiesz gdzie stoisz.
          </p>

        </div>
      </section>

      {/* 4 ŚCIEŻKI */}
      <section className="section-compact">
        <div className="container-2026 grid md:grid-cols-2 gap-8 max-w-4xl">

          {/* KRYZYS */}
          <Link href="/kryzys" className="card-2026 p-10 hover:scale-[1.01] transition">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Jest mi ciężko
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Potrzebuję stabilizacji, spokoju i pierwszych decyzji.
            </p>
          </Link>

          {/* ODBUDOWA */}
          <Link href="/odbudowa" className="card-2026 p-10 hover:scale-[1.01] transition">
            <h3 className="text-2xl font-semibold mb-4">
              Odbudowuję się
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Składam życie na nowo. Buduję fundament.
            </p>
          </Link>

          {/* WZROST */}
          <Link href="/wzrost" className="card-2026 p-10 hover:scale-[1.01] transition">
            <h3 className="text-2xl font-semibold mb-4">
              Buduję kierunek
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Chcę rosnąć świadomie i konsekwentnie.
            </p>
          </Link>

          {/* OJCOSTWO */}
          <Link href="/ojcostwo" className="card-2026 p-10 hover:scale-[1.01] transition">
            <h3 className="text-2xl font-semibold mb-4">
              Chodzi o relację z dzieckiem
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              Chcę być obecnym, odpowiedzialnym ojcem.
            </p>
          </Link>

        </div>
      </section>

      {/* NIE WIEM */}
      <section className="section-compact">
        <div className="container-2026 max-w-xl text-center">

          <p className="text-zinc-500 mb-6">
            Nie wiesz gdzie jesteś?
          </p>

          <Link
            href="/propozycje"
            className="inline-block px-8 py-3 rounded-xl border border-zinc-600 text-sm hover:border-white transition"
          >
            Zobacz propozycje kierunków
          </Link>

        </div>
      </section>

    </main>
  );
}