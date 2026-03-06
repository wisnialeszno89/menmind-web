import Link from "next/link";

export default function RelacjeTools() {
  return (

    <main className="bg-gray-50 min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-3xl font-semibold mb-10">
          Relacje
        </h1>

        <div className="space-y-4">

          <Link href="/ojcostwo/rytual-15-min" className="card block">
            Rytuał 15 minut
          </Link>

          <Link href="/ojcostwo/zabawy" className="card block">
            Generator zabaw
          </Link>

        </div>

      </div>

    </main>

  );
}