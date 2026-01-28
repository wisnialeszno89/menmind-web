type BadgeTone = "default" | "info" | "start" | "priority" | "soon";

export default function MiniBadge({
  label,
  tone = "default",
}: {
  label: string;
  tone?: BadgeTone;
}) {
  const styles: Record<BadgeTone, string> = {
    default: "bg-zinc-950/30 text-zinc-300 ring-zinc-800/70",
    info: "bg-cyan-500/10 text-cyan-200 ring-cyan-400/15",
    start: "bg-emerald-500/10 text-emerald-200 ring-emerald-400/15",
    priority: "bg-amber-500/10 text-amber-200 ring-amber-400/15",
    soon: "bg-zinc-900/40 text-zinc-400 ring-zinc-800/70",
  };

  return (
    <span
      className={[
        "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1",
        styles[tone],
      ].join(" ")}
    >
      {label}
    </span>
  );
}