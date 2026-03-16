import WorldLayout from "@/components/layout/WorldLayout"
import WorldPaths from "@/features/worlds/WorldPaths"
import WorldArticles from "@/features/worlds/WorldArticles"
import WorldTools from "@/features/worlds/WorldTools"
import WorldSupport from "@/features/worlds/WorldSupport"

export default function Page() {

  return (

    <WorldLayout
      title="Ojcostwo"
      description="Relacja z dzieckiem jest jedną z najważniejszych rzeczy w życiu mężczyzny."
    >

      <WorldPaths world="ojcostwo" />

      <WorldArticles world="ojcostwo" />

      <WorldTools world="ojcostwo" />

      <WorldSupport world="ojcostwo" />

    </WorldLayout>

  )

}