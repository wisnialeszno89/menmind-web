"use client"

import { useState } from "react"

export default function ZgloszeniePage() {

  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // 🔥 NA RAZIE FAKE SUBMIT (później podepniemy API)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="max-w-xl mx-auto py-24 text-center">

        <h1 className="text-3xl font-semibold mb-4">
          Dzięki za zgłoszenie
        </h1>

        <p className="text-gray-600">
          Skontaktujemy się z Tobą w ciągu 24h i przedstawimy kolejne kroki.
        </p>

      </div>
    )
  }

  return (

    <div className="max-w-xl mx-auto py-16 px-6">

      <h1 className="text-3xl font-semibold mb-6">
        Dołącz jako partner MenMind
      </h1>

      <p className="text-gray-600 mb-10">
        Wypełnij formularz — odezwiemy się i pokażemy Ci,
        jak możesz pozyskiwać klientów z platformy.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* NAZWA */}
        <input
          name="name"
          placeholder="Nazwa firmy / imię i nazwisko"
          className="w-full border p-3 rounded"
          required
        />

        <input
        name="company"
        placeholder="Nazwa firmy"
        className="w-full border p-3 rounded"
        />

        {/* EMAIL */}
        <input
          name="email"
          type="email"
          placeholder="Email kontaktowy"
          className="w-full border p-3 rounded"
          required
        />

        {/* TELEFON */}
        <input
          name="phone"
          placeholder="Telefon (opcjonalnie)"
          className="w-full border p-3 rounded"
        />

        {/* KATEGORIA */}
        <input
          name="category"
          placeholder="Czym się zajmujesz? (np. psycholog, trener)"
          className="w-full border p-3 rounded"
          required
        />

        {/* MIASTO */}
        <input
          name="city"
          placeholder="Miasto / obszar działania"
          className="w-full border p-3 rounded"
        />

        {/* STRONA */}
        <input
          name="website"
          placeholder="Strona www (jeśli masz)"
          className="w-full border p-3 rounded"
        />

        {/* PAKIET */}
        <select
          name="tier"
          className="w-full border p-3 rounded"
        >
          <option value="basic">Basic — 99 zł</option>
          <option value="pro">Pro — 249 zł</option>
          <option value="strategic">Strategic — 699 zł</option>
        </select>

        {/* WIADOMOŚĆ */}
        <textarea
          name="message"
          placeholder="Opisz krótko swoją działalność"
          className="w-full border p-3 rounded h-32"
        />

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90"
        >
          Wyślij zgłoszenie
        </button>

      </form>

    </div>

  )
}