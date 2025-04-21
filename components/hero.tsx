import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { FadeIn } from "@/components/animations/fade-in"

export function Hero() {
  return (
    <div className="relative grid-pattern">
      <Navbar />
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center">
        <FadeIn direction="down" duration={0.6}>
          <div className="relative w-24 h-24 mb-8 overflow-hidden rounded-full bg-muted gradient-border glow">
            <img
              src="/placeholder.svg?height=96&width=96"
              alt="Profile"
              className="object-cover"
              width={96}
              height={96}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.2} duration={0.7}>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
            Hi, I'm <span className="gradient-text">Your Name</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4} duration={0.7}>
          <p className="max-w-[700px] text-lg text-muted-foreground mb-8">
            I'm a passionate developer specializing in building exceptional digital experiences. Currently focused on
            creating accessible, human-centered products.
          </p>
        </FadeIn>

        <FadeIn delay={0.6} duration={0.7}>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild className="rounded-full">
              <Link href="#contact">
                Get in touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="rounded-full">
              <Link href="#projects">View my work</Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.8} duration={0.7}>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
