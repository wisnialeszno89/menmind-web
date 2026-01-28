import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";
import MiniBadge from "@/components/ui/MiniBadge";
import { MessageCircle, Dumbbell, Users, Compass } from "lucide-react";

export default function WhereBreakupEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · breakup</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            After a breakup
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            It’s normal if your head feels messy right now.
            Today is not about winning a conversation — it’s about getting your steering wheel back.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-lg font-semibold text-zinc-100">For today</h2>
            <MiniBadge label="5–10 min" tone="info" />
          </div>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Don’t make big decisions today.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              If you feel pulled to text/call — wait 20 minutes.
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              One body action: walk / shower / eat something simple.
            </li>
          </ul>

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
                href="/en/navimind?state=breakup"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition hover:-translate-y-[1px] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <MessageCircle size={18} />
                    <p className="font-semibold text-zinc-100">
                      Navimind (talk it out)
                    </p>
                  </div>
                  <MiniBadge label="First" tone="priority" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  Calm your head and set direction.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>

              <Link
                href="/en/spec/training"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition hover:-translate-y-[1px] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <Dumbbell size={18} />
                    <p className="font-semibold text-zinc-100">
                      Training / movement
                    </p>
                  </div>
                  <MiniBadge label="Reset" tone="info" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  Break the loop by using your body.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
              </Link>

              <Link
                href="/en/spec/community"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition hover:-translate-y-[1px] hover:shadow-xl sm:col-span-2"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <Users size={18} />
                    <p className="font-semibold text-zinc-100">
                      Support groups / community
                    </p>
                  </div>
                  <MiniBadge label="People" tone="default" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  You don’t have to carry this alone.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/en/navimind?state=breakup"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
            >
              <span className="inline-flex items-center gap-2">
                <Compass size={16} />
                Get direction now →
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