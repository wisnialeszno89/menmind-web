import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";
import MiniBadge from "@/components/ui/MiniBadge";
import { Compass, Dumbbell, MountainSnow, Users } from "lucide-react";

export default function WhereReadyEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · ready</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Ready for change
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Ready = movement. No overthinking. Today is a step forward.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-lg font-semibold text-zinc-100">
              3 steps for today
            </h2>
            <MiniBadge label="10–15 min" tone="info" />
          </div>

          <ol className="mt-4 space-y-3 text-zinc-300 leading-relaxed list-decimal list-inside">
            <li>Pick one small but real thing you finish today.</li>
            <li>Do 20 minutes of consistency — no analysis.</li>
            <li>Set one boundary: what you won’t do today (drama, chaos, scrolling).</li>
          </ol>

          <Reset60 lang="en" />

          <div className="mt-10">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-zinc-200">
                What makes sense now?
              </h3>
              <MiniBadge label="Start" tone="start" />
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/en/spec/trips"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <MountainSnow size={18} />
                    <p className="font-semibold">Trips / outdoor</p>
                  </div>
                  <MiniBadge label="30–60 min" tone="default" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  New environment = fresh energy.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
              </Link>

              <Link
                href="/en/spec/training"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <Dumbbell size={18} />
                    <p className="font-semibold">Training / sport</p>
                  </div>
                  <MiniBadge label="20–40 min" tone="default" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  Consistency builds calm fast.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
              </Link>

              <Link
                href="/en/spec/nightlife"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition sm:col-span-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <Users size={18} />
                    <p className="font-semibold">Clubs / bars / nightlife</p>
                  </div>
                  <MiniBadge label="soon" tone="soon" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  New environment and social contact — without pressure.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=ready"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              <span className="inline-flex items-center gap-2">
                <Compass size={16} />
                Talk now →
              </span>
            </Link>

            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}