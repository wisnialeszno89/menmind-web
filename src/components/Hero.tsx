type Props = {
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function Hero({
  title,
  highlight,
  subtitle,
  align = "left",
}: Props) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <section className="section-2026">
      <div className={`container-2026 max-w-4xl ${alignment}`}>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-5">
          {highlight && (
            <span className="text-blue-400 block mb-1">
              {highlight}
            </span>
          )}
          {title}
        </h1>

        {subtitle && (
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}