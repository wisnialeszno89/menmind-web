"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

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

  const [jobs,setJobs] = useState<any[]>([])
  const [sort,setSort] = useState("featured")
  const [views,setViews] = useState<Record<string,number>>({})

  async function loadJobs(){
    const { data } = await supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending:false })

    if(data){

      data.sort((a,b)=>{
        if(a.featured && !b.featured) return -1
        if(!a.featured && b.featured) return 1
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      })

      setJobs(data)
    }
  }

  useEffect(()=>{
    loadJobs()

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

  let filtered = jobs.filter(job => !isExpired(job.created_at))

  if(sort === "new"){
    filtered = filtered.sort(
      (a,b)=> new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
  }

  return (
    <div>

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

          const expired = isExpired(job.created_at)
          const fresh = isNew(job.created_at)

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

              </div>

              <div
                className="font-semibold mb-1"
                onClick={()=>registerView(job.id)}
              >
                {job.title}
              </div>

              <p className="text-sm text-gray-500 mb-2">
                {job.location} {job.pay && `• ${job.pay}`}
              </p>

              <p className="text-gray-600">
                {job.description}
              </p>

              <p className="mt-3 text-sm">
                Kontakt: {job.contact}
              </p>

              <button
                onClick={async ()=>{
                  await fetch("/api/jobs/report",{
                    method:"POST",
                    headers:{ "Content-Type":"application/json" },
                    body: JSON.stringify({ id: job.id })
                  })
                  alert("Dziękujemy za zgłoszenie")
                }}
                className="block mt-3 text-xs text-gray-400 hover:underline"
              >
                Zgłoś ogłoszenie
              </button>

              <div className="mt-3 text-xs text-gray-400">
                {views[job.id] || 0} wyświetleń
              </div>

            </div>

          )
        })}

      </div>

    </div>
  )
}