export default function PartnersPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">
        Współpraca i rekomendacje
      </h1>

      <p className="text-zinc-400 max-w-3xl mb-10">
        Waypoint nie sprzedaje gotowych rozwiązań.
        Pokazujemy tylko inicjatywy i firmy, które realnie pomagają
        facetom ruszyć się z miejsca — fizycznie lub życiowo.
      </p>

      <section className="grid gap-6 md:grid-cols-2">
        <PartnerCard
          title="Wyjazdy i wyprawy"
          description="Krótkie wyjazdy męskie, wyprawy survivalowe,
trekking, sport, reset."
        />

        <PartnerCard
          title="Aktywność fizyczna"
          description="Kluby sportowe, sztuki walki, trenerzy,
inicjatywy lokalne."
        />

        <PartnerCard
          title="Rozwój i porządkowanie"
          description="Prawnicy, mediatorzy, doradcy finansowi —
bez gadania motywacyjnego."
        />

        <PartnerCard
          title="Projekty niszowe"
          description="Małe inicjatywy tworzone przez facetów
dla facetów."
        />
      </section>

      <div className="mt-12 border-t border-zinc-800 pt-8">
        <h2 className="text-xl font-medium mb-3">
          Chcesz współpracować?
        </h2>

        <p className="text-zinc-400 mb-6 max-w-2xl">
          Jeśli prowadzisz inicjatywę, która realnie daje wartość,
          a nie sprzedaje iluzji — napisz do nas.
        </p>

        <a
          href="mailto:kontakt@waypoint.app"
          className="inline-block rounded-md border border-zinc-800 px-5 py-3 hover:bg-zinc-800 transition"
        >
          Skontaktuj się
        </a>
      </div>
    </main>
  );
}

function PartnerCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-zinc-400 text-sm whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
