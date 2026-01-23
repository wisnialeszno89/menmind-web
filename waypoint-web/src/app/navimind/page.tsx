import { Suspense } from "react";

function NavimindContent({
  searchParams,
}: {
  searchParams?: { state?: string };
}) {
  const state = searchParams?.state ?? "unknown";

  return (
    <main className="min-h-screen px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-3">
        Zatrzymaj się i sprawdź kierunek
      </h1>

      <p className="text-zinc-400 max-w-2xl mb-8">
        Rozmowa startuje z kontekstem:
        <span className="ml-2 text-zinc-200 font-medium">
          {state}
        </span>
      </p>

      <div className="w-full h-[70vh] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
        <iframe
          src={`https://navimind.app?state=${state}`}
          title="Navimind"
          className="w-full h-full border-0"
          allow="clipboard-write"
        />
      </div>

      <p className="text-xs text-zinc-500 mt-4">
        Rozmowy nie są zapisywane. Możesz zakończyć w dowolnym momencie.
      </p>
    </main>
  );
}

export default function NavimindPage(props: {
  searchParams?: { state?: string };
}) {
  return (
    <Suspense>
      <NavimindContent {...props} />
    </Suspense>
  );
}
