import Link from "next/link";

type StateTemplateProps = {
  title: string;
  description: string;
  stateKey: string;
};

export default function StateTemplate({
  title,
  description,
  stateKey,
}: StateTemplateProps) {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">{title}</h1>

      <p className="text-zinc-400 mb-10">{description}</p>

      <div className="space-y-4">
        <Link
          href={`/navimind?state=${stateKey}`}
          className="block rounded-md border border-zinc-800 p-4 hover:bg-zinc-800 transition"
        >
          Zatrzymaj się i pogadaj (Navimind)
        </Link>

        <Link
          href="/"
          className="text-sm text-zinc-500 inline-block mt-6 hover:text-zinc-300 transition"
        >
          ← Zmień punkt orientacyjny
        </Link>
      </div>
    </main>
  );
}
