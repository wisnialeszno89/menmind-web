import FloatingChat from "@/components/FloatingChat"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>

        {children}

        <FloatingChat />

      </body>
    </html>
  )
}