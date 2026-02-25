"use client";

import { useState } from "react";

type AgeGroup = "3-5" | "6-9" | "10+";

const ideas: Record<AgeGroup, string[]> = {
  "3-5": [
    "Budujecie fort z koców.",
    "Wyścig zwierząt po salonie.",
    "Malowanie palcami.",
    "Zabawa w sklep.",
    "Mini tor przeszkód w domu.",
  ],
  "6-9": [
    "Budowa bazy z Lego.",
    "Wspólne gotowanie prostego dania.",
    "Turniej piłki na podwórku.",
    "Mapa skarbów i poszukiwania.",
    "Gra planszowa – bez telefonu.",
  ],
  "10+": [
    "Wspólny trening (20 min).",
    "Budowa czegoś razem (np. półka).",
    "Wypad rowerowy.",
    "Rozmowa przy spacerze.",
    "Projekt: zaplanujcie wyjazd.",
  ],
};

export default function ZabawyPage() {
  const [age, setAge] = useState<AgeGroup>("3-5");
  const [idea, setIdea] = useState<string | null>(null);

  const generate = () => {
    const list = ideas[age];
    const random = list[Math.floor(Math.random() * list.length)];
    setIdea(random);
  };

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold">
          Generator zabaw
        </h1>

        <div className="mt-10 flex gap-4">
          {(["3-5", "6-9", "10+"] as AgeGroup[]).map((group) => (
            <button
              key={group}
              onClick={() => setAge(group)}
              className={`px-4 py-2 rounded-xl border ${
                age === group
                  ? "bg-accent text-black border-accent"
                  : "border-borderSoft text-textMuted"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        <button
          onClick={generate}
          className="mt-8 rounded-xl bg-accent px-6 py-3 text-black font-medium"
        >
          Losuj pomysł
        </button>

        {idea && (
          <div className="mt-8 rounded-2xl border border-borderSoft p-6 bg-navySoft">
            {idea}
          </div>
        )}
      </div>
    </main>
  );
}