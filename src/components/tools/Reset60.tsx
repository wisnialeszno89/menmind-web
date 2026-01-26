"use client";

import { useState } from "react";

type Props = {
  title?: string;
  lang?: "pl" | "en";
};

export default function Reset60({ title, lang = "pl" }: Props) {
  const [done, setDone] = useState(false);

  const copy =
    lang === "en"
      ? {
          label: title ?? "60-second reset",
          lead:
            "Not a therapy trick. Just a quick state change: breath + body + one clean thought.",
          step1Title: "1) Breathe (20 sec)",
          step1Text: "Inhale through nose 4s → exhale 6s. Repeat 3 times.",
          step2Title: "2) Release tension (20 sec)",
          step2Text:
            "Tense your fists + jaw for 3 seconds → release. Repeat 5 times.",
          step3Title: "3) One honest sentence (20 sec)",
          step3Text:
            "Finish this: “Right now, the real problem is…” (keep it simple).",
          doneBtn: "Done",
          doneText:
            "Good. You didn’t fix everything. You just regained a bit of control — that’s enough for the next step.",
        }
      : {
          label: title ?? "Reset 60 sekund",
          lead:
            "To nie sztuczka z terapii. To szybka zmiana stanu: oddech + ciało + jedna czysta myśl.",
          step1Title: "1) Oddech (20 sek)",
          step1Text: "Wdech nosem 4s → wydech 6s. Powtórz 3 razy.",
          step2Title: "2) Zbij napięcie (20 sek)",
          step2Text:
            "Napnij dłonie + szczękę na 3 sekundy → puść. Powtórz 5 razy.",
          step3Title: "3) Jedno zdanie prawdy (20 sek)",
          step3Text:
            "Dokończ: „Prawdziwy problem teraz to…” (prosto, bez eseju).",
          doneBtn: "Zrobione",
          doneText:
            "Dobrze. Nie naprawiłeś wszystkiego. Ale odzyskałeś kawałek steru — i to wystarczy na następny krok.",
        };

  return (
    <section className="mt-8 rounded-2xl border border-zinc-800/70 bg-zinc-950/30 p-5 shadow-sm shadow-black/20 backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-100">
            {copy.label}
          </h3>
          <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
            {copy.lead}
          </p>
        </div>

        <button
          onClick={() => setDone(true)}
          className="shrink-0 rounded-xl bg-cyan-500/15 px-3 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
        >
          {copy.doneBtn}
        </button>
      </div>

      <div className="mt-4 space-y-3 text-sm text-zinc-300 leading-relaxed">
        <div>
          <p className="font-medium text-zinc-100">{copy.step1Title}</p>
          <p className="text-zinc-400">{copy.step1Text}</p>
        </div>

        <div>
          <p className="font-medium text-zinc-100">{copy.step2Title}</p>
          <p className="text-zinc-400">{copy.step2Text}</p>
        </div>

        <div>
          <p className="font-medium text-zinc-100">{copy.step3Title}</p>
          <p className="text-zinc-400">{copy.step3Text}</p>
        </div>
      </div>

      {done && (
        <p className="mt-4 text-sm text-emerald-200">
          ✅ {copy.doneText}
        </p>
      )}
    </section>
  );
}