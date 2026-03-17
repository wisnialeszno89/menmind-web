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
      <body className="bg-white text-black antialiased">

        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

      </body>
    </html>

  )

}