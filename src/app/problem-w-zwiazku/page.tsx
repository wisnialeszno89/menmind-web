import Link from "next/link";
import { Suspense } from "react";

function Content() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-base text-zinc-300">MenMind · rozmowa</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Problem w związku
          </h1>

          <p className="mt-3 text-zinc-300 leading-relaxed">
            <span className="text-zinc-200 font-medium">Kłótnie i napięcie</span> to najczęściej nie “koniec”,
            tylko schemat, który da się przerwać — jeśli najpierw uporządkujesz emocje i komunikację.
          </p>

          <p className="mt-4 text-sm text-zinc-500">
            Najpierw spokój. Potem decyzje. Bez presji.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            3 proste zasady na teraz
          </h2>

          <ul className="mt-4 space-y-3 text-zinc-300">
            <li className="rounded-xl border border-zinc-800/70 bg-zinc-950/30 p-4">
              <p className="font-medium text-zinc-100">
                1) Jeden problem naraz
              </p>
              <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                Nie rozwiązujcie całego związku w jednej rozmowie. Wybierz jedną rzecz, którą chcesz dziś poprawić.
              </p>
            </li>

            <li className="rounded-xl border border-zinc-800/70 bg-zinc-950/30 p-4">
              <p className="font-medium text-zinc-100">
                2) Najpierw regulacja napięcia
              </p>
              <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                Jeśli czujesz spięcie w ciele — przerwa 10 minut robi więcej niż kolejne zdania “na siłę”.
              </p>
            </li>

            <li className="rounded-xl border border-zinc-800/70 bg-zinc-950/30 p-4">
              <p className="font-medium text-zinc-100">
                3) Opisuj, nie oskarżaj
              </p>
              <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                “Czuję presję i zamykam się” działa lepiej niż “Ty zawsze…”.
              </p>
            </li>
          </ul>

          <div className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5">
            <h3 className="text-base font-semibold text-zinc-100">
              Jak zacząć rozmowę (bez pustki)
            </h3>

            <div className="mt-4 grid grid-cols-1 gap-3">
              <Link
                href="/navimind?state=relationship"
                className="rounded-xl bg-cyan-500/15 px-4 py-3 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
              >
                Pomóż mi przerwać schemat kłótni i wrócić do spokoju →
              </Link>

              <Link
                href="/navimind?state=relationship"
                className="rounded-xl bg-zinc-900/40 px-4 py-3 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-800/70 hover:bg-zinc-800/50 transition"
              >
                Napisz mi spokojną wersję tego, co chcę powiedzieć →
              </Link>

              <Link
                href="/navimind?state=relationship"
                className="rounded-xl bg-zinc-900/40 px-4 py-3 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-800/70 hover:bg-zinc-800/50 transition"
              >
                Pomóż mi zrozumieć, czy to kryzys do naprawy czy sygnał ostrzegawczy →
              </Link>
            </div>

            <p className="mt-4 text-xs text-zinc-500">
              Rozmowa jest prywatna. Możesz wyjść w każdej chwili.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/navimind?state=relationship"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-5 py-3 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Wejdź do rozmowy →
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-5 py-3 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Wróć na start
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function ProblemWZwiazkuPage() {
  return (
    <Suspense>
      <Content />
    </Suspense>
  );
}