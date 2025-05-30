"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [welcomeIndex, setWelcomeIndex] = useState(0)

  const welcomeMessages = [
    "Welcome to my portfolio!",
    "मेरे पोर्टफोलियो में आपका स्वागत है!",
    "¡Bienvenido a mi portafolio!",
    "Welkom bij mijn portfolio!",
    "Willkommen in meinem Portfolio!"
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setWelcomeIndex((prev) => (prev + 1) % welcomeMessages.length)
    }, 3000) // Change message every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/favicon.ico" alt="AJ Logo" className="h-8 w-8" />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="#about" 
            className={`text-sm font-medium hover:text-primary transition-colors relative ${
              activeSection === "about" ? "text-primary" : ""
            }`}
          >
            About
            {activeSection === "about" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
            )}
          </Link>
          <Link 
            href="#projects" 
            className={`text-sm font-medium hover:text-primary transition-colors relative ${
              activeSection === "projects" ? "text-primary" : ""
            }`}
          >
            Projects
            {activeSection === "projects" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
            )}
          </Link>
          <Link 
            href="#skills" 
            className={`text-sm font-medium hover:text-primary transition-colors relative ${
              activeSection === "skills" ? "text-primary" : ""
            }`}
          >
            Skills
            {activeSection === "skills" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
            )}
          </Link>
          <Link 
            href="#contact" 
            className={`text-sm font-medium hover:text-primary transition-colors relative ${
              activeSection === "contact" ? "text-primary" : ""
            }`}
          >
            Contact
            {activeSection === "contact" && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
            )}
          </Link>
          <ThemeToggle />
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b p-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#about"
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  activeSection === "about" ? "text-primary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#projects"
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  activeSection === "projects" ? "text-primary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  activeSection === "skills" ? "text-primary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  activeSection === "contact" ? "text-primary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
