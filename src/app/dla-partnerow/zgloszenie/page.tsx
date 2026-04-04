"use client"

import { useState } from "react"

export default function ZgloszeniePage() {

  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    const plan = data.tier as string

    try {

      await fetch("/api/partner/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const links:any = {
        basic: "https://navimind.lemonsqueezy.com/checkout/buy/7db3c5e5-defb-4a19-b69f-2e9fc7b421e7",
        pro: "https://navimind.lemonsqueezy.com/checkout/buy/4cfe43f8-f3e5-41b6-b76b-389aa02e6bab",
        strategic: "https://navimind.lemonsqueezy.com/checkout/buy/edd53edf-1441-46c4-b5a5-e844f80008f4"
      }

      window.location.href = links[plan]

    } catch (err) {
      alert("Błąd wysyłania. Spróbuj ponownie.")
    }

    setLoading(false)
  }

  return (

    <div className="max-w-xl mx-auto py-16 px-6">

      <h1 className="text-3xl font-semibold mb-6">
        Dołącz jako partner MenMind
      </h1>

      <p className="text-gray-600 mb-10">
        Wypełnij formularz i aktywuj wybrany pakiet.
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
          placeholder="Telefon"
          className="w-full border p-3 rounded"
        />

        <input
          name="category"
          placeholder="Czym się zajmujesz"
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
          placeholder="Strona www"
          className="w-full border p-3 rounded"
        />

        <select
          name="tier"
          className="w-full border p-3 rounded"
          required
        >
          <option value="basic">Basic — 99 zł / miesiąc</option>
          <option value="pro">Pro — 249 zł / miesiąc</option>
          <option value="strategic">Strategic — 699 zł / miesiąc</option>
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
          {loading ? "Przekierowanie..." : "Dołącz i przejdź do płatności"}
        </button>

      </form>

    </div>
  )
}