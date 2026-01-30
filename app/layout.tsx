import type React from "react"
import "@/app/globals.css"
import { Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import { Hotjar } from "@/components/hotjar"
import { ParticleBackground } from "@/components/particle-background"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
})

export const metadata = {
  title: "Abhisheik Jadhav - Portfolio",
  description: "Personal portfolio website showcasing my projects, skills, and experience in AI, Machine Learning, and Full-Stack Development",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon.ico" },
    { rel: "shortcut icon", url: "/favicon.ico" }
  ],
  verification: {
    google: "KWX9EsKZwdirUTfCABX9ajuvDZWwarhZ9_qH1BlUZBQ",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.abhisheikjadhav.com",
    title: "Abhisheik Jadhav - Portfolio",
    description: "Personal portfolio website showcasing my projects, skills, and experience in AI, Machine Learning, and Full-Stack Development",
    siteName: "Abhisheik Jadhav",
    images: [
      {
        url: "https://www.abhisheikjadhav.com/portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Abhisheik Jadhav Portfolio",
        type: "image/jpeg",
      },
      {
        url: "https://www.abhisheikjadhav.com/portfolio.jpg",
        width: 800,
        height: 600,
        alt: "Abhisheik Jadhav Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhisheik Jadhav - Portfolio",
    description: "Personal portfolio website showcasing my projects, skills, and experience in AI, Machine Learning, and Full-Stack Development",
    images: ["https://www.abhisheikjadhav.com/portfolio.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Hotjar />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ParticleBackground />
          <Navbar />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
