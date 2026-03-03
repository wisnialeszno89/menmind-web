import Link from "next/link";

export const metadata = {
  title: "Co nieświadomie oddala relację z dzieckiem | MenMind",
  description:
    "Niektóre zachowania mogą nieświadomie osłabiać relację z dzieckiem. Sprawdź, co warto zauważyć.",
};

export default function CoOddalaRelacjePage() {
  return (
    <main className="bg-[#111827] text-zinc-100">
      <section className="section-2026">
        <div className="container-2026 max-w-4xl">

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-blue-500">
            Co może oddalać relację
          </h1>

          <div className="h-px w-16 bg-blue-500 mb-12" />

          <p className="text-lg text-zinc-400 mb-16 leading-relaxed max-w-2xl">
            Relacje rzadko psują się przez jeden duży błąd.
            Częściej przez małe rzeczy powtarzane przez długi czas.
            Warto je zauważyć bez obrony.
          </p>

          <div className="space-y-14">

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Ciągłe poprawianie
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Gdy każda rozmowa kończy się korektą lub pouczeniem,
                dziecko zaczyna unikać rozmów.
              </p>
              <p className="text-zinc-500 mt-4">
                Alternatywa: najpierw wysłuchaj, potem zapytaj, czy chce opinii.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Wciąganie w konflikt
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Komentarze o drugim rodzicu lub napięcie
                przenoszone na dziecko budują dystans.
              </p>
              <p className="text-zinc-500 mt-4">
                Alternatywa: oddziel relację partnerską od rodzicielskiej.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Brak przewidywalności
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Odwoływane spotkania i zmiany planów
                podkopują poczucie bezpieczeństwa.
              </p>
              <p className="text-zinc-500 mt-4">
                Alternatywa: mniej deklaracji, więcej konsekwencji.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Nadmierna kontrola
              </h2>
              <p className="text-zinc-400 leading-relaxed">
                Zwłaszcza przy nastolatkach kontrola
                bywa odbierana jako brak zaufania.
              </p>
              <p className="text-zinc-500 mt-4">
                Alternatywa: ustal granice, ale zostaw przestrzeń.
              </p>
            </section>

          </div>

          <div className="mt-20 border-t border-neutral-800 pt-10 space-y-4">

            <Link
              href="/ojcostwo/odbudowa-relacji"
              className="block text-blue-500 underline underline-offset-4 hover:text-blue-400"
            >
              Jak odbudować relację →
            </Link>

            <Link
              href="/propozycje/stabilizacja"
              className="block text-zinc-400 underline underline-offset-4 hover:text-zinc-200"
            >
              Jeśli sytuacja jest trudna →
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}