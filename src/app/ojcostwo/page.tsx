import WorldLayout from "@/components/layout/WorldLayout"
import WorldPaths from "@/features/worlds/WorldPaths"
import WorldArticles from "@/features/worlds/WorldArticles"
import WorldTools from "@/features/worlds/WorldTools"
import WorldSupport from "@/features/worlds/WorldSupport"

import FatherActivityIdeas from "@/components/FatherActivityIdeas"
import FatherContactPlan from "@/components/FatherContactPlan"
import FatherStart from "@/components/FatherStart"

export default function Page() {

  return (

    <WorldLayout
      title="Ojcostwo"
      description="Relacja z dzieckiem jest jedną z najważniejszych rzeczy w życiu mężczyzny."
    >
      <FatherStart />

      {/* najpierw konkret */}
      <FatherContactPlan />

      <FatherActivityIdeas />

      {/* potem struktura */}
      <WorldTools world="ojcostwo" />

      {/* dopiero później eksploracja */}
      <WorldArticles world="ojcostwo" />

      <WorldPaths world="ojcostwo" />

      <WorldSupport world="ojcostwo" />

    </WorldLayout>

  )

}