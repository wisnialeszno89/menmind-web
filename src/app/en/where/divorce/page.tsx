import Link from "next/link";
import Reset60 from "@/components/tools/Reset60";
import MiniBadge from "@/components/ui/MiniBadge";
import { Scale, MessageCircle, HeartPulse, Users, ShieldCheck } from "lucide-react";

export default function WhereDivorceEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <p className="text-sm text-zinc-400">MenMind · divorce</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            Going through a divorce
          </h1>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            Divorce hurts. But chaos costs the most.
            First: calm. Then decisions and paperwork.
          </p>
        </header>

        <section className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-lg font-semibold text-zinc-100">For today</h2>
            <MiniBadge label="10 min" tone="priority" />
          </div>

          <ul className="mt-4 space-y-3 text-zinc-300 leading-relaxed">
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Write down the 3 most urgent things (not 30).
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              Pick one thing you protect today (child / money / contact).
            </li>
            <li>
              <span className="text-cyan-200 font-medium">•</span>{" "}
              No emotional fights. Paper beats nerves.
            </li>
          </ul>

          <Reset60 lang="en" />

          <div className="mt-10">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-zinc-200">
                What makes sense now?
              </h3>
              <MiniBadge label="Priorities" tone="priority" />
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/en/spec/law"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition hover:-translate-y-[1px] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <Scale size={18} />
                    <p className="font-semibold text-zinc-100">
                      Legal / mediation
                    </p>
                  </div>
                  <MiniBadge label="Priority" tone="priority" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  Agreements, contact rules, child support, protection.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>

              <Link
                href="/en/navimind?state=divorce"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition hover:-translate-y-[1px] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <MessageCircle size={18} />
                    <p className="font-semibold text-zinc-100">
                      Navimind (clear your head)
                    </p>
                  </div>
                  <MiniBadge label="Calm" tone="info" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  A plan instead of chaos.
                </p>
                <p className="mt-3 text-sm text-cyan-200">Open →</p>
              </Link>

              <Link
                href="/en/spec/psychologists"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition hover:-translate-y-[1px] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <HeartPulse size={18} />
                    <p className="font-semibold text-zinc-100">
                      Psychologist (support)
                    </p>
                  </div>
                  <MiniBadge label="Stability" tone="default" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  When emotions hit hard and sleep collapses.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
              </Link>

              <Link
                href="/en/spec/community"
                className="rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-4 hover:bg-zinc-900/50 transition hover:-translate-y-[1px] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-zinc-200">
                    <Users size={18} />
                    <p className="font-semibold text-zinc-100">
                      Support groups
                    </p>
                  </div>
                  <MiniBadge label="Not alone" tone="default" />
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  People who understand the situation.
                </p>
                <p className="mt-3 text-sm text-cyan-200">See →</p>
              </Link>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/en"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-800/60 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700 hover:bg-zinc-800 transition"
            >
              ← Back home
            </Link>

            <span className="inline-flex items-center gap-2 text-xs text-zinc-500">
              <ShieldCheck size={14} />
              Stability wins. Emotions can wait.
            </span>
          </div>

          <p className="mt-6 text-xs text-zinc-500">
            Divorce is a process. Your job is to get through it smart — not bloody.
          </p>
        </section>
      </div>
    </main>
  );
}