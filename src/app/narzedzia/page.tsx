import Link from "next/link";

export default function NarzedziaPage() {
  const tools = [
    {
      title: "Reset 5 minut",
      desc: "Zatrzymaj napięcie. Uspokój układ nerwowy.",
      href: "/narzedzia/reset",
    },
    {
      title: "Minimum dnia",
      desc: "Zrób minimum. Wystarczy.",
      href: "/narzedzia/minimum",
    },
    {
      title: "Brain Dump",
      desc: "Wyrzuć chaos z głowy.",
      href: "/narzedzia/brain-dump",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Narzędzia
        </h1>

        <p className="mt-6 text-textMuted max-w-2xl">
          Krótkie moduły do działania. Bez logowania. Bez teorii.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-2xl border border-borderSoft p-8 hover:bg-navySoft transition"
            >
              <h2 className="text-xl font-medium">
                {tool.title}
              </h2>

              <p className="mt-3 text-sm text-textMuted">
                {tool.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}