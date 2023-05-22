import "@/styles/globals.css"
import { Metadata } from "next"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Providers } from "@/components/providers/jotai-provider"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: "Controlle - Desafio",
    template: `%s`,
  },
  description: "Calculadora de férias CLT - Desafio Controlle",
  authors: {
    name: "Gabriel Albuquerque",
    url: "https://bento.me/gca",
  },
  keywords: ["Calculadora CLT", "Controlle"],
  openGraph: {
    title: "Desafio - Controlle",
    actors: ["Gabriel Albuquerque"],
    description: "Calculadora de férias CLT",
    url: "https://www.controlle.com/assets/images/controlle.svg",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="pt-br" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <ThemeProvider attribute="class" defaultTheme="light">
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">{children}</div>
              </div>
              <TailwindIndicator />
            </ThemeProvider>
          </Providers>
        </body>
      </html>
    </>
  )
}
