import Link from "next/link";

export default function StabilizacjaTools() {
  return (

    <main className="bg-gray-50 min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-3xl font-semibold mb-10">
          Stabilizacja
        </h1>

        <div className="space-y-4">

          <Link href="/tools/breathing" className="card block">
            Regulacja oddechu 4-7-8
          </Link>

          <Link href="/tools/mood-log" className="card block">
            Dziennik nastroju
          </Link>

          <Link href="/ojcostwo/plan-awaryjny" className="card block">
            Plan awaryjny 3h
          </Link>

        </div>

      </div>

    </main>

  );
}