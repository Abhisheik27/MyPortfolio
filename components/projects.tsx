"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerChildren } from "@/components/animations/stagger-children";
import { AnimatedCard } from "@/components/animations/animated-card";

export function Projects() {
  const projects = [
    {
      title: "AI Interview Assistant",
      description:
        "Built a full-stack AI-powered tool that simulates mock technical interviews using local LLMs.",
      image: "/ai_project.png",
      tags: ["Next.js", "Python", "Tailwind CSS", "Ollama", "Mistral", "CodeLlama", "REST APIs"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "CHF Detection from ECG Signals",
      description: "Developed a CNN-based deep learning model to detect Congestive Heart Failure (CHF) from raw ECG signals.",
      image: "/chf.jpg",
      tags: ["Python", "TensorFlow", "CNN", "Pandas", "Signal Processing"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhisheik27/cnn-for-chf-detection",
    },
    {
      title: "Climate Analysis using NorESM2",
      description: "Performed climate trend analysis using NorESM2 model output, focusing on CO₂-driven global and regional temperature shifts. Includes an interactive CLI for exploring projections.",
      image: "/climate.png",
      tags: ["Python", "Pandas", "Matplotlib", "Regression Analysis", "Climate Data", "CLI"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhisheik27/Climate-Data-Analysis",
    },
    {
      title: "Causal Effects of Socio-Economic Factors on Happiness",
      description: "Performed causal inference on World Happiness data to understand the impact of socioeconomic factors.",
      image: "/happiness.jpeg",
      tags: ["Python", "DoWhy", "LiNGAM", "Pandas", "Regression Analysis"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhisheik27/Causal-Effects-of-Socio-Economic-Factors-on-Happiness",
    },
    {
      title: "Deep Learning Library in C (APPL)",
      description: "Implemented a basic deep learning library from scratch in C to simulate the behavior of a simple 3-layer neural network.",
      image: "/dl.png",
      tags: ["C", "Linux", "Neural Networks", "Memory Management"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Document Summarization",
      description: "Compared extractive and abstractive methods for text summarization using BERTSum and LSA models.",
      image: "/docsum.jpg",
      tags: ["Python", "Hugging Face Transformers", "BERTSum", "Scikit-learn", "NLP"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-commerce AI Agent using KumoRFM",
      description:
        "Ecommerce analytics agent that answers queries, predicts customer behavior, and generates marketing insights via natural language.",
      image: "/aiagent.jpg",
      tags: ["KumoRFM", "RAG", "OpenAI API", "langchain", "Python"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhisheik27/Ecommerce-AI-agent-using-KumoRFM",
    },
    {
      title: "Flarpy Borb",
      description: "A simple Flappy Bird-style game built with Unity - my first ever Unity project featuring bird movement, pipe spawning, and scoring mechanics.",
      image: "/flarpy.png",
      tags: ["Unity", "C#", "Game Development", "2D Games", "Rigidbody2D", "Input System"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhisheik27/Flarpy-blorb",
    },
    {
      title: "Fraud Detection System",
      description: "Developed a fraud detection pipeline using traditional ML and neural networks, with over 3,200 engineered features.",
      image: "/fraud_detection.png",
      tags: ["Python", "XGBoost", "LightGBM", "Neural Networks", "Pandas", "Scikit-learn"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Google Trends Analysis",
      description: "Extracted and visualized trends using Google Trends data to explore behavioral patterns and interest over time.",
      image: "/gtrends.png",
      tags: ["R", "gTrendsR", "ggplot2", "dplyr", "Data Visualization"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhisheik27/Google-Trend-Analysis",
    },
    {
      title: "My Portfolio (yeah this one)",
      description:
        "Portfolio website built with modern web technologies featuring animations, dark mode, and section tracking.",
      image: "/portfolio.jpg",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
      githubUrl: "#",
    },
    {
      title: "Parallel Maxflow Algorithm Optimization",
      description: "Designed and optimized a distributed Push-Relabel Maxflow algorithm using MPI, enabling parallel execution across Linux nodes with fault-tolerant design.",
      image: "/maxflow.webp",
      tags: ["C", "MPI", "Linux", "NFS", "Multithreading", "Graph Algorithms"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Property Tax Fraud Detection (NYC)",
      description: "Identified potentially fraudulent property tax records in NYC using unsupervised machine learning, PCA, and anomaly detection techniques.",
      image: "nyc.png",
      tags: ["Python", "Jupyter Notebook", "pandas", "scikit-learn", "TensorFlow", "matplotlib", "pandas-profiling"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhisheik27/Property-Fraud-Detection",
    },
    {
      title: "Scalable Data Streaming System",
      description: "Designed a cloud-based data pipeline to simulate and process real-time stock market feeds.",
      image: "/stock.png",
      tags: ["Kafka", "AWS EC2", "S3", "Athena", "Python", "Data Ingestion"],
      liveUrl: "#",
      githubUrl: "https://github.com/Abhisheik27/Real-Time-Stock-Market-Data-Project",
    },
    {
      title: "Weather Forecasting",
      description: "Built a time series forecasting model for regional weather trends using historical climate data.",
      image: "weather.jpg",
      tags: ["Python", "Prophet", "Pandas", "Matplotlib", "Time Series Analysis"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 md:py-24 grid-pattern">
      <div className="container">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 text-center relative z-10">
            <span className="gradient-text block overflow-visible pb-1">My Projects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-[700px] mx-auto mb-12">
            Here are some of the projects I've worked on. Each project represents different skills and technologies.
          </p>
        </FadeIn>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
          {visibleProjects.map((project, index) => (
            <AnimatedCard key={index}>
              <Card className="overflow-hidden flex flex-col h-full border-2 border-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 p-[2px]">
                <div className="bg-background h-full rounded-lg flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={false}
                    />
                  </div>
                  <CardHeader className="flex-shrink-0">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription
                      className="line-clamp-2 min-h-[2.5rem]"
                      title={project.description}
                    >
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 5).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="rounded-full text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 5 && (
                        <Badge variant="secondary" className="rounded-full text-xs">
                          +{project.tags.length - 5}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  {project.title === "Document Summarization" ? (
                    <CardFooter className="flex-shrink-0">
                      <Button
                        variant="outline"
                        className="w-3/4 mx-auto transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white hover:border-blue-500 animate-in fade-in slide-in-from-bottom-4"
                        asChild
                      >
                        <Link href="https://chocolate-yard-038.notion.site/Document-Summarization-Using-Latent-Semantic-Indexing-eb81fc4925054d54af65571ceb5227e5" target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  ) : project.title === "E-commerce AI Agent using KumoRFM" ? (
                    <CardFooter className="flex-shrink-0">
                      <Button
                        variant="outline"
                        className="w-3/4 mx-auto transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white hover:border-blue-500 animate-in fade-in slide-in-from-bottom-4"
                        asChild
                      >
                        <Link href="https://github.com/Abhisheik27/Ecommerce-AI-agent-using-KumoRFM" target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  ) : project.title === "Property Tax Fraud Detection (NYC)" ? (
                    <CardFooter className="flex-shrink-0">
                      <Button
                        variant="outline"
                        className="w-3/4 mx-auto transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white hover:border-blue-500 animate-in fade-in slide-in-from-bottom-4"
                        asChild
                      >
                        <Link href="https://github.com/Abhisheik27/Property-Fraud-Detection" target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  ) : project.title === "CHF Detection from ECG Signals" ? (
                    <CardFooter className="flex-shrink-0">
                      <Button
                        variant="outline"
                        className="w-3/4 mx-auto transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white hover:border-blue-500 animate-in fade-in slide-in-from-bottom-4"
                        asChild
                      >
                        <Link href="https://github.com/Abhisheik27/cnn-for-chf-detection" target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  ) : project.title === "Climate Analysis using NorESM2" ? (
                    <CardFooter className="flex-shrink-0">
                      <Button
                        variant="outline"
                        className="w-3/4 mx-auto transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white hover:border-blue-500 animate-in fade-in slide-in-from-bottom-4"
                        asChild
                      >
                        <Link href="https://github.com/Abhisheik27/Climate-Data-Analysis" target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  ) : project.title === "Causal Effects of Socio-Economic Factors on Happiness" ? (
                    <CardFooter className="flex-shrink-0">
                      <Button
                        variant="outline"
                        className="w-3/4 mx-auto transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white hover:border-blue-500 animate-in fade-in slide-in-from-bottom-4"
                        asChild
                      >
                        <Link href="https://github.com/Abhisheik27/Causal-Effects-of-Socio-Economic-Factors-on-Happiness" target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  ) : project.title === "Google Trends Analysis" ? (
                    <CardFooter className="flex-shrink-0">
                      <Button
                        variant="outline"
                        className="w-3/4 mx-auto transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white hover:border-blue-500 animate-in fade-in slide-in-from-bottom-4"
                        asChild
                      >
                        <Link href="https://github.com/Abhisheik27/Google-Trend-Analysis" target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  ) : project.title === "Flarpy Borb" ? (
                    <CardFooter className="flex-shrink-0">
                      <Button
                        variant="outline"
                        className="w-3/4 mx-auto transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white hover:border-blue-500 animate-in fade-in slide-in-from-bottom-4"
                        asChild
                      >
                        <Link href="https://github.com/Abhisheik27/Flarpy-blorb" target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  ) : project.title === "Scalable Data Streaming System" ? (
                    <CardFooter className="flex-shrink-0">
                      <Button
                        variant="outline"
                        className="w-3/4 mx-auto transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white hover:border-blue-500 animate-in fade-in slide-in-from-bottom-4"
                        asChild
                      >
                        <Link href="https://github.com/Abhisheik27/Real-Time-Stock-Market-Data-Project" target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  ) : null}
                </div>
              </Card>
            </AnimatedCard>
          ))}
        </StaggerChildren>

        <div className="text-center mt-8">
          <Button onClick={() => {
            setShowAll(!showAll);
            if (showAll) {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            {showAll ? "View Less" : "View More"}
          </Button>
        </div>
      </div>
    </section>
  );
}
