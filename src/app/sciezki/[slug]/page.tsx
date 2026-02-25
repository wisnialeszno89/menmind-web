import { notFound } from "next/navigation";
import { sciezki } from "@/lib/sciezki";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export default function SciezkaPage({ params }: Props) {
  const sciezka = sciezki.find(
    (s) => s.slug === params.slug
  );

  if (!sciezka) return notFound();

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-3xl">
        {/* HEADER */}
        <h1 className="text-4xl font-semibold tracking-tight">
          {sciezka.title}
        </h1>

        {/* TRYB ORIENTACYJNY */}
<div className="mt-6 flex gap-6 text-sm uppercase tracking-wide">
  {[
    { label: "Kryzys", href: "/kryzys", key: "kryzys" },
    { label: "Odbudowa", href: "/odbicie", key: "odbicie" },
    { label: "Wzrost", href: "/wzrost", key: "wzrost" },
  ].map((mode) => (
    <Link
      key={mode.key}
      href={mode.href}
      className={
        sciezka.tryb === mode.key
          ? "text-accent font-semibold"
          : "text-textMuted hover:text-textPrimary"
      }
    >
      {mode.label}
    </Link>
  ))}
</div>

        {/* ETAPY */}
        <div className="mt-16 space-y-16">
          {sciezka.etapy.map((etap, etapIndex) => (
            <div
              key={etapIndex}
              className="rounded-2xl border border-borderSoft p-8"
            >
              <h2 className="text-2xl font-semibold">
                {etap.title}
              </h2>

              <p className="mt-4 text-textMuted">
                {etap.description}
              </p>

              {/* DLACZEGO */}
              {etap.why && (
                <div className="mt-8">
                  <h3 className="text-sm uppercase tracking-wide text-textMuted">
                    Dlaczego to działa
                  </h3>

                  <ul className="mt-4 space-y-2 text-sm text-textMuted">
                    {etap.why.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-accent">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* DZIAŁANIA */}
              <div className="mt-10">
                <h3 className="text-sm uppercase tracking-wide text-textMuted">
                  Działania
                </h3>

                <ul className="mt-4 space-y-3 text-sm">
                  {etap.actions.map((action, actionIndex) => (
                    <li
                      key={actionIndex}
                      className="flex gap-2 text-textMuted"
                    >
                      <span className="text-accent">•</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* DODATKOWE POŁĄCZENIE Z OJCOSTWEM */}
        {sciezka.slug === "ojciec-po-rozstaniu" && (
          <div className="mt-20 rounded-2xl border border-borderSoft bg-navySoft p-8">
            <h2 className="text-xl font-semibold">
              Narzędzia dla ojców
            </h2>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="/ojcostwo/zabawy"
                className="text-accent"
              >
                Generator zabaw →
              </a>

              <a
                href="/ojcostwo/rytual-15-min"
                className="text-accent"
              >
                Rytuał 15 minut →
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}