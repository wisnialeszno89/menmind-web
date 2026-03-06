import Link from "next/link";
import WorldPage from "@/components/layout/WorldPage";
import WorldArticles from "@/components/WorldArticles"

export const metadata = {
  title: "Kryzys | MenMind",
  description:
    "Kryzys to moment kiedy stare rozwiązania przestają działać. Zobacz możliwe kroki i dostępne wsparcie.",
};

export default function KryzysPage() {
  return (
    <WorldPage
      title="Kryzys"
      intro="Moment kiedy stare rozwiązania przestają działać.
Kryzys nie jest końcem. To sygnał że coś trzeba zmienić."
    >
      <section>
        <h2 className="text-xl font-semibold mb-3">
          Co często się wtedy dzieje
        </h2>

        <ul className="space-y-2 text-gray-700">
          <li>– chaos decyzyjny</li>
          <li>– napięcie i brak snu</li>
          <li>– konflikty w relacjach</li>
          <li>– poczucie braku kierunku</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">
          Co możesz zrobić teraz
        </h2>

        <ul className="space-y-2 text-gray-700">
          <li>– ogranicz chaos informacji</li>
          <li>– zapisz fakty zamiast myśli</li>
          <li>– podejmij jedną decyzję</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Jeśli chcesz zrozumieć więcej
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/kryzys/dlaczego-mezczyzni-zwlekaja" className="card">
            Dlaczego mężczyźni zwlekają z decyzją
          </Link>

          <Link href="/kryzys/jak-mezczyzni-reaguja-na-stres" className="card">
            Jak mężczyźni reagują na stres
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          Możliwe wsparcie
        </h2>

        <div className="space-y-3">
          <Link
            href="/propozycje"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Sprawdź dostępne możliwości
          </Link>
        </div>
      </section>
    </WorldPage>
  
  );
  <WorldArticles world="kryzys" />
}