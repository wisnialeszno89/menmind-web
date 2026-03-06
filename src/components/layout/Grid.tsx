type Props = {
  children: React.ReactNode
}

export default function Grid({ children }: Props) {

  return (

    <div
      className="
      grid
      md:grid-cols-2
      lg:grid-cols-3
      gap-6
      "
    >

      {children}

    </div>

  )

}