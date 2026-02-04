import Link from "next/link";

export default function PartnerPackagesEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm text-zinc-400">MenMind · partnership</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Partnership packages (estimates)
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          MenMind is not a random listing board. We only publish real value.
          Prices below are estimates — the final offer depends on the niche,
          country, and exposure type.
        </p>

        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            title="Starter"
            price="€69 / month"
            items={[
              "Listing + link",
              "1 category",
              "Manual verification",
              "Basic exposure",
            ]}
          />

          <Card
            title="PRO"
            price="€229 / month"
            highlight
            items={[
              "Better exposure",
              "Description + CTA",
              "Priority rotation",
              "Faster publishing after review",
            ]}
          />

          <Card
            title="Premium"
            price="from €699 / month"
            items={[
              "Top placement",
              "Optional exclusivity (category/region)",
              "Dedicated recommendation",
              "Custom terms",
            ]}
          />
        </section>

        <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">Discounts</h2>
          <p className="mt-2 text-sm text-zinc-400">
            For partners who play the long game:
          </p>

          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>• -15% quarterly billing</li>
            <li>• -25% yearly billing</li>
          </ul>

          <p className="mt-5 text-xs text-zinc-500">
            These are estimates. Final pricing depends on niche, region, available slots,
            and exposure scope.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/en/partnership"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              ← Back to partnership
            </Link>

            <Link
              href="/en/contact"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              Contact us →
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
      <p className="text-sm text-zinc-400">Package</p>
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
