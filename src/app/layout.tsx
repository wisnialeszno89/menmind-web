import "./globals.css"

import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"
import ChatBubble from "@/components/ui/ChatBubble"
import NaviMindButton from "@/components/NaviMindButton"
import UserStateBar from "@/components/UserStateBar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-screen flex flex-col">

        <UserStateBar />
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <ChatBubble />
        <NaviMindButton />

      </body>
    </html>
  )
}