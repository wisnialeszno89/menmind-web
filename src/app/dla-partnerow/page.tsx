import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Link from "next/link";

export default function PartnerPage() {
  return (
    <main className="bg-[#0F172A] text-zinc-100 min-h-screen">

      <Hero
        highlight="Dla partnerów"
        title="Bądź widoczny tam, gdzie mężczyźni szukają kierunku."
        subtitle="MenMind łączy lokalne usługi z realnymi potrzebami."
        align="center"
      />

      <section className="section-compact">
        <div className="container-2026 grid grid-cols-1 md:grid-cols-3 gap-6">

          <Card className="p-6">
            <h3 className="font-semibold mb-3">
              Widoczność lokalna
            </h3>
            <p className="text-sm text-zinc-400">
              Twoja oferta w konkretnej kategorii i mieście.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-3">
              Wyróżnienie premium
            </h3>
            <p className="text-sm text-zinc-400">
              Stałe miejsce w sekcji polecanej.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-3">
              Ekosystem
            </h3>
            <p className="text-sm text-zinc-400">
              Dostęp do rosnącej społeczności mężczyzn.
            </p>
          </Card>

        </div>
      </section>

      <section className="section-compact">
        <div className="container-2026 max-w-3xl text-center">
          <Card variant="highlight" className="p-8">
            <h3 className="text-lg font-semibold mb-4">
              Chcesz porozmawiać o współpracy?
            </h3>
            <Link
              href="/kontakt"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
            >
              Skontaktuj się
            </Link>
          </Card>
        </div>
      </section>

    </main>
  );
}