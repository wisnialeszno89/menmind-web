import { redirect } from "next/navigation";

// Legacy MenMind bookmark: stay on MenMind instead of forwarding users
// or session state to an unrelated NaviMind application.
export default function LegacyChatPage() {
  redirect("/narzedzia");
}
