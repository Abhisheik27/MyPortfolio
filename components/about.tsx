import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"

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

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <FadeIn direction="right" delay={0.2}>
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-muted-foreground mb-4">
                I'm a developer and data science grad with a passion for building smart, useful systems: whether it's streaming real-time data, crafting LLM-powered tools, or diving into ML pipelines. My journey into tech started with curiosity and late-night code, and over time, it turned into something I genuinely love doing.
              </p>
              <p className="text-muted-foreground mb-4">
                I've worked on everything from machine learning models to full-stack AI apps, always chasing that balance between clean engineering and practical impact. Learning never really stops for me, there's always a new model, tool, or framework to explore.
              </p>
              <p className="text-muted-foreground">
                Outside of tech, I'm usually watching football (the real kind), experimenting in the kitchen, or hitting the hiking trails around San Diego when the weather's playing nice.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren delay={0.4}>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Education</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Master of Science in Data Science</span>
                      <Badge>Sep. 2023 – Mar. 2025</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">University of California, San Diego</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Bachelor of Engineering, Computer Engineering</span>
                      <Badge>Jul. 2019 – May 2023</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">University of Mumbai</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-4">Work Experience</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Software Engineer</span>
                      <Badge>Aug. 2025 – Present</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Easley Dunn Productions Inc., Los Angeles, CA</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Instructional Assistant</span>
                      <Badge>Sep. 2024 – Dec. 2024</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">UC San Diego, San Diego, CA</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Python Developer</span>
                      <Badge>Jun. 2024 – Aug. 2024</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">UC San Diego, San Diego, CA</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Machine Learning Engineer Intern</span>
                      <Badge>May 2023 – Aug. 2023</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Dunamis Engineers and Consultants, Mumbai, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
