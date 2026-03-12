type Props = {
  title: string
  description: string
}

export default function SectionHero({ title, description }: Props) {

  return (
    <div className="max-w-2xl mb-14">

      <h1 className="text-3xl md:text-4xl font-semibold mb-5">
        {title}
      </h1>

      <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
        {description}
      </p>

    </div>
  )
}