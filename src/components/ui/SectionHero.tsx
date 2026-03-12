type Props = {
  title: string
  description: string
}

export default function SectionHero({ title, description }: Props) {
  return (
    <div className="max-w-2xl mb-16">

      <h1 className="text-4xl font-semibold mb-6 text-black">
        {title}
      </h1>

      <p className="text-neutral-700 text-lg leading-relaxed">
        {description}
      </p>

    </div>
  )
}