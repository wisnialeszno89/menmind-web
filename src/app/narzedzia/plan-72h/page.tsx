import ToolLayout from "@/components/tools/ToolLayout"

export default function Page() {

return (

<ToolLayout
title="Plan 72h"
description="Gdy wszystko się sypie, najważniejsze są pierwsze trzy dni."
>

<p>
Jeśli przechodzisz przez kryzys, Twój umysł jest przeciążony.
Dlatego zamiast próbować rozwiązać całe życie, skup się na najbliższych 72 godzinach.
</p>

<h2 className="text-2xl font-semibold mt-10">
Krok 1 — zatrzymaj chaos
</h2>

<ul className="list-disc pl-6 space-y-2">

<li>zjedz normalny posiłek</li>
<li>wyjdź na 20 minut spaceru</li>
<li>odłóż trudne decyzje</li>

</ul>

<h2 className="text-2xl font-semibold mt-10">
Krok 2 — uporządkuj myśli
</h2>

<ul className="list-disc pl-6 space-y-2">

<li>zapisz wszystko co masz w głowie</li>
<li>oddziel fakty od emocji</li>
<li>zostaw tylko najważniejsze sprawy</li>

</ul>

<h2 className="text-2xl font-semibold mt-10">
Krok 3 — jeden mały ruch
</h2>

<p>
Nie musisz rozwiązać wszystkiego.
Wystarczy jeden mały krok który przywróci poczucie kontroli.
</p>

</ToolLayout>

)

}