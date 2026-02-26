"use client";

import { useEffect, useState } from "react";

type Phase = "inhale" | "hold" | "exhale";

export default function BreathingTool() {
  const [phase, setPhase] = useState<Phase>("inhale");
  const [count, setCount] = useState(4);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      if (phase === "inhale" && count <= 1) {
        setPhase("hold");
        setCount(7);
      } else if (phase === "hold" && count <= 1) {
        setPhase("exhale");
        setCount(8);
      } else if (phase === "exhale" && count <= 1) {
        setPhase("inhale");
        setCount(4);
      } else {
        setCount((c) => c - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, count, running]);

  return (
    <div className="card-2026 p-8 text-center mt-10">
      <h3 className="text-xl font-semibold mb-4">Regulacja oddechu 4-7-8</h3>

      <div
        className={`mx-auto mb-6 h-40 w-40 rounded-full transition-all duration-1000 ${
          phase === "inhale"
            ? "scale-110 bg-[#334155]"
            : phase === "hold"
            ? "scale-110 bg-[#475569]"
            : "scale-90 bg-[#1E293B]"
        }`}
      />

      <div className="text-3xl font-bold mb-2">
        {phase.toUpperCase()} — {count}
      </div>

      <button
        onClick={() => setRunning(!running)}
        className="accent-bg px-6 py-2 rounded-xl text-sm"
      >
        {running ? "Zatrzymaj" : "Start"}
      </button>

      <p className="text-zinc-400 text-sm mt-4">
        Wdech 4s • Zatrzymaj 7s • Wydech 8s
      </p>
    </div>
  );
}