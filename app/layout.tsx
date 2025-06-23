import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Andrews Foundation - Empowering Girls and Women in Luuka District",
  description:
    "Andrews Foundation for Child and Women Development supports vulnerable girls and empowers women in Luuka District, Uganda through education sponsorships, skills training, and community programs. Founded in memory of Andrew Kampani.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
