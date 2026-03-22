"use client"

import { useState } from "react"
import Link from "next/link"
import { cities } from "@/data/cities"

type Props = {
  baseHref: string
  placeholder?: string
  tip?: string
}

export default function CitySearch({
  baseHref,
  placeholder = "Wpisz miasto",
  tip
}: Props){

  const [query, setQuery] = useState("")

  const filtered = cities.filter(city =>
    city.name.toLowerCase().includes(query.toLowerCase())
  )

  return(

    <div>

      {tip && (
        <p className="text-sm text-gray-500 mb-3">
          {tip}
        </p>
      )}

      <input
        type="text"
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full border rounded-xl px-4 py-3 mb-4"
      />

      {query.length > 1 && (

        <div className="border rounded-xl overflow-hidden">

          {filtered.length > 0 ? (

            filtered.slice(0,6).map(city => (

              <Link
                key={city.slug}
                href={`${baseHref}/${city.slug}`}
                className="block px-4 py-3 hover:bg-gray-50 border-b last:border-b-0"
              >
                📍 {city.name}
              </Link>

            ))

          ) : (

            <div className="p-4 text-sm text-gray-600">

              <p className="mb-2">
                Brak lokalnych wyników.
              </p>

              <Link
                href="/propozycje"
                className="underline"
              >
                Zobacz opcje online
              </Link>

            </div>

          )}

        </div>

      )}

    </div>

  )

}