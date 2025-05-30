import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "R", "SQL", "C++", "C", "Java", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Developer Tools & Cloud",
      skills: [
        "Git",
        "Jupyter Notebook",
        "Google Colab",
        "REST APIs",
        "Docker",
        "Kubernetes",
        "Ray",
        "Spark",
        "Kafka",
        "MPI",
        "Supabase",
        "AWS (EC2, S3, Athena)",
        "GCP"
      ],
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
        "Prophet",
        "Hugging Face",
        "Matplotlib",
        "Seaborn",
        "React.js",
        "Next.js (App Router)",
        "Node.js",
        "Tailwind CSS",
        "Langchain"
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-center relative z-10">
            <span className="gradient-text block overflow-visible pb-1">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-[700px] mx-auto mb-12">
            Here are the technologies and tools I have worked with in my career.
          </p>
        </FadeIn>

        <div className="mb-12">
          <FadeIn>
            <h3 className="text-xl font-semibold mb-6 text-center">Certifications</h3>
            <div className="flex justify-center">
              <Link 
                href="https://www.credly.com/earner/earned/badge/fbb610f4-4236-4d7b-a5c9-0f369091effd"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img 
                  src="/aws.jpg" 
                  alt="AWS Certified Cloud Practitioner" 
                  className="w-32 h-32 object-contain"
                />
              </Link>
            </div>
          </FadeIn>
        </div>

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
