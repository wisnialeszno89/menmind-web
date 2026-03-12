import Container from "@/components/ui/Container"
import SectionHero from "@/components/ui/SectionHero"
import ArticleCard from "@/components/ui/ArticleCard"

export default function Page() {

  return (
    <main className="bg-white py-24">

      <Container>

        <SectionHero
          title="Ojcostwo"
          description="Przewodnik dla ojców którzy chcą zachować relację z dzieckiem mimo konfliktu lub rozstania."
        />

        <div className="grid md:grid-cols-2 gap-8">

          <ArticleCard
            title="Kontakty z dzieckiem"
            description="Co zrobić gdy drugi rodzic utrudnia spotkania."
            href="/ojcostwo/kontakty-z-dzieckiem"
          />

          <ArticleCard
            title="Prawa ojca"
            description="Podstawowe prawa i obowiązki ojca."
            href="/ojcostwo/prawa-ojca"
          />

        </div>

      </Container>

    </main>
  )
}