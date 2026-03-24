import Link from "next/link"
import FindSupportCTA from "@/components/FindSupportCTA"

export default function RozstaniePage() {

  return (

    <main className="bg-white min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Rozstanie — co zrobić, żeby się nie rozsypać
        </h1>

        <p className="text-gray-700 mb-10">
          Rozstanie potrafi wywrócić wszystko: emocje, głowę, codzienność.
          Najważniejsze teraz to nie robić gwałtownych ruchów i odzyskać stabilność.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          1. Zatrzymaj spiralę
        </h2>

        <p className="text-gray-700 mb-6">
          Najpierw ciało. Jeśli jesteś w napięciu — nie podejmuj decyzji.
          Uspokój układ nerwowy, zanim zaczniesz analizować.
        </p>

        <Link
          href="/narzedzia/reset"
          className="block border p-4 rounded-lg mb-10"
        >
          👉 Zrób szybki reset (90 sekund)
        </Link>

        <h2 className="text-2xl font-semibold mb-4">
          2. Uporządkuj chaos w głowie
        </h2>

        <p className="text-gray-700 mb-6">
          Wyrzuć wszystko z głowy. Bez filtrowania.
          Dopiero potem zobaczysz co jest naprawdę ważne.
        </p>

        <Link
          href="/narzedzia/brain-dump"
          className="block border p-4 rounded-lg mb-10"
        >
          👉 Wyrzuć wszystko na papier
        </Link>

        <h2 className="text-2xl font-semibold mb-4">
          3. Nie zostawaj z tym sam
        </h2>

        <p className="text-gray-700 mb-6">
          Rozstanie to jeden z momentów, gdzie rozmowa z kimś ogarniętym
          potrafi skrócić miesiące chaosu do kilku tygodni.
        </p>

        <FindSupportCTA />

      </div>

      {/* 🔥 MOCNY CTA DO MARKETPLACE */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="border rounded-xl p-8 text-center">

          <h2 className="text-2xl font-semibold mb-4">
            Potrzebujesz konkretnej pomocy?
          </h2>

          <p className="text-gray-600 mb-6">
            Psycholog, mediator lub grupa wsparcia może pomóc
            szybciej poukładać sytuację.
          </p>

          <FindSupportCTA
            label="Zobacz dostępne wsparcie"
            className="inline-block border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition"
          />

        </div>
      </section>

    </main>

  )

}