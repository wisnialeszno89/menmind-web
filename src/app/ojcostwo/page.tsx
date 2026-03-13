import Container from "@/components/ui/Container"
import CategoryIntro from "@/components/ui/CategoryIntro"
import ArticleGrid from "@/components/ui/ArticleGrid"

import { ojcostwo } from "@/content/ojcostwo"
import WorldLayout from "@/components/layout/WorldLayout"

export default function OjcostwoPage() {
  return (
    <WorldLayout title="Ojcostwo">

      <main className="py-16 md:py-24">

        <Container>

          <CategoryIntro
            title="Ojcostwo"
            description="Relacja z dzieckiem, rozwód, alienacja rodzicielska i codzienność ojca."
          />

          <ArticleGrid
            articles={ojcostwo}
            base="ojcostwo"
          />

        </Container>

      </main>

    </WorldLayout>
  )
}