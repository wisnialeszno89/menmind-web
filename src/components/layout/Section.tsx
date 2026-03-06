type Props = {
  title?: string
  children: React.ReactNode
}

export default function Section({ title, children }: Props) {

  return (

    <section className="section-mm">

      <div className="container-mm">

        {title && (

          <h2 className="text-2xl font-semibold mb-10">

            {title}

          </h2>

        )}

        {children}

      </div>

    </section>

  )

}