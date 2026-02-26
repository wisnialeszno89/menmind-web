"use client";

import { useEffect, useState } from "react";

const defaultTasks = [
  "1 rozmowa bez telefonu",
  "1 wspólna aktywność (30–60 min)",
  "1 pytanie o emocje dziecka",
  "1 moment fizycznej obecności (spacer / zabawa)",
];

export default function FatherPlanTool() {
  const [tasks, setTasks] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const saved = localStorage.getItem("menmind-father-plan");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  const toggleTask = (index: number) => {
    const updated = [...tasks];
    updated[index] = !updated[index];
    setTasks(updated);
    localStorage.setItem("menmind-father-plan", JSON.stringify(updated));
  };

  const completed = tasks.filter(Boolean).length;

  return (
    <div className="card-2026 p-8 bg-white text-zinc-900 mt-8">
      <h3 className="text-xl font-semibold mb-6">
        Plan tygodnia z dzieckiem
      </h3>

      <div className="space-y-4">
        {defaultTasks.map((task, i) => (
          <label key={i} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={tasks[i]}
              onChange={() => toggleTask(i)}
              className="h-4 w-4"
            />
            <span>{task}</span>
          </label>
        ))}
      </div>

      <div className="mt-6 text-sm text-zinc-600">
        Wykonane: {completed} / {defaultTasks.length}
      </div>

      <div className="mt-4 text-xs text-zinc-500">
        Dane przechowywane lokalnie w przeglądarce.
      </div>
    </div>
  );
}