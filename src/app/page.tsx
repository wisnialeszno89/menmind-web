import WhereYouAre from "@/components/where/WhereYouAre";
import { MICROCOPY } from "@/content/microcopy";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm text-zinc-400">Waypoint</p>

        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
          {MICROCOPY.heroTitle}
        </h1>

        <p className="mt-4 text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          {MICROCOPY.heroLead}
        </p>

        <div className="mt-10 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <WhereYouAre />
        </div>

        <p className="text-xs text-zinc-500 mt-10">
          {MICROCOPY.footerNote}
        </p>
      </div>
    </main>
  );
}