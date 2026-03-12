import Link from "next/link"

type Props = {
  title: string
  intro?: string
  category?: string
  children: React.ReactNode
}

export default function ArticleLayout({
  title,
  intro,
  category,
  children
}: Props) {
  return (
    <main className="bg-white min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-24">

        {category && (
          <div className="text-sm text-neutral-500 mb-6">
            <Link href="/">MenMind</Link>
            <span className="mx-2">/</span>
            <span>{category}</span>
          </div>
        )}

        <h1 className="text-4xl font-semibold text-black mb-6">
          {title}
        </h1>

        {intro && (
          <p className="text-lg text-neutral-700 leading-relaxed mb-12">
            {intro}
          </p>
        )}

        <article className="prose prose-neutral max-w-none">
          {children}
        </article>

        <div className="border-t mt-20 pt-8">
          <Link
            href="/"
            className="text-sm text-neutral-500 hover:text-black"
          >
            ← powrót
          </Link>
        </div>

      </div>
    </main>
  )
}