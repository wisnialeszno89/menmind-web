import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

import "./globals.css"

export const metadata = {
  title: "MenMind",
  description: "Mapa wsparcia dla mężczyzn",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="pl">

      <body className="bg-gray-50">

        <Header />

        {children}

        <Footer />

      </body>

    </html>

  )

}