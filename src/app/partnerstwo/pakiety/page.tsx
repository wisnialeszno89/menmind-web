import Link from "next/link";

export default function PartnerPackagesPL() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm text-zinc-400">MenMind · partnerstwo</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Pakiety współpracy (orientacyjnie)
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          MenMind nie jest tablicą ogłoszeń. Wpuszczamy tylko rzeczy, które realnie
          pomagają. Poniżej masz widełki — finalnie dopasowujemy pakiet do branży,
          kraju i formy ekspozycji.
        </p>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            title="Starter"
            price="299 zł / mies."
            items={[
              "Wizytówka + link",
              "1 kategoria",
              "Weryfikacja ręczna",
              "Podstawowa ekspozycja",
            ]}
          />

          <Card
            title="PRO"
            price="999 zł / mies."
            highlight
            items={[
              "Lepsza ekspozycja",
              "Opis + CTA",
              "Priorytet w rotacji",
              "Szybsza publikacja po weryfikacji",
            ]}
          />

          <Card
            title="Premium"
            price="od 2990 zł / mies."
            items={[
              "Top placement",
              "Opcja wyłączności (kategoria/region)",
              "Dedykowana rekomendacja",
              "Indywidualne ustalenia",
            ]}
          />
        </section>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">Zniżki</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Dla partnerów, którzy nie znikają po tygodniu:
          </p>

          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>• -15% przy płatności kwartalnej</li>
            <li>• -25% przy płatności rocznej</li>
          </ul>

          <p className="mt-5 text-xs text-zinc-500">
            Ceny są orientacyjne. Wycena zależy od branży, regionu, formy ekspozycji i
            dostępności miejsc.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/partnerstwo"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              ← Wróć do partnerstwa
            </Link>

            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              Napisz do nas →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function Card({
  title,
  price,
  items,
  highlight = false,
}: {
  title: string;
  price: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur",
        highlight
          ? "border-cyan-500/30 ring-1 ring-cyan-400/20"
          : "border-zinc-800/70",
      ].join(" ")}
    >
      <p className="text-sm text-zinc-400">Pakiet</p>
      <h3 className="mt-1 text-2xl font-semibold text-zinc-100">{title}</h3>
      <p className="mt-2 text-lg font-semibold text-cyan-200">{price}</p>

      <ul className="mt-4 space-y-2 text-sm text-zinc-300">
        {items.map((x) => (
          <li key={x}>• {x}</li>
        ))}
      </ul>
    </div>
  );
}
