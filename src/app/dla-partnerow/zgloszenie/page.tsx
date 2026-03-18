"use client"

import { useState } from "react"

export default function ZgloszeniePage() {

  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("/api/partner/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSent(true)
      } else {
        alert("Coś poszło nie tak. Spróbuj ponownie.")
      }

    } catch (err) {
      alert("Błąd połączenia. Spróbuj ponownie.")
    }

    setLoading(false)
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

        <input
          name="email"
          type="email"
          placeholder="Email kontaktowy"
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="phone"
          placeholder="Telefon (opcjonalnie)"
          className="w-full border p-3 rounded"
        />

        <input
          name="category"
          placeholder="Czym się zajmujesz? (np. psycholog, trener)"
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="city"
          placeholder="Miasto / obszar działania"
          className="w-full border p-3 rounded"
        />

        <input
          name="website"
          placeholder="Strona www (jeśli masz)"
          className="w-full border p-3 rounded"
        />

        <select
          name="tier"
          className="w-full border p-3 rounded"
        >
          <option value="basic">Basic — 99 zł</option>
          <option value="pro">Pro — 249 zł</option>
          <option value="strategic">Strategic — 699 zł</option>
        </select>

        <textarea
          name="message"
          placeholder="Opisz krótko swoją działalność"
          className="w-full border p-3 rounded h-32"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Wysyłanie..." : "Wyślij zgłoszenie"}
        </button>

      </form>

    </div>

  )
}