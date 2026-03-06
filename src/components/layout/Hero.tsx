type Props = {
  title: string
  intro: string
}

export default function Hero({ title, intro }: Props) {

  return (

    <section className="py-28 bg-white border-b">

      <div className="container-mm text-center max-w-3xl">

        <h1 className="heading-xl mb-6">

          {title}

        </h1>

        <p className="text-lead">

          {intro}

        </p>

      </div>

    </section>

  )

}