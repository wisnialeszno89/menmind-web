"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/tracking";

const plan = [
  "Dzień 1: 10 minut oddychania. Zero wielkich decyzji.",
  "Dzień 2: Jedna mała rzecz porządkowa.",
  "Dzień 3: 20 minut ruchu.",
  "Dzień 4: Spisz rzeczy, których nie kontrolujesz.",
  "Dzień 5: Skontaktuj się z jedną osobą.",
  "Dzień 6: 24h bez dużych decyzji.",
  "Dzień 7: Jedna rzecz, którą zrobiłeś dobrze."
];

export default function CrisisStabilization() {
  const [day, setDay] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("mm_crisis_day");
    if (saved) setDay(Number(saved));
  }, []);

  function next() {
    if (day < 6) {
      const newDay = day + 1;
      setDay(newDay);
      localStorage.setItem("mm_crisis_day", String(newDay));
      trackEvent("crisis_progress", { day: newDay + 1 });
    }
  }

  function reset() {
    setDay(0);
    localStorage.setItem("mm_crisis_day", "0");
  }

  return (
    <section className="p-8 border rounded-xl bg-red-50 mt-16">
      <h2 className="text-xl font-semibold mb-6">7 dni stabilizacji</h2>

      <p className="mb-6 font-medium">{plan[day]}</p>

      <div className="flex gap-4">
        {day < 6 && (
          <button onClick={next} className="px-6 py-3 bg-black text-white rounded-lg">
            Zrobione
          </button>
        )}
        <button onClick={reset} className="px-6 py-3 border rounded-lg">
          Zacznij od początku
        </button>
      </div>
    </section>
  );
}