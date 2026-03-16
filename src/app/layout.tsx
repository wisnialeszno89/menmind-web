import "./globals.css"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata = {
  title: "MenMind",
  description: "Kompas dla mężczyzn"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="pl">
      <body>

        <Header />

        {children}

        <Footer />

      </body>
    </html>

  )

}