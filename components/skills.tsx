import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Docker", "AWS", "Vercel", "Figma", "Responsive Design", "SEO"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-center max-w-[700px] mx-auto mb-12">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
