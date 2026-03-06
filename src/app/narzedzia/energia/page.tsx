import Link from "next/link";

export default function EnergiaTools() {
  return (

    <main className="bg-gray-50 min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-3xl font-semibold mb-10">
          Energia
        </h1>

        <div className="space-y-4">

          <Link href="/tools/energy-map" className="card block">
            Mapa energii dnia
          </Link>

          <Link href="/tools/reset" className="card block">
            Reset 3 godziny
          </Link>

        </div>

      </div>

    </main>

  );
}