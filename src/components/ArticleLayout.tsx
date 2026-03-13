import { ReactNode } from "react"

type Props = {
  title: string
  description: string
  world: string
  children: ReactNode
}

export default function ArticleLayout({
  title,
  description,
  world,
  children
}: Props) {

  return (

    <article className="max-w-3xl mx-auto px-6 py-16">

      {/* NAWIGACJA */}

      <div className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:underline">MenMind</a>
        {" / "}
        <span className="capitalize">{world}</span>
      </div>


      {/* HEADER */}

      <header className="mb-12">

        <h1 className="text-4xl font-semibold mb-4">
          {title}
        </h1>

        <p className="text-xl text-gray-600">
          {description}
        </p>

      </header>


      {/* TREŚĆ */}

      <div className="prose prose-lg max-w-none">

        {children}

      </div>

    </article>

  )

}