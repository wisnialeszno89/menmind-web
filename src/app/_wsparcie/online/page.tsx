export default function OnlinePage() {
  return (
    <main className="min-h-screen px-6 py-20">

      <div className="mx-auto max-w-5xl">

        <h1 className="text-3xl font-semibold">
          Wsparcie online
        </h1>

        <p className="mt-4 text-textMuted max-w-2xl">
          Specjaliści i usługi dostępne z dowolnego miejsca.
        </p>

        <div className="mt-12 rounded-2xl border border-borderSoft p-8">

          <p className="text-textMuted">
            Wkrótce pojawią się tutaj partnerzy oferujący wsparcie online.
          </p>

        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl border border-borderSoft bg-navySoft p-10 text-center">

          <h2 className="text-2xl font-semibold">
            Prowadzisz działalność online?
          </h2>

          <p className="mt-4 text-textMuted">
            Możesz dotrzeć do mężczyzn z całej Polski.
          </p>

          <a
            href="/dla-partnerow/zgloszenie"
            className="inline-block mt-8 rounded-xl bg-accent px-8 py-4 font-medium text-black"
          >
            Dołącz jako partner →
          </a>

        </div>

      </div>

    </main>
  );
}