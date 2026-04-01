"use client"

import { useState } from "react"

export default function AddJobForm(){

  const [loading,setLoading] = useState(false)
  const [sent,setSent] = useState(false)
  const [featured,setFeatured] = useState(false)

  async function handleSubmit(e:any){
    e.preventDefault()
    setLoading(true)

    const form = e.target

    const data = {
      type: form.type.value,
      title: form.title.value,
      location: form.location.value,
      pay: form.pay.value,
      description: form.description.value,
      contact: form.contact.value,
      featured
    }

    // jeśli wyróżnienie -> Stripe
    if(featured){

      const res = await fetch("/api/jobs/checkout",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
      })

      const json = await res.json()
      window.location.href = json.url
      return
    }

    // normalne ogłoszenie
    await fetch("/api/jobs",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    })

    setLoading(false)
    setSent(true)
  }

  if(sent){
    return(
      <div className="border rounded-xl p-6 text-center">
        <p className="font-medium">
          Ogłoszenie wysłane
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Po weryfikacji pojawi się na stronie.
        </p>
      </div>
    )
  }

  return(
    <form onSubmit={handleSubmit} className="space-y-4">

      <select name="type" required className="w-full border rounded-lg p-3">
        <option value="">Typ ogłoszenia</option>
        <option value="dam">Dam pracę</option>
        <option value="szukam">Szukam pracy</option>
      </select>

      <input
        name="title"
        placeholder="Tytuł ogłoszenia"
        required
        className="w-full border rounded-lg p-3"
      />

      <input
        name="location"
        placeholder="Miasto / region"
        required
        className="w-full border rounded-lg p-3"
      />

      <input
        name="pay"
        placeholder="Stawka (opcjonalnie)"
        className="w-full border rounded-lg p-3"
      />

      <textarea
        name="description"
        placeholder="Opis ogłoszenia"
        required
        rows={5}
        className="w-full border rounded-lg p-3"
      />

      <input
        name="contact"
        placeholder="Telefon lub email"
        required
        className="w-full border rounded-lg p-3"
      />

      {/* Wyróżnienie */}
      <label className="flex items-center gap-2 text-sm border rounded-lg p-3">
        <input
          type="checkbox"
          checked={featured}
          onChange={(e)=>setFeatured(e.target.checked)}
        />
        Wyróżnij ogłoszenie (19 zł)
      </label>

      <button
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded-xl"
      >
        {loading ? "Wysyłanie..." : featured ? "Przejdź do płatności" : "Dodaj ogłoszenie"}
      </button>

    </form>
  )
}