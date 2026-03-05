"use client"

import { useState } from "react"

export default function PartnerApplicationPage() {

  const [sent, setSent] = useState(false)

  async function handleSubmit(e: any) {

    e.preventDefault()

    const form = new FormData(e.target)

    await fetch("/api/partner/application", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        company: form.get("company"),
        category: form.get("category"),
        city: form.get("city"),
        website: form.get("website"),
        email: form.get("email")
      })
    })

    setSent(true)
  }

  if (sent) {
    return (

      <main className="min-h-screen flex items-center justify-center bg-gray-100">

        <div className="text-center max-w-xl">

          <h1 className="text-3xl font-semibold mb-6">
            Dziękujemy za zgłoszenie
          </h1>

          <p className="text-gray-600">
            Skontaktujemy się z Tobą wkrótce.
          </p>

        </div>

      </main>

    )
  }

  return (

    <main className="bg-gray-100 min-h-screen">

      <div className="max-w-xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6">
          Zgłoszenie partnera
        </h1>

        <p className="text-gray-600 mb-12">
          Jeśli Twoja działalność pomaga mężczyznom
          rozwiązywać realne problemy lub rozwijać życie —
          możesz zostać partnerem platformy MenMind.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            name="name"
            placeholder="Twoje imię"
            required
            className="w-full border border-gray-300 p-3 rounded"
          />

          <input
            name="company"
            placeholder="Nazwa firmy / działalności"
            required
            className="w-full border border-gray-300 p-3 rounded"
          />

          <input
            name="category"
            placeholder="Kategoria (np. psycholog, mediator)"
            required
            className="w-full border border-gray-300 p-3 rounded"
          />

          <input
            name="city"
            placeholder="Miasto"
            required
            className="w-full border border-gray-300 p-3 rounded"
          />

          <input
            name="website"
            placeholder="Strona internetowa"
            className="w-full border border-gray-300 p-3 rounded"
          />

          <input
            name="email"
            placeholder="Email kontaktowy"
            required
            className="w-full border border-gray-300 p-3 rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full"
          >
            Wyślij zgłoszenie
          </button>

        </form>

      </div>

    </main>

  )
}