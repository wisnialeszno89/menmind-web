import WorldLayout from "@/components/layout/WorldLayout"
import WorldPaths from "@/features/worlds/WorldPaths"
import WorldArticles from "@/features/worlds/WorldArticles"
import WorldTools from "@/features/worlds/WorldTools"
import WorldSupport from "@/features/worlds/WorldSupport"

export default function Page() {

  return (

    <WorldLayout
      title="Wzrost"
      description="Moment gdy przestajesz tylko przetrwać i zaczynasz świadomie budować swoje życie."
    >

      <WorldPaths world="wzrost" />

      <WorldArticles world="wzrost" />

      <WorldTools world="wzrost" />

      <WorldSupport world="wzrost" />

    </WorldLayout>

  )

}