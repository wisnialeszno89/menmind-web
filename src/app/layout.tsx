import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"

export default function RootLayout({ children }) {

return (

<html lang="pl">

<body>

<Navbar />
<Footer />

{children}

</body>

</html>

)

}