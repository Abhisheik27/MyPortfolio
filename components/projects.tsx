import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { AnimatedCard } from "@/components/animations/animated-card"

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with payment processing, user authentication, and product management.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://project-example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title: "Task Management App",
      description: "A productivity app that helps users organize tasks, set deadlines, and track progress.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      liveUrl: "https://project-example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my projects and skills.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://project-example.com",
      githubUrl: "https://github.com/yourusername/project",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 grid-pattern">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-center">
            <span className="gradient-text">My Projects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-[700px] mx-auto mb-12">
            Here are some of the projects I've worked on. Each project represents different skills and technologies.
          </p>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
          {projects.map((project, index) => (
            <AnimatedCard key={index}>
              <Card className="overflow-hidden flex flex-col h-full border-0 gradient-border">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="rounded-full">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="rounded-full">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="rounded-full">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
