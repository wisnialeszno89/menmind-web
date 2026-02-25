"use client";

import { useState } from "react";

export default function BrainDumpPage() {
  const [text, setText] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold">
          Brain Dump
        </h1>

        <p className="mt-6 text-textMuted">
          Wyrzuć wszystko z głowy. Bez struktury.
        </p>

        <textarea
          className="mt-6 w-full rounded-xl border border-borderSoft bg-navySoft p-4 text-sm"
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="mt-10">
          <label className="text-sm text-textMuted">
            Jaka jest 1 rzecz, którą ruszysz?
          </label>

          <input
            className="mt-3 w-full rounded-xl border border-borderSoft bg-navySoft p-4 text-sm"
            value={focus}
            onChange={(e) => setFocus(e.target.value)}
          />
        </div>
      </div>
    </main>
  );
}