import Link from "next/link";

export default function SciezkaKryzys() {

  return (

    <main className="bg-gray-50 min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold text-gray-900 mb-6">
          Ścieżka: Kryzys
        </h1>

        <p className="text-gray-700 mb-12">
          Kryzys może przyjść nagle — rozstanie, konflikt,
          problemy finansowe albo poczucie że wszystko się sypie.
        </p>


        <h2 className="text-2xl font-semibold mb-4">
          Zacznij od zrozumienia sytuacji
        </h2>

        <div className="space-y-4 mb-12">

          <Link
            href="/content/dlaczego-mezczyzni-zwlekaja"
            className="block border p-4 rounded-lg bg-white hover:shadow"
          >
            Dlaczego mężczyźni zwlekają z decyzją
          </Link>

          <Link
            href="/content/jak-mezczyzni-reaguja-na-stres"
            className="block border p-4 rounded-lg bg-white hover:shadow"
          >
            Jak mężczyźni reagują na stres
          </Link>

        </div>


        <h2 className="text-2xl font-semibold mb-4">
          Spróbuj narzędzi stabilizacji
        </h2>

        <div className="space-y-4 mb-12">

          <Link
            href="/narzedzia/stabilizacja"
            className="block border p-4 rounded-lg bg-white hover:shadow"
          >
            Narzędzia stabilizacji
          </Link>

        </div>


        <h2 className="text-2xl font-semibold mb-4">
          Znajdź wsparcie
        </h2>

        <div className="space-y-4 mb-12">

          <Link
            href="/propozycje"
            className="block border p-4 rounded-lg bg-white hover:shadow"
          >
            Zobacz dostępnych specjalistów
          </Link>

        </div>


        <Link
          href="/navimind?state=kryzys"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg"
        >
          Porozmawiaj w NaviMind
        </Link>

      </div>
<h2 className="text-2xl font-semibold text-black mt-16 mb-6">
Najczęstsze pytania
</h2>

<div className="space-y-4">

<div>
<p className="font-semibold text-black">
Jak poradzić sobie z rozstaniem?
</p>
<p className="text-black">
Najpierw stabilizacja emocjonalna, potem odbudowa struktury życia.
</p>
</div>

<div>
<p className="font-semibold text-black">
Czy warto iść do psychologa po rozstaniu?
</p>
<p className="text-black">
Dla wielu mężczyzn rozmowa z profesjonalistą pomaga szybciej odzyskać równowagę.
</p>
</div>

</div>
    </main>

  );
}