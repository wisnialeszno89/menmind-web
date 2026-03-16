import WorldLayout from "@/components/layout/WorldLayout"
import WorldPaths from "@/features/worlds/WorldPaths"
import WorldArticles from "@/features/worlds/WorldArticles"
import WorldTools from "@/features/worlds/WorldTools"
import WorldSupport from "@/features/worlds/WorldSupport"
import StateScale from "@/features/tools/StateScale"

export default function Page() {

  return (

    <WorldLayout
      title="Kryzys"
      description="Moment gdy wszystko zaczyna się rozpadać. Tutaj zaczyna się pierwszy krok."
    >

      <StateScale value={5} />

      <WorldPaths world="kryzys" />

      <WorldArticles world="kryzys" />

      <WorldTools world="kryzys" />

      <WorldSupport world="kryzys" />

    </WorldLayout>

  )

}