import Container from "../ui/Container"
import ToolsBox from "../ui/ToolsBox"
import NextStep from "../ui/NextStep"

type Props = {
  title: string
  intro: string
  children: React.ReactNode
}

export default function ArticleLayout({ title, intro, children }: Props) {

  return (
    <main className="bg-white py-16 md:py-24">

      <Container>

        <div className="max-w-3xl mx-auto">

          <h1 className="text-3xl md:text-4xl font-semibold mb-6">
            {title}
          </h1>

          <p className="text-base md:text-lg text-neutral-700 mb-10 leading-relaxed">
            {intro}
          </p>

          <article className="prose prose-neutral max-w-none text-base md:text-lg">
            {children}
          </article>

          <ToolsBox />

          <NextStep
            items={[
              { title: "Przejdź do etapu odbudowy", href: "/odbudowa" }
            ]}
          />

        </div>

      </Container>

    </main>
  )
}