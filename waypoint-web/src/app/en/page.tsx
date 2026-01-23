import EnWhereYouAre from "../../components/where/EnWhereYouAre";
import { MICROCOPY_EN } from "../../content/microcopy.en";

export default function EnHome() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl md:text-5xl font-semibold mb-4">
        {MICROCOPY_EN.heroTitle}
      </h1>

      <p className="text-zinc-400 max-w-xl mb-10">
        {MICROCOPY_EN.heroLead}
      </p>

      <EnWhereYouAre />

      <p className="text-xs text-zinc-500 mt-10">
        {MICROCOPY_EN.footerNote}
      </p>
    </main>
  );
}