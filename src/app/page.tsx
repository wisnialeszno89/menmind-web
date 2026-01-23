import WhereYouAre from "@/components/where/WhereYouAre";
import { MICROCOPY } from "@/content/microcopy";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl md:text-5xl font-semibold mb-4">
        {MICROCOPY.heroTitle}
      </h1>

      <p className="text-zinc-400 max-w-xl mb-10">
        {MICROCOPY.heroLead}
      </p>

      <WhereYouAre />

      <p className="text-xs text-zinc-500 mt-10">
        {MICROCOPY.footerNote}
      </p>
    </main>
  );
}
