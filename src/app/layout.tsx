import "./globals.css"
import FloatingChat from "@/components/FloatingChat"

export const metadata = {
  title: "MenMind",
  description: "Platforma dla mężczyzn – kryzys, odbudowa, rozwój i ojcostwo."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pl">
      <body>

        {children}

        <FloatingChat />

      </body>
    </html>
  )
}