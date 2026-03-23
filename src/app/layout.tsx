import "./globals.css"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata = {
  title: {
    default: "MenMind – poukładaj swoją sytuację",
    template: "%s | MenMind"
  },
  description:
    "MenMind pomaga mężczyznom ogarnąć kryzys, odbudowę i rozwój. Test, narzędzia i sprawdzone opcje działania.",
  keywords: [
    "kryzys mężczyzny",
    "jak ogarnąć życie",
    "wypalenie",
    "rozstanie",
    "brak motywacji",
    "stres",
    "menmind"
  ],
  openGraph: {
    title: "MenMind",
    description:
      "Poukladaj swoją sytuację krok po kroku.",
    type: "website",
    url: "https://menmind.app"
  }
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