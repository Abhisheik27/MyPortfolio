import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { FadeIn } from "@/components/animations/fade-in"

export function Hero() {
  return (
    <div className="relative grid-pattern pt-16">
      <Navbar />
      <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto py-12 px-6">
          {/* Left side - Text content */}
          <div className="text-left space-y-8 pr-4">
            <FadeIn delay={0.2} duration={0.7}>
              <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl pb-4">
                <span className="gradient-text block leading-[1.1]">Abhisheik</span>
                <span className="gradient-text block leading-[1.1]">Jadhav</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4} duration={0.7}>
              <p className="text-lg text-muted-foreground">
                Obsessed with building smart stuff using code. From streaming systems to LLM-powered tools, I like turning messy ideas into clean, working products. Currently riding the line between machine learning, software, and "wait… that actually works?"
              </p>
            </FadeIn>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center md:justify-center order-first md:order-last">
            <FadeIn direction="left" duration={0.6}>
              <div className="relative w-72 h-72 overflow-hidden rounded-2xl bg-muted gradient-border glow">
                <img
                  src="/abhisheik-profile.png"
                  alt="Abhisheik Jadhav"
                  className="object-cover w-full h-full"
                  width={288}
                  height={288}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
