"use client"

import { useEffect, useState } from "react"
import { jobs } from "@/data/jobs"
import Link from "next/link"

function isExpired(date: string){
  const created = new Date(date)
  const now = new Date()
  const diff = (now.getTime() - created.getTime()) / (1000*60*60*24)
  return diff > 30
}

function isNew(date: string){
  const created = new Date(date)
  const now = new Date()
  const diff = (now.getTime() - created.getTime()) / (1000*60*60*24)
  return diff <= 3
}

export default function JobList({ type }: { type: "dam" | "szukam" }) {

  const [sort,setSort] = useState("featured")
  const [views,setViews] = useState<Record<string,number>>({})

  useEffect(()=>{

    const saved = localStorage.getItem("mm_job_views")
    if(saved){
      setViews(JSON.parse(saved))
    }

  },[])

  function registerView(id:string){

    const updated = {
      ...views,
      [id]: (views[id] || 0) + 1
    }

    setViews(updated)
    localStorage.setItem("mm_job_views", JSON.stringify(updated))
  }

    let filtered = jobs.filter(j => j.type === type)

    filtered = filtered.sort((a,b)=>{
    // featured first
    if(a.featured && !b.featured) return -1
    if(!a.featured && b.featured) return 1

    // newest next
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })

  if(sort === "featured"){
    filtered = filtered.sort((a,b)=> Number(b.featured) - Number(a.featured))
  }

  if(sort === "new"){
    filtered = filtered.sort(
      (a,b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  }

  return (
    <div>

      {/* sticky CTA */}
      <div className="mb-6 flex justify-between items-center">

        <select
          className="border rounded-lg px-3 py-2 text-sm"
          value={sort}
          onChange={(e)=>setSort(e.target.value)}
        >
          <option value="featured">Wyróżnione</option>
          <option value="new">Najnowsze</option>
        </select>

        <Link
          href="/praca/dodaj"
          className="bg-black text-white px-4 py-2 rounded-lg text-sm"
        >
          Dodaj ogłoszenie
        </Link>

      </div>

      <div className="space-y-4">

        {filtered.map(job => {

          const expired = isExpired(job.createdAt)
          const fresh = isNew(job.createdAt)

          return (

            <div
              key={job.id}
              className={`
                border rounded-xl p-6
                ${expired ? "opacity-40" : ""}
                ${job.featured ? "border-black" : ""}
              `}
            >

              <div className="flex gap-2 mb-2">

                {job.featured && (
                  <span className="text-xs bg-black text-white px-2 py-1 rounded">
                    Wyróżnione
                  </span>
                )}

                {fresh && !expired && (
                  <span className="text-xs border px-2 py-1 rounded">
                    Nowe
                  </span>
                )}

                {expired && (
                  <span className="text-xs text-gray-500">
                    Archiwum
                  </span>
                )}

              </div>

              <Link
                href={`/praca/${job.id}`}
                onClick={()=>registerView(job.id)}
                className="font-semibold mb-1 block hover:underline"
              >
                {job.title}
              </Link>

              <p className="text-sm text-gray-500 mb-2">
                {job.location} {job.pay && `• ${job.pay}`}
              </p>

              <p className="text-gray-600">
                {job.description}
              </p>

              {!expired && (
                <div className="mt-3 text-xs text-gray-400">
                  {views[job.id] || 0} wyświetleń
                </div>
              )}

            </div>

          )
        })}

      </div>

    </div>
  )
}