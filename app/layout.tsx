import type React from "react"
import "./globals.css"
import { Space_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const pixelFont = Space_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-pixel",
})

export const metadata = {
  title: "NFT Detail Page",
  description: "NFT Detail Page with Bored Ape Yacht Club",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={pixelFont.variable}>
          <body>
              <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                  {children}
              </ThemeProvider>
          </body>
      </html>
  )
}
