import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SearchBar } from "./widgets"
import { ProviderTheme } from "./ProviderTheme"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Esto es",
  icons: {
    icon: { url: "/icon.png", type: "image/ico" }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ProviderTheme>
          <SearchBar />
          {children}
        </ProviderTheme>
      </body>
    </html>
  )
}
