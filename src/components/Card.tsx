type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "highlight" | "subtle";
  hover?: boolean;
};

export default function Card({
  children,
  className = "",
  variant = "default",
  hover = true,
}: Props) {
  const base =
    "rounded-2xl border backdrop-blur-sm transition duration-300";

  let styles = "";

  switch (variant) {
    case "highlight":
      styles = "bg-blue-600/10 border-blue-500/40";
      break;
    case "subtle":
      styles = "bg-white/5 border-zinc-800";
      break;
    default:
      styles = "bg-white/5 border-zinc-700";
  }

  const hoverEffect = hover
    ? "md:hover:-translate-y-1 hover:border-white/40"
    : "";

  return (
    <div className={`${base} ${styles} ${hoverEffect} ${className}`}>
      {children}
    </div>
  );
}