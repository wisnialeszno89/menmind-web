import Link from "next/link"

type Props = {
  title: string
  description: string
  ctaLabel?: string
  ctaHref?: string
}

export default function SectionHero({
  title,
  description,
  ctaLabel,
  ctaHref
}: Props) {
  return (
    <div className="max-w-2xl mb-14">

      <h1 className="text-3xl md:text-4xl font-semibold mb-5">
        {title}
      </h1>

      <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
        {description}
      </p>

      {/* 🔥 CTA tylko jeśli podany */}
      {ctaLabel && ctaHref && (
        <Link
          href={ctaHref}
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:opacity-90"
        >
          {ctaLabel}
        </Link>
      )}

    </div>
  )
}