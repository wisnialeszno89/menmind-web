import Link from "next/link";

export const metadata = {
  title: "Zacznij | MenMind",
  description:
    "Wybierz kierunek i zobacz co może pomóc.",
};

export default function StartPage() {

  return (

    <main className="min-h-screen flex items-center justify-center px-6">

      <div className="relative w-[420px] h-[420px] flex items-center justify-center">

        {/* centrum */}

        <div className="absolute text-center">

          <h1 className="text-3xl font-semibold">
            MenMind
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            wybierz kierunek
          </p>

        </div>

        {/* północ */}

        <Link
          href="/narzedzia/stabilizacja"
          className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:opacity-90"
        >
          <p className="font-semibold">
            Stabilizacja
          </p>

          <p className="text-sm text-gray-500">
            uspokój chaos
          </p>
        </Link>

        {/* wschód */}

        <Link
          href="/narzedzia/energia"
          className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:opacity-90"
        >
          <p className="font-semibold">
            Energia
          </p>

          <p className="text-sm text-gray-500">
            odzyskaj siłę
          </p>
        </Link>

        {/* południe */}

        <Link
          href="/propozycje"
          className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:opacity-90"
        >
          <p className="font-semibold">
            Poszukaj
          </p>

          <p className="text-sm text-gray-500">
            zobacz możliwości
          </p>
        </Link>

        {/* zachód */}

        <Link
          href="/propozycje"
          className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:opacity-90"
        >
          <p className="font-semibold">
            Wsparcie
          </p>

          <p className="text-sm text-gray-500">
            znajdź pomoc
          </p>
        </Link>

      </div>

    </main>

  );
}