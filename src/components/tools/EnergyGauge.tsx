"use client";

import { useState, useEffect } from "react";

type Entry = {
  date: string;
  score: number;
};

export default function EnergyGauge() {
  const [sleep, setSleep] = useState(3);
  const [stress, setStress] = useState(3);
  const [movement, setMovement] = useState(3);
  const [relations, setRelations] = useState(3);
  const [history, setHistory] = useState<Entry[]>([]);

  const score = Math.round((sleep + (6 - stress) + movement + relations) / 4);

  useEffect(() => {
    const saved = localStorage.getItem("menmind-energy");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const saveScore = () => {
    const newEntry = {
      date: new Date().toLocaleDateString(),
      score,
    };

    const updated = [newEntry, ...history].slice(0, 7);
    setHistory(updated);
    localStorage.setItem("menmind-energy", JSON.stringify(updated));
  };

  const interpretation =
    score <= 2
      ? "Niski poziom energii. Priorytet: regeneracja."
      : score === 3
      ? "Stabilnie. Utrzymuj rytm."
      : "Dobry poziom energii. Możesz działać.";

  return (
    <div className="card-2026 p-8 mt-10">
      <h3 className="text-xl font-semibold mb-6">Mapa energii dnia</h3>

      {[
        { label: "Sen", value: sleep, setter: setSleep },
        { label: "Stres", value: stress, setter: setStress },
        { label: "Ruch", value: movement, setter: setMovement },
        { label: "Relacje", value: relations, setter: setRelations },
      ].map((item) => (
        <div key={item.label} className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>{item.label}</span>
            <span>{item.value}/5</span>
          </div>
          <input
            type="range"
            min="1"
            max="5"
            value={item.value}
            onChange={(e) => item.setter(Number(e.target.value))}
            className="w-full"
          />
        </div>
      ))}

      <div className="mt-6 text-center">
        <div className="text-4xl font-bold mb-2">{score}/5</div>
        <p className="text-zinc-400 text-sm">{interpretation}</p>
      </div>

      <button
        onClick={saveScore}
        className="accent-bg px-6 py-2 rounded-xl text-sm mt-6"
      >
        Zapisz dzisiaj
      </button>

      {history.length > 0 && (
        <div className="mt-8">
          <h4 className="text-sm text-zinc-400 mb-3">Ostatnie 7 dni</h4>
          <div className="flex gap-2 items-end h-24">
            {history
              .slice()
              .reverse()
              .map((entry, i) => (
                <div key={i} className="flex-1 text-center">
                  <div
                    className="bg-[#334155] rounded-t-md transition-all"
                    style={{ height: `${entry.score * 20}%` }}
                  />
                  <div className="text-[10px] text-zinc-500 mt-1">
                    {entry.date.slice(0, 5)}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}