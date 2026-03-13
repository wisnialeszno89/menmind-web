import Container from "@/components/ui/Container"
import CategoryIntro from "@/components/ui/CategoryIntro"
import ArticleGrid from "@/components/ui/ArticleGrid"

import { wzrost } from "@/content/wzrost"
import WorldLayout from "@/components/layout/WorldLayout"

export default function WzrostPage() {
  return (
    <WorldLayout title="Wzrost">

      <main className="py-16 md:py-24">

        <Container>

          <CategoryIntro
            title="Wzrost"
            description="Rozwój, dyscyplina i budowanie kierunku w życiu."
          />

          <ArticleGrid
            articles={wzrost}
            base="wzrost"
          />

        </Container>

      </main>

    </WorldLayout>
  )
}