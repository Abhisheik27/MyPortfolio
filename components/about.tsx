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
                I'm a passionate developer with a background in computer science and a love for creating beautiful,
                functional websites and applications. My journey in tech started when I built my first website at the
                age of 15, and I've been hooked ever since.
              </p>
              <p className="text-muted-foreground mb-4">
                With over 5 years of experience in web development, I've worked on a variety of projects ranging from
                small business websites to complex web applications. I'm constantly learning and exploring new
                technologies to improve my skills.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in
                the kitchen.
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
                      <span className="font-medium">Bachelor of Science in Computer Science</span>
                      <Badge>2018-2022</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">University Name</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Full Stack Web Development</span>
                      <Badge>2017</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Coding Bootcamp</p>
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
                      <span className="font-medium">Senior Frontend Developer</span>
                      <Badge>2022-Present</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Company Name</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Web Developer</span>
                      <Badge>2019-2022</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Previous Company</p>
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
