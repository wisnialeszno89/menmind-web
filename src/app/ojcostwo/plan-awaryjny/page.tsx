"use client";

import { useState } from "react";

const tasks = [
  "Wyjście z domu (park / rower / spacer).",
  "Wspólne jedzenie bez telefonu.",
  "Ruch przez minimum 30 minut.",
  "Jedna spokojna rozmowa.",
];

export default function PlanPage() {
  const [checked, setChecked] = useState<string[]>([]);

  const toggle = (task: string) => {
    setChecked((prev) =>
      prev.includes(task)
        ? prev.filter((t) => t !== task)
        : [...prev, task]
    );
  };

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold">
          Plan awaryjny (3h)
        </h1>

        <div className="mt-10 space-y-4">
          {tasks.map((task) => (
            <div
              key={task}
              onClick={() => toggle(task)}
              className="cursor-pointer rounded-xl border border-borderSoft p-4 flex items-center gap-4"
            >
              <div
                className={`h-5 w-5 rounded border ${
                  checked.includes(task)
                    ? "bg-accent border-accent"
                    : "border-borderSoft"
                }`}
              />
              <span
                className={
                  checked.includes(task)
                    ? "line-through text-textMuted"
                    : ""
                }
              >
                {task}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}