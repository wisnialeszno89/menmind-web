import Link from "next/link";

export default function OjcostwoPage() {
  const modules = [
    {
      title: "Generator zabaw",
      desc: "Szybki pomysł na wspólny czas.",
      href: "/ojcostwo/zabawy",
    },
    {
      title: "Rytuał 15 minut",
      desc: "Codzienna obecność bez telefonu.",
      href: "/ojcostwo/rytual-15-min",
    },
    {
      title: "Plan awaryjny (3h)",
      desc: "Gotowy schemat na sobotę z dzieckiem.",
      href: "/ojcostwo/plan-awaryjny",
    },
  ];

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Ojcostwo
        </h1>

        <p className="mt-6 text-textMuted max-w-2xl">
          Nie musisz być idealny. Wystarczy, że jesteś obecny.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {modules.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="rounded-2xl border border-borderSoft p-8 hover:bg-navySoft transition"
            >
              <h2 className="text-xl font-medium">{m.title}</h2>
              <p className="mt-3 text-sm text-textMuted">{m.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}