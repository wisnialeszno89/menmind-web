import CrisisStabilization from "@/components/CrisisStabilization";
import WorldFAQ from "@/components/WorldFAQ";
import WorldArticles from "@/components/WorldArticles";
import { kryzysFAQ, kryzysArticles } from "@/content/kryzys";

export default function KryzysPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <section className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Kryzys</h1>

        <p className="text-lg text-gray-700 mb-6">
          Kryzys to moment, w którym dotychczasowa konstrukcja przestaje działać.
        </p>

        <div className="border-l-4 border-red-500 pl-6 mb-6">
          <p className="italic">Co dokładnie się rozpada – sytuacja czy Twoje wyobrażenie?</p>
        </div>

        <p className="mb-4">Nie musisz być silny. Musisz być przytomny.</p>

        <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 mb-8">
          Jeśli wszystko jest za ciężkie — oddychaj i nie podejmuj dziś wielkich decyzji.
        </div>

        <div className="text-sm text-gray-500 space-y-1">
          <p>To nie jest terapia online.</p>
          <p>Nie rozwiążesz tu wszystkiego w tydzień.</p>
          <p>To nie jest miejsce na udawanie siły.</p>
        </div>
      </section>

      <CrisisStabilization />
      <WorldFAQ items={kryzysFAQ} />
<WorldArticles world="kryzys" articles={kryzysArticles} />
    </div>
  );
}