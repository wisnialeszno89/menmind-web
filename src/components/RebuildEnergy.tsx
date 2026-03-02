"use client";

import { useEffect, useState } from "react";
import { trackEvent } from "@/lib/tracking";

const plan = [
  "Dzień 1: Wstań 30 minut wcześniej.",
  "Dzień 2: 20 minut ruchu.",
  "Dzień 3: 2 litry wody.",
  "Dzień 4: Ustal 3 zadania.",
  "Dzień 5: Zrób odkładaną rzecz.",
  "Dzień 6: 60 minut bez telefonu wieczorem.",
  "Dzień 7: Zaplanuj kolejny tydzień."
];

export default function RebuildEnergy() {
  const [day, setDay] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("mm_rebuild_day");
    if (saved) setDay(Number(saved));
  }, []);

  function next() {
    if (day < 6) {
      const newDay = day + 1;
      setDay(newDay);
      localStorage.setItem("mm_rebuild_day", String(newDay));
      trackEvent("rebuild_progress", { day: newDay + 1 });
    }
  }

  return (
    <section className="p-8 border rounded-xl bg-blue-50 mt-16">
      <h2 className="text-xl font-semibold mb-6">7 dni odbudowy energii</h2>
      <p className="mb-6 font-medium">{plan[day]}</p>

      {day < 6 && (
        <button onClick={next} className="px-6 py-3 bg-black text-white rounded-lg">
          Zrobione
        </button>
      )}
    </section>
  );
}