"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function AIRecommendedArticles(){

  const [article,setArticle] = useState<any>(null)

  useEffect(()=>{

    const profile = localStorage.getItem("mm_profile")
    if(!profile) return

    const p = JSON.parse(profile)

    if(p.includes("Chaos")){
      setArticle({
        title:"Jak odzyskać kontrolę",
        href:"/artykuly/jak-odzyskac-kontrole"
      })
    }

    if(p.includes("Stres")){
      setArticle({
        title:"Jak poradzić sobie ze stresem",
        href:"/artykuly/jak-poradzic-sobie-ze-stresem"
      })
    }

    if(p.includes("Rozstanie")){
      setArticle({
        title:"Co robić po rozstaniu",
        href:"/artykuly/co-robic-po-rozstaniu-mezczyzna"
      })
    }

  },[])

  if(!article) return null

  return(
    <section className="py-16 border-t">
      <div className="max-w-4xl mx-auto px-6">

        <div className="border rounded-xl p-6">

          <p className="text-sm text-gray-500 mb-2">
            Warto przeczytać
          </p>

          <h3 className="text-xl font-semibold mb-3">
            {article.title}
          </h3>

          <Link
            href={article.href}
            className="underline font-medium"
          >
            Przejdź do artykułu →
          </Link>

        </div>

      </div>
    </section>
  )
}