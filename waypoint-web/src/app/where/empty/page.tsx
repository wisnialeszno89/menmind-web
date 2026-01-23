import StateTemplate from "@/components/where/StateTemplate";

export default function EmptyPage() {
  return (
    <StateTemplate
      title="Stabilny, ale pusty"
      description="Niby wszystko gra, ale nic nie cieszy.
Brakuje kierunku, nie energii."
      stateKey="empty"
    />
  );
}
