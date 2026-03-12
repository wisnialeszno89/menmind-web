import Container from "./Container"

type Props = {
  title: string
  intro?: string
  children: React.ReactNode
}

export default function ArticleLayout({ title, intro, children }: Props) {

  return (
    <main className="bg-white py-24">

      <Container>

        <div className="max-w-3xl">

          <h1 className="text-4xl font-semibold mb-8">
            {title}
          </h1>

          {intro && (
            <p className="text-lg text-neutral-700 mb-12 leading-relaxed">
              {intro}
            </p>
          )}

          <article className="prose prose-neutral max-w-none">
            {children}
          </article>

        </div>

      </Container>

    </main>
  )
}