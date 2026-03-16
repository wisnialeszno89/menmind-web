import "./globals.css"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import FloatingChat from "@/components/FloatingChat"

export const metadata = {
  title: "MenMind",
  description:
    "MenMind – platforma dla mężczyzn. Kryzys, odbudowa, rozwój i ojcostwo."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="pl">

      <body className="bg-white text-neutral-900">

        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

        <FloatingChat />

      </body>

    </html>

  )

}