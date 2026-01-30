import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { JourneyTimeline } from "@/components/journey-timeline"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">About Me</h2>
          <p className="text-muted-foreground text-center max-w-[700px] mx-auto mb-12">
            Get to know me, my background, and what drives me as a developer.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <div>
            <FadeIn direction="right" delay={0.2}>
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            </FadeIn>
            <JourneyTimeline />
            <FadeIn direction="up" delay={0.7}>
              <div className="mt-12">
                <h4 className="text-xl font-bold mb-6 text-center">
                  <span className="gradient-text">Beyond the Code</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Football Card */}
                  <div className="group relative bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/10">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">⚽</div>
                    <h5 className="font-semibold text-lg mb-2">Football Fan</h5>
                    <p className="text-sm text-muted-foreground">Watching, playing, analyzing the beautiful game (the real kind!🤓)</p>
                  </div>

                  {/* Cooking Card */}
                  <div className="group relative bg-gradient-to-br from-orange-500/10 to-amber-500/5 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/10">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">🍳</div>
                    <h5 className="font-semibold text-lg mb-2">Kitchen Explorer</h5>
                    <p className="text-sm text-muted-foreground">Experimenting with flavors and recipes</p>
                  </div>

                  {/* Hiking Card */}
                  <div className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">🏔️</div>
                    <h5 className="font-semibold text-lg mb-2">Trail Seeker</h5>
                    <p className="text-sm text-muted-foreground">Hiking around San Diego when weather's nice</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
