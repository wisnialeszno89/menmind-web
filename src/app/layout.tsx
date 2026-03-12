import "./globals.css"

import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"
import ChatBubble from "@/components/ui/ChatBubble"

export default function RootLayout({ children }) {

return(

<html lang="pl">

<body className="min-h-screen flex flex-col">

<Navbar />

<main className="flex-1">
{children}
</main>

<Footer />

<ChatBubble />

</body>

</html>

)

}