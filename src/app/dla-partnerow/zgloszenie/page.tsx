"use client";

import { useState } from "react";

export default function ZgloszeniePartneraPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="bg-[#111827] text-zinc-100 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-semibold text-blue-500">
            Dziękujemy za zgłoszenie
          </h1>
          <p className="text-zinc-400">
            Odpowiemy w ciągu 48 godzin.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#111827] text-zinc-100">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-8 text-blue-500">
          Zgłoszenie partnera
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            placeholder="Nazwa działalności"
            required
            className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded-lg"
          />

          <input
            type="text"
            placeholder="Miasto"
            required
            className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded-lg"
          />

          <select
            required
            className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded-lg"
          >
            <option value="">Obszar działalności</option>
            <option>Prawo</option>
            <option>Psycholog</option>
            <option>Mediacja</option>
            <option>Finanse</option>
            <option>Trening</option>
          </select>

          <textarea
            placeholder="Krótki opis działalności"
            rows={4}
            required
            className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded-lg"
          />

          <input
            type="email"
            placeholder="Adres e-mail"
            required
            className="w-full p-3 bg-neutral-900 border border-neutral-800 rounded-lg"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-lg font-semibold"
          >
            Wyślij zgłoszenie
          </button>

        </form>

      </div>
    </main>
  );
}