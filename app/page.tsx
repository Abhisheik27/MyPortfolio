import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { FootballSkills } from "@/components/football-skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/animations/scroll-progress"

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Hero />
      <About />
      <Projects />
      <FootballSkills />
      <Contact />
      <Footer />
    </main>
  )
}
