import Script from "next/script"
import "./globals.css"

import Header from "../../Header"
import Footer from "@/components/layout/Footer"
import ScrollToTop from "@/components/ScrollToTop"
import CrisisAuto from "@/components/CrisisAuto"
import CookieBanner from "@/components/CookieBanner"

export const metadata = {
  title: {
    default: "MenMind – poukładaj swoją sytuację",
    template: "%s | MenMind"
  },
  description:
    "MenMind pomaga mężczyznom ogarnąć kryzys, odbudowę i rozwój. Test, narzędzia i sprawdzone opcje działania.",
  openGraph: {
    title: "MenMind",
    description: "Poukladaj swoją sytuację krok po kroku.",
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
      <head>
        <meta
          name="google-site-verification"
          content="se6SRN6vHZcVMykc1s-_5Bd4-uiAvBHn-14MKrWZUJM"
        />
      </head>

      <body className="bg-white text-black antialiased">

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1DW5RE250X"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1DW5RE250X');
          `}
        </Script>

        <ScrollToTop />
        <Header />

        <main className="w-full min-h-screen">
          {children}
        </main>

        <Footer />
        <CrisisAuto />
        <CookieBanner />

      </body>
    </html>
  )
}