import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#0F172A] text-zinc-100 min-h-screen">

      <Hero
        highlight="Miejsce dla mężczyzn"
        title="w kryzysie, odbudowie i wzroście."
        subtitle="MenMind to przestrzeń, w której możesz określić, gdzie jesteś i wybrać kierunek."
      />

      <section className="section-compact">
        <div className="container-2026 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          <Link href="/kryzys">
            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">Kryzys</h3>
              <p className="text-sm text-zinc-400">
                Regulacja i pierwsze decyzje.
              </p>
            </Card>
          </Link>

          <Link href="/odbudowa">
            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">Odbudowa</h3>
              <p className="text-sm text-zinc-400">
                Powrót do fundamentu.
              </p>
            </Card>
          </Link>

          <Link href="/wzrost">
            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">Wzrost</h3>
              <p className="text-sm text-zinc-400">
                Kierunek i konsekwencja.
              </p>
            </Card>
          </Link>

          <Link href="/ojcostwo">
            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">Ojcostwo</h3>
              <p className="text-sm text-zinc-400">
                Relacja i odpowiedzialność.
              </p>
            </Card>
          </Link>

        </div>
      </section>

    </main>
  );
}