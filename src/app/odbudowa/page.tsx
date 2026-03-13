import Container from "@/components/ui/Container"
import CategoryIntro from "@/components/ui/CategoryIntro"
import ArticleGrid from "@/components/ui/ArticleGrid"

import { odbudowa } from "@/content/odbudowa"
import WorldLayout from "@/components/layout/WorldLayout"

export default function OdbudowaPage() {
  return (
    <WorldLayout title="Odbudowa">

      <main className="py-16 md:py-24">

        <Container>

          <CategoryIntro
            title="Odbudowa"
            description="Powrót do stabilności po kryzysie. Małe kroki, które odbudowują życie."
          />

          <ArticleGrid
            articles={odbudowa}
            base="odbudowa"
          />

        </Container>

      </main>

    </WorldLayout>
  )
}