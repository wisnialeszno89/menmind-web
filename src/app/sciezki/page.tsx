import PathCompass from "@/components/PathCompass";
import { paths } from "@/data/paths";
import Link from "next/link";
import FindSupportCTA from "@/components/FindSupportCTA";

export const metadata = {
  title: "Ścieżki | MenMind",
  description:
    "Znajdź ścieżkę wyjścia z kryzysu, odbudowy i rozwoju.",
};

export default function SciezkiPage() {
  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold text-black mb-6">
          Ścieżki
        </h1>

        <p className="text-black mb-16 max-w-2xl">
          Każdy mężczyzna trafia czasem w moment,
          w którym potrzebuje zatrzymać się i znaleźć kierunek.
          Wybierz sytuację najbardziej zbliżoną do Twojej.
        </p>

        <PathCompass />

        <h2 className="text-2xl font-semibold text-black mb-8">
          Wszystkie ścieżki
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {paths.map((path) => (
            <Link
              key={path.slug}
              href={`/sciezki/${path.slug}`}
              className="border rounded-xl p-6 hover:shadow"
            >
              <h3 className="text-xl font-semibold text-black mb-2">
                {path.title}
              </h3>

              <p className="text-black">
                {path.description}
              </p>

            </Link>
          ))}

        </div>

      </div>

      {/* 🔥 GLOBALNE CTA DO MARKETPLACE */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="border rounded-xl p-10 text-center">

          <h2 className="text-2xl font-semibold mb-4">
            Potrzebujesz konkretnego wsparcia?
          </h2>

          <p className="text-gray-600 mb-6">
            Możesz od razu zobaczyć specjalistów,
            miejsca i rozwiązania dopasowane do Twojej sytuacji.
          </p>

          <FindSupportCTA
            label="Przejdź do zakładki Znajdź"
            className="inline-block border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition"
          />

        </div>
      </section>

    </main>
  );
}