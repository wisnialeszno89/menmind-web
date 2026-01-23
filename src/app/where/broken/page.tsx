import StateTemplate from "@/components/where/StateTemplate";

export default function BrokenPage() {
  return (
    <StateTemplate
      title="Złamany"
      subtitle="Jesteś w trudnym miejscu. To normalne."
      description="Nie musisz dziś niczego naprawiać. Wystarczy, że tu jesteś. Ten etap to pauza, nie koniec."
      stateKey="broken"
      actions={[
        { label: "Porozmawiaj z NaviMind", href: "/navimind" },
        { label: "Wróć na początek", href: "/" }
      ]}
    />
  );
}
