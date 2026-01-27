import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";

export default function WhereFatherPage() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · stan</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Chodzi o ojcostwo
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Ojcostwo to nie “rola”. To relacja — i dlatego emocje potrafią
            przychodzić mocno. Tu nie chodzi o bycie idealnym. Chodzi o bycie
            obecnym i stabilnym.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Na czym chcesz się oprzeć dziś?
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Wybierz jeden kierunek. Reszta nie ucieknie.
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4">
              <p className="text-sm text-zinc-400">Spokój</p>
              <p className="mt-1 text-zinc-200 leading-relaxed">
                Co mogę zrobić, żeby nie przenosić napięcia na dziecko?
              </p>
              <p className="mt-2 text-xs text-zinc-500">
                Dziś wygrywa “ciszej i wolniej”, nie “mocniej”.
              </p>
            </div>

            <Link
              href="/partners?tag=fatherhood"
              className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
            >
              <p className="text-sm text-zinc-400">Obecność</p>
              <p className="mt-1 font-semibold text-zinc-100">
                15 minut pełnej uwagi
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Bez telefonu. Prosty rytuał, który buduje relację.
              </p>
              <p className="mt-3 text-sm text-cyan-200">Zobacz wsparcie →</p>
            </Link>

            <Link
              href="/partners?tag=co-parenting"
              className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition sm:col-span-2"
            >
              <p className="text-sm text-zinc-400">Granice</p>
              <p className="mt-1 font-semibold text-zinc-100">
                Jedna rzecz, na którą się dziś nie zgodzę
              </p>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Ustalenia, komunikacja, spokojne “nie”. Bez wojny i bez gry w winę.
              </p>
              <p className="mt-3 text-sm text-cyan-200">Zobacz wsparcie →</p>
            </Link>
          </div>

          <Reset60 lang="pl" />

          {/* CO DALEJ */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-zinc-200">
              Co dalej?
            </h3>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/partners?tag=mental"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Gdy jest naprawdę ciężko</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Psycholog / psychiatra (wsparcie)
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Bez wstydu. Czasem jedna rozmowa robi różnicę.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz opcje →</p>
              </Link>

              <Link
                href="/partners?tag=law"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <p className="text-sm text-zinc-400">Formalności i spokój</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Polecani prawnicy / ustalenia
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Uporządkuj zasady, żeby nie żyć w napięciu.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz opcje →</p>
              </Link>

              <Link
                href="/partners?tag=community"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition sm:col-span-2"
              >
                <p className="text-sm text-zinc-400">Nie bądź z tym sam</p>
                <p className="mt-1 font-semibold text-zinc-100">
                  Zamknięte grupy / rozmowy z innymi ojcami
                </p>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Czasem wystarczy kontakt z ludźmi, którzy rozumieją.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Zobacz opcje →</p>
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/navimind?state=father"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              Chcę pogadać →
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Wróć do wyboru
            </Link>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Bez kont. Bez ocen. Bez zapisu rozmów.
          </p>
        </section>
      </div>
    </main>
  );
}