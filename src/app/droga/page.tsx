import Link from "next/link";

export default function DrogaPage() {
  const modes = [
    {
      title: "Kryzys",
      desc: "Chaos. Rozpad. Stabilizacja.",
      href: "/kryzys",
    },
    {
      title: "Odbudowa",
      desc: "Struktura. Porządek. Fundament.",
      href: "/odbicie",
    },
    {
      title: "Wzrost",
      desc: "Siła. Charakter. Kierunek.",
      href: "/wzrost",
    },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            Gdzie jesteś?
          </h1>

          <p className="mt-6 text-textMuted">
            Wybierz stan, nie idealną wersję siebie.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
  {modes.map((mode, index) => (
    <Link
      key={mode.href}
      href={mode.href}
      className={`rounded-2xl border border-borderSoft p-10 text-center hover:bg-navySoft transition fade-up ${
        index === 0
          ? "fade-delay-1"
          : index === 1
          ? "fade-delay-2"
          : "fade-delay-3"
      }`}
    >
      <h2 className="text-2xl font-medium">
        {mode.title}
      </h2>

      <p className="mt-4 text-sm text-textMuted">
        {mode.desc}
      </p>
    </Link>
  ))}
</div>
      </div>
    </main>
  );
}