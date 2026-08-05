"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"

type Project = {
  title: string
  description: string
  usecase: string
  image: string
  imageFit?: "cover" | "contain"
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

function projectHref(project: Project) {
  if (project.liveUrl && project.liveUrl !== "#") return project.liveUrl
  if (project.githubUrl && project.githubUrl !== "#") return project.githubUrl
  return null
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Doomscroll Agent",
      description:
        "An end-to-end social knowledge pipeline that monitors X (Twitter), clusters noisy posts into narratives, filters for relevance, and turns them into timestamped market insights with recommended actions. Built with n8n orchestration, a FastAPI workflow engine, MongoDB lineage, Redis caching, and a Streamlit dashboard for review.",
      usecase: "Supply Chain, Social Media Analytics, Market Research",
      image: "/marketintel.png",
      imageFit: "contain",
      tags: ["FastAPI", "n8n", "MongoDB", "Redis", "Apify", "OpenAI", "Python", "Streamlit", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhisheik27/Doomscroll-Agent",
    },
    {
      title: "ClinicalTrialAI",
      description:
        "A FastAPI backend that answers natural-language questions about clinical trials and returns frontend-ready Vega-Lite charts from the ClinicalTrials.gov Data API v2. The LLM is limited to query planning only — every count, chart value, and citation is computed deterministically in Python, with a fallback planner that works even without an OpenAI key.",
      usecase: "Healthcare Analytics, Clinical Research, Life Sciences",
      image: "/clinical-trial-ai.png",
      tags: ["FastAPI", "Pydantic", "ClinicalTrials.gov", "OpenAI", "Vega-Lite", "Docker", "pytest"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhisheik27/ClinicalTrialAI",
    },
    {
      title: "E-commerce AI Agent using KumoRFM",
      description:
        "A conversational analytics agent for ecommerce data that answers natural-language questions, runs dataframe queries, and uses KumoRFM predictive queries to forecast customer behavior and demand. A graph-based workflow routes each ask to the right tool so both technical and non-technical users can get actionable marketing insights.",
      usecase: "E-commerce, Marketing Analytics, Customer Insights",
      image: "/aiagent.jpg",
      tags: ["KumoRFM", "RAG", "OpenAI API", "langchain", "Python"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhisheik27/Ecommerce-AI-agent-using-KumoRFM",
    },
    {
      title: "Scalable Data Streaming System",
      description:
        "A cloud streaming pipeline that simulates real-time stock market feeds with Kafka on AWS EC2. A producer streams market data into a Kafka topic while a consumer writes messages to S3 for durable storage, with Athena available for downstream querying of the persisted data.",
      usecase: "Fintech, Real-Time Analytics, Cloud Data Pipelines",
      image: "/stock.png",
      tags: ["Kafka", "AWS EC2", "S3", "Athena", "Python", "Data Ingestion"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhisheik27/Real-Time-Stock-Market-Data-Project",
    },
    {
      title: "CHF Detection from ECG Signals",
      description:
        "A convolutional neural network that detects Congestive Heart Failure from raw ECG signals, following published research methods and using Grad-CAM for explainability so model decisions can be inspected on the signal itself. Includes data processing and a classification notebook for reproducible training and evaluation.",
      usecase: "Healthcare, Medical AI, Clinical Screening",
      image: "/chf.jpg",
      tags: ["Python", "TensorFlow", "CNN", "Pandas", "Signal Processing", "Grad-CAM"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhisheik27/cnn-for-chf-detection",
    },
  ]

  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const maxScroll = el.scrollWidth - el.clientWidth
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft < maxScroll - 4)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener("scroll", updateScrollState, { passive: true })
    window.addEventListener("resize", updateScrollState)
    return () => {
      el.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [updateScrollState])

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-project-card]")
    const gap = 20
    const amount = (card?.offsetWidth ?? 300) + gap
    el.scrollBy({ left: direction * amount, behavior: "smooth" })
  }

  return (
    <section id="projects" className="py-16 md:py-24 grid-pattern">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-10 text-center relative z-10">
            <span className="gradient-text block overflow-visible pb-1">My Projects</span>
          </h2>
        </FadeIn>
      </div>

      <div className="mx-auto flex w-full max-w-[90rem] items-center gap-2 sm:gap-4 px-3 sm:px-6">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="group shrink-0 rounded-full h-12 w-12 border-2 border-foreground bg-background shadow-sm transition-all duration-200 hover:scale-110 hover:bg-foreground hover:text-background hover:shadow-md active:scale-95 disabled:pointer-events-none disabled:opacity-25 disabled:shadow-none disabled:hover:scale-100 disabled:hover:bg-background disabled:hover:text-foreground"
          aria-label="Previous projects"
          disabled={!canScrollLeft}
          onClick={() => scrollByCard(-1)}
        >
          <ChevronLeft
            className={`h-5 w-5 transition-transform duration-200 group-hover:-translate-x-0.5 ${
              canScrollLeft ? "animate-nudge-left" : ""
            }`}
          />
        </Button>

        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {projects.map((project) => {
            const href = projectHref(project)
            return (
              <article
                key={project.title}
                data-project-card
                className="flex w-[min(88vw,380px)] sm:w-[400px] md:w-[420px] shrink-0 snap-start flex-col border-2 border-foreground bg-background"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden border-b-2 border-foreground ${
                    project.imageFit === "contain" ? "bg-[#0B1220]" : "bg-muted"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={project.imageFit === "contain" ? "object-contain p-4" : "object-cover"}
                    sizes="(max-width: 640px) 88vw, (max-width: 768px) 400px, 420px"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5 pb-6">
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed">
                      <span className="font-semibold text-foreground">Use case: </span>
                      <span className="text-muted-foreground">
                        {project.usecase.trim() ? project.usecase : "—"}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-sm text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                    {href ? (
                      <Button variant="outline" size="sm" className="mt-auto w-full gap-2" asChild>
                        <Link href={href} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    ) : (
                    <div className="mt-auto h-9" aria-hidden />
                  )}
                </div>
              </article>
            )
          })}
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="group shrink-0 rounded-full h-12 w-12 border-2 border-foreground bg-background shadow-sm transition-all duration-200 hover:scale-110 hover:bg-foreground hover:text-background hover:shadow-md active:scale-95 disabled:pointer-events-none disabled:opacity-25 disabled:shadow-none disabled:hover:scale-100 disabled:hover:bg-background disabled:hover:text-foreground"
          aria-label="Next projects"
          disabled={!canScrollRight}
          onClick={() => scrollByCard(1)}
        >
          <ChevronRight
            className={`h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 ${
              canScrollRight ? "animate-nudge-right" : ""
            }`}
          />
        </Button>
      </div>

      <div className="mt-10 flex justify-center px-4">
        <Button variant="outline" className="border-2 border-foreground gap-2" asChild>
          <Link
            href="https://github.com/Abhisheik27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
            View more on GitHub
          </Link>
        </Button>
      </div>
    </section>
  )
}
