type Props = {
  children: React.ReactNode
}

export default function Card({ children }: Props) {

  return (

    <div
      className="
      bg-white
      border
      border-gray-200
      rounded-2xl
      p-6
      transition
      hover:shadow-xl
      hover:-translate-y-1
      "
    >

      {children}

    </div>

  )

}