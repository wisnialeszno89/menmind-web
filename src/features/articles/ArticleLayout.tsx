import { ReactNode } from "react"
import Link from "next/link"

import ExploreTools from "@/components/ExploreTools"
import RelatedArticles from "@/components/RelatedArticles"
import ArticlePartners from "@/features/articles/ArticlePartners"
import NextSteps from "@/components/NextSteps"
import ArticleCTA from "@/features/articles/ArticleCTA"
import ArticleTestCTA from "@/components/ArticleTestCTA"

import AIRecommendedTests from "@/components/AIRecommendedTests"
import StickyTestCTA from "@/components/StickyTestCTA"
import ArticleNextSmart from "@/components/ArticleNextSmart"
import ArticleCrossLinks from "@/components/ArticleCrossLinks"

type Props = {
  title: string
  description: string
  world: "kryzys" | "odbudowa" | "wzrost" | "ojcostwo"
  slug?: string
  children: ReactNode
  faq?: {
    question: string
    answer: string
  }[]
}

export default function ArticleLayout({
  title,
  description,
  world,
  slug,
  children,
  faq
}: Props) {

  const articleTests: Record<string, {title:string,desc:string,test:string}> = {

    "dlaczego-po-swietach-mezczyzna-czuje-pustke":{
      title:"Sprawdź czy potrzebujesz resetu",
      desc:"Krótki test pokaże czy jesteś w fazie spadku energii.",
      test:"reset-po-swietach"
    },

    "brak-motywacji-po-swietach":{
      title:"Sprawdź poziom energii",
      desc:"Zobacz czy potrzebujesz stabilizacji.",
      test:"reset-po-swietach"
    },

    "konflikty-w-zwiazku-po-swietach":{
      title:"Sprawdź stan relacji",
      desc:"Krótki test pokaże poziom napięcia w relacji.",
      test:"test-relacji"
    },

    "jak-wrocic-do-rytmu-po-swietach":{
      title:"Ułóż plan powrotu",
      desc:"Prosty plan pomoże odzyskać rytm dnia.",
      test:"plan-72h"
    },

    "samotnosc-mezczyzny-wsrod-ludzi":{
      title:"Sprawdź relacje",
      desc:"Zobacz czy potrzebujesz odbudowy kontaktów.",
      test:"test-relacji"
    },

    "powrot-do-pracy-po-wolnym":{
      title:"Wyrzuć chaos z głowy",
      desc:"Brain Dump pomoże uporządkować zadania.",
      test:"brain-dump"
    },

    "presja-po-swietach":{
      title:"Podejmij decyzję",
      desc:"Kompas decyzji pomoże określić kolejny krok.",
      test:"kompas-decyzji"
    }

  }

  const url = slug
    ? `https://menmind.app/${world}/${slug}`
    : `https://menmind.app/${world}`

  const keywords = [
    title,
    `${title} mężczyzna`,
    `${world} mężczyzna`,
    "kryzys mężczyzny",
    "jak ogarnąć życie",
    "menmind"
  ]

  const fallbackFaq = [
    {
      question: `Co zrobić gdy ${title.toLowerCase()}?`,
      answer:
        "Najpierw zatrzymaj się i zobacz swoją sytuację. Małe kroki pomagają odzyskać kontrolę."
    },
    {
      question: "Czy to normalne?",
      answer:
        "Tak. Wielu mężczyzn przechodzi podobne momenty. To sygnał, że coś wymaga uwagi."
    }
  ]

  const finalFaq = faq?.length ? faq : fallbackFaq

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    keywords: keywords.join(", "),
    author: {
      "@type": "Organization",
      name: "MenMind"
    },
    publisher: {
      "@type": "Organization",
      name: "MenMind"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: finalFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "MenMind",
        item: "https://menmind.app"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: world,
        item: `https://menmind.app/${world}`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: url
      }
    ]
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/">MenMind</Link>
        {" / "}
        <Link href={`/${world}`} className="capitalize">
          {world}
        </Link>
        {" / "}
        <span>{title}</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-4xl font-semibold mb-4">
          {title}
        </h1>

        <p className="text-xl text-gray-600">
          {description}
        </p>
      </header>

      <div className="prose prose-lg max-w-none mb-16">
        {children}

        {slug && articleTests[slug] && (
          <ArticleTestCTA
            title={articleTests[slug].title}
            description={articleTests[slug].desc}
            testSlug={articleTests[slug].test}
          />
        )}

        {slug && (
          <ArticleCrossLinks slug={slug} />
        )}
      </div>

      {slug && (
        <ArticleNextSmart
          slug={slug}
          world={world as any}
        />
      )}

      <section className="mt-16 border-t pt-10">
        <h2 className="text-2xl font-semibold mb-6">
          Częste pytania
        </h2>

        <div className="space-y-6">
          {finalFaq.map((item, i) => (
            <div key={i}>
              <h3 className="font-semibold mb-2">
                {item.question}
              </h3>
              <p className="text-gray-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <ExploreTools />
      </section>

      <AIRecommendedTests />

      <ArticleCTA world={world} />

      {slug && (
        <section className="mt-20">
          <RelatedArticles
            world={world}
            slug={slug}
          />
        </section>
      )}

      <NextSteps world={world} />

      <StickyTestCTA />

    </article>
  )
}