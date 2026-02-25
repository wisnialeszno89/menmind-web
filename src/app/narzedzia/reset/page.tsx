"use client";

import { useState } from "react";

export default function ResetPage() {
  const [done, setDone] = useState(false);
  const [note, setNote] = useState("");

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold">
          Reset 5 minut
        </h1>

        <p className="mt-6 text-textMuted">
          Oddychaj wolno przez 3 minuty.
          Wdech 4 sekundy. Wydech 6 sekund.
        </p>

        <div className="mt-10">
          <label className="block text-sm text-textMuted">
            Co teraz najbardziej Cię spina?
          </label>

          <textarea
            className="mt-3 w-full rounded-xl border border-borderSoft bg-navySoft p-4 text-sm"
            rows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <button
          onClick={() => setDone(true)}
          className="mt-8 rounded-xl bg-accent px-6 py-3 text-black font-medium"
        >
          Zrobione
        </button>

        {done && (
          <div className="mt-6 text-accent">
            Dobrze. Teraz wybierz 1 mały ruch i zrób go.
          </div>
        )}
      </div>
    </main>
  );
}