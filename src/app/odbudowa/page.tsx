import WorldLayout from "@/components/layout/WorldLayout"
import WorldPaths from "@/features/worlds/WorldPaths"
import WorldArticles from "@/features/worlds/WorldArticles"
import WorldTools from "@/features/worlds/WorldTools"
import WorldSupport from "@/features/worlds/WorldSupport"

export default function Page() {

  return (

    <WorldLayout
      title="Odbudowa"
      description="Moment gdy zaczynasz wracać do równowagi i odzyskiwać kontrolę nad swoim życiem."
    >

      <WorldPaths world="odbudowa" />

      <WorldArticles world="odbudowa" />

      <WorldTools world="odbudowa" />

      <WorldSupport world="odbudowa" />

    </WorldLayout>

  )

}