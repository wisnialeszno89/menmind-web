export type Tool = {
  slug: string
  title: string
  description: string
  world: "kryzys" | "odbudowa" | "wzrost" | "ojcostwo"
}

export const tools: Tool[] = [

{
slug:"reset",
title:"Reset 5 minut",
description:"Szybka technika uspokojenia napięcia i zatrzymania spirali stresu.",
world:"kryzys"
},

{
slug:"plan-72h",
title:"Plan 72 godzin",
description:"Prosty plan stabilizacji pierwszych 3 dni w trudnej sytuacji.",
world:"kryzys"
},

{
slug:"stress-test",
title:"Test poziomu stresu",
description:"Sprawdź czy Twój poziom stresu jest bezpieczny.",
world:"kryzys"
},

{
slug:"brain-dump",
title:"Brain Dump",
description:"Wyrzuć wszystkie myśli z głowy i zobacz co naprawdę jest ważne.",
world:"odbudowa"
},

{
slug:"minimum",
title:"Minimum dnia",
description:"4 podstawowe działania które stabilizują dzień.",
world:"odbudowa"
},

{
slug:"sleep-tracker",
title:"Tracker snu",
description:"Sprawdź jak ilość snu wpływa na Twoją energię.",
world:"odbudowa"
},

{
slug:"test-wypaleniat",
title:"Test wypalenia",
description:"Sprawdź czy pojawiają się oznaki wypalenia.",
world:"wzrost"
},

{
slug:"sytuacja-test",
title:"Test sytuacji",
description:"Krótka diagnoza Twojej sytuacji życiowej.",
world:"kryzys"
},
{
slug:"test-stresu",
title:"Test poziomu stresu",
description:"Sprawdź czy Twój poziom stresu zaczyna przekraczać bezpieczny poziom.",
world:"kryzys"
},

{
slug:"test-wypalenia",
title:"Test wypalenia",
description:"Sprawdź czy pojawiają się oznaki wypalenia.",
world:"wzrost"
},

{
slug:"test-sytuacji",
title:"Test sytuacji",
description:"Krótka diagnoza Twojej obecnej sytuacji życiowej.",
world:"kryzys"
}

]