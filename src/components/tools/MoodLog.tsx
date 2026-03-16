"use client";

import { useEffect, useState } from "react";

type Entry = {
  date: string;
  mood: string;
  note: string;
};

export default function MoodLog() {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("menmind-mood");
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  const saveEntry = () => {
    if (!mood) return;

    const newEntry = {
      date: new Date().toLocaleDateString(),
      mood,
      note,
    };

    const updated = [newEntry, ...entries];
    setEntries(updated);
    localStorage.setItem("menmind-mood", JSON.stringify(updated));

    setMood("");
    setNote("");
  };

  return (
    <div className="card-2026 p-8 mt-10">
      <h3 className="text-xl font-semibold mb-4">Dziennik nastroju</h3>

      <input
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        placeholder="Jak się dziś czuję?"
        className="w-full mb-4 bg-zinc-800/50 p-3 rounded-lg"
      />

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Dlaczego?"
        className="w-full mb-4 bg-zinc-800/50 p-3 rounded-lg"
      />

      <button
        onClick={saveEntry}
        className="accent-bg px-6 py-2 rounded-xl text-sm"
      >
        Zapisz
      </button>

      <div className="mt-6 space-y-4">
        {entries.slice(0, 5).map((e, i) => (
          <div key={i} className="text-sm border-t border-zinc-700 pt-3">
            <div className="text-zinc-400">{e.date}</div>
            <div className="font-semibold">{e.mood}</div>
            <div className="text-zinc-400">{e.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}