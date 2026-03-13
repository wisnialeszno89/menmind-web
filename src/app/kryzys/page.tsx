import Container from "@/components/ui/Container"
import CategoryIntro from "@/components/ui/CategoryIntro"
import ArticleGrid from "@/components/ui/ArticleGrid"

import { kryzys } from "@/content/kryzys"
import WorldLayout from "@/components/layout/WorldLayout"

export default function KryzysPage() {
  return (
    <WorldLayout title="Kryzys">

      <main className="py-16 md:py-24">

        <Container>

          <CategoryIntro
            title="Kryzys"
            description="Moment gdy wszystko się rozpada. Ta sekcja pomaga przejść przez najtrudniejsze chwile i odzyskać równowagę."
          />

          <ArticleGrid
            articles={kryzys}
            base="kryzys"
          />

        </Container>

      </main>

    </WorldLayout>
  )
}