import Link from "next/link";

type Proposal = {
  id: string;
  title: string;
  desc: string;
  href?: string;
  comingSoon?: boolean;
};

const PROPOSALS_EN: Proposal[] = [
  {
    id: "navimind",
    title: "Navimind – talk 1:1",
    desc: "Talk without judgment. Clear the chaos and regain direction.",
    href: "/en/navimind",
  },
  {
    id: "psychologists",
    title: "Psychologists",
    desc: "Support, structure and clarity when emotions take over.",
    comingSoon: true,
  },
  {
    id: "psychiatrists",
    title: "Psychiatrists",
    desc: "Medical support when sleep collapses and symptoms are too strong.",
    comingSoon: true,
  },
  {
    id: "law",
    title: "Legal / mediation",
    desc: "Divorce, fatherhood, agreements, custody, paperwork. Practical support.",
    comingSoon: true,
  },
  {
    id: "groups",
    title: "Support groups",
    desc: "Private men’s groups. No explaining. No shame.",
    comingSoon: true,
  },
  {
    id: "training",
    title: "Training / sport",
    desc: "Regulate stress through your body. The simplest mental reset.",
    comingSoon: true,
  },
  {
    id: "trips",
    title: "Trips / outdoor",
    desc: "New environment. Movement. People. Nature.",
    comingSoon: true,
  },
  {
    id: "nightlife",
    title: "Clubs / bars / nightlife",
    desc: "Social option. Going out, events, meeting people again.",
    comingSoon: true,
  },
];

export default function SuggestionsPageEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10">
          <p className="text-sm text-zinc-400">MenMind · suggestions</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Suggestions
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Full list of available directions and tools.  
            This is a map — you choose what makes sense right now.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-4">
          {PROPOSALS_EN.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur"
            >
              <h2 className="text-lg font-semibold text-zinc-100">
                {p.title}
              </h2>

              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-5 flex items-center justify-between">
                {p.href ? (
                  <Link
                    href={p.href}
                    className="text-sm font-medium text-cyan-200 hover:underline"
                  >
                    Open →
                  </Link>
                ) : (
                  <span className="text-sm text-zinc-500">
                    Partners coming soon
                  </span>
                )}

                {p.comingSoon && (
                  <span className="text-xs text-zinc-500">
                    In progress
                  </span>
                )}
              </div>
            </div>
          ))}
        </section>

        <p className="mt-12 text-xs text-zinc-500">
          No accounts. No judgment. No saved conversations.
        </p>
      </div>
    </main>
  );
}