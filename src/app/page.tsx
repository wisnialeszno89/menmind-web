import Container from "@/components/ui/Container"
import WorldPreview from "@/components/WorldPreview"
import HomeArticles from "@/components/HomeArticles"
import StartSection from "@/components/StartSection"

export default function Home() {

  return (

    <main>

      <section className="py-24">

        <Container>

          <h1 className="text-4xl md:text-5xl font-semibold max-w-2xl mb-6">
            Platforma dla mężczyzn
          </h1>

          <p className="text-neutral-700 text-lg max-w-xl leading-relaxed">
            MenMind pomaga przejść przez kryzys,
            odbudować stabilność i zbudować silniejsze życie.
          </p>

        </Container>

      </section>

      <StartSection />

      <WorldPreview />

      <HomeArticles />

    </main>

  )

}