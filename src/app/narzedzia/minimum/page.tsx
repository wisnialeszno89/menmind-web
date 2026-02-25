"use client";

import { useState } from "react";

export default function MinimumPage() {
  const [checked, setChecked] = useState<string[]>([]);

  const tasks = [
    "7 godzin snu",
    "20 minut ruchu",
    "Zero alkoholu",
    "1 trudna rzecz",
  ];

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
          Minimum dnia
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