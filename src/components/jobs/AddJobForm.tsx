"use client"

import { useState } from "react"

export default function AddJobForm(){

  const [loading,setLoading] = useState(false)
  const [sent,setSent] = useState(false)
  const [error,setError] = useState(false)

  async function handleSubmit(e:any){
    e.preventDefault()
    setLoading(true)
    setError(false)

    const form = e.target

    const data = {
      type: form.type.value,
      title: form.title.value,
      location: form.location.value,
      pay: form.pay.value,
      description: form.description.value,
      contact: form.contact.value
    }

    try{

      const res = await fetch("/api/jobs",{
      method:"POST",
      headers:{
     "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    })

      const json = await res.json()

      if(!res.ok || !json.ok){
      throw new Error("API error")
      }

      setSent(true)

    }catch(err){
      setError(true)
    }

    setLoading(false)
  }

  if(sent){
    return(
      <div className="border rounded-xl p-6 text-center">
        <p className="font-medium">
          Ogłoszenie wysłane ✅
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Sprawdzimy je i dodamy na stronę.
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

      {error && (
        <p className="text-red-500 text-sm">
          Błąd wysyłania. Spróbuj ponownie.
        </p>
      )}

      <button
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded-xl"
      >
        {loading ? "Wysyłanie..." : "Dodaj ogłoszenie"}
      </button>

    </form>
  )
}