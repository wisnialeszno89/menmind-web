import Link from "next/link";

type Props = {
  leftHref: string;
  leftLabel: string;
  rightHref: string;
  rightLabel: string;
};

export default function CTASection({
  leftHref,
  leftLabel,
  rightHref,
  rightLabel,
}: Props) {
  return (
    <section className="section-compact">
      <div className="container-2026 flex flex-col md:flex-row gap-6 max-w-3xl">
        <Link
          href={leftHref}
          className="flex-1 text-center px-6 py-3 rounded-xl border border-zinc-600 hover:border-white transition"
        >
          {leftLabel}
        </Link>

        <Link
          href={rightHref}
          className="flex-1 text-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
        >
          {rightLabel}
        </Link>
      </div>
    </section>
  );
}