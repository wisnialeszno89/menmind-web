"use client";

import { useState } from "react";

export default function PartnerFormPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("/api/partner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.currentTarget.reset();
    }
  };

  return (
    <div className="text-neutral-200">
      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-blue-500">
          Zostań partnerem
        </h1>
        <div className="h-px w-16 bg-blue-500 mb-12" />

        <p className="text-lg text-neutral-300 mb-12">
          Jeśli realnie wspierasz mężczyzn w decyzjach, kryzysie
          lub rozwoju – możesz zgłosić swoją działalność.
        </p>

        {success && (
          <p className="mb-6 text-green-400">
            Zgłoszenie zostało wysłane.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <input name="name" placeholder="Imię i nazwisko" required className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg" />

          <input name="company" placeholder="Nazwa działalności" required className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg" />

          <input name="city" placeholder="Miasto" required className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg" />

          <input name="category" placeholder="Kategoria" required className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg" />

          <input name="website" placeholder="Strona www" className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg" />

          <input name="email" type="email" placeholder="Email kontaktowy" required className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg" />

          <input name="phone" placeholder="Telefon" className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg" />

          <textarea name="description" placeholder="Krótki opis działalności" required className="w-full bg-neutral-900 border border-neutral-800 p-4 rounded-lg min-h-[120px]" />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 hover:bg-blue-400 text-black font-semibold px-6 py-3 rounded-lg transition"
          >
            {loading ? "Wysyłanie..." : "Wyślij zgłoszenie"}
          </button>

        </form>

      </div>
    </div>
  );
}