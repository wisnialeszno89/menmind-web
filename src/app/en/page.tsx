import WhereYouAreEN from "@/components/where/WhereYouAreEN";
import { MICROCOPY_EN } from "@/content/microcopy";

export default function HomeEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm text-zinc-400">Waypoint</p>

        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
          {MICROCOPY_EN.heroTitle}
        </h1>

        <p className="mt-4 text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          {MICROCOPY_EN.heroLead}
        </p>

        <div className="mt-10 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <WhereYouAreEN />
        </div>

        <p className="text-xs text-zinc-500 mt-10">
          {MICROCOPY_EN.footerNote}
        </p>
      </div>
    </main>
  );
}