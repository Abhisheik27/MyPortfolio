"use client"

import { GraduationCap, Code, Briefcase, Rocket, Lightbulb, Trophy } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

interface TimelineItem {
    year: string
    title: string
    subtitle: string
    description: string
    icon: React.ReactNode
    iconColor: string
}

export function JourneyTimeline() {
    const timeline: TimelineItem[] = [
        {
            year: "2019",
            title: "Computer Engineering Begins",
            subtitle: "B.E. Computer Engineering @ University of Mumbai",
            description: "Built my foundation in data structures, algorithms, and deep learning. GPA: 3.73/4",
            icon: <GraduationCap className="w-5 h-5" />,
            iconColor: "bg-blue-500/20 text-blue-500 border-blue-500/30"
        },
        {
            year: "2023",
            title: "First Industry Experience",
            subtitle: "Machine Learning Intern @ Dunamis Engineers",
            description: "Fine-tuned CNN models for steel defect classification",
            icon: <Code className="w-5 h-5" />,
            iconColor: "bg-green-500/20 text-green-500 border-green-500/30"
        },
        {
            year: "2023-2025",
            title: "Master's in Data Science",
            subtitle: "MS in Data Science @ UC San Diego",
            description: "Deep dive into ML, distributed computing, and operating systems. Building real-world AI applications. GPA: 3.87/4",
            icon: <Lightbulb className="w-5 h-5" />,
            iconColor: "bg-yellow-500/20 text-yellow-500 border-yellow-500/30"
        },
        {
            year: "2024",
            title: "Research & Development",
            subtitle: "Python Developer @ UC San Diego",
            description: "Built distributed systems for ocean-atmosphere modeling.",
            icon: <Briefcase className="w-5 h-5" />,
            iconColor: "bg-orange-500/20 text-orange-500 border-orange-500/30"
        },
        {
            year: "2024",
            title: "Teaching & Mentoring",
            subtitle: "Instructional Assistant @ UC San Diego",
            description: "Teaching assistant for DSC200 Python Programming course, mentoring students in Python and data science concepts.",
            icon: <Trophy className="w-5 h-5" />,
            iconColor: "bg-cyan-500/20 text-cyan-500 border-cyan-500/30"
        },
        {
            year: "2025",
            title: "Software Engineer Intern",
            subtitle: "Easley Dunn Productions Inc.",
            description: "Contributing to RobotRace (100K+ downloads). Optimizing Unity gameplay systems and backend integrations for iOS/Android.",
            icon: <Rocket className="w-5 h-5" />,
            iconColor: "bg-purple-500/20 text-purple-500 border-purple-500/30"
        }
    ]

    return (
        <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

            <div className="space-y-8">
                {timeline.map((item, index) => (
                    <FadeIn key={index} delay={index * 0.1} direction="right">
                        <div className="relative pl-16 group">
                            {/* Icon */}
                            <div className={`absolute left-0 flex items-center justify-center w-12 h-12 rounded-full border-2 ${item.iconColor} backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                                {item.icon}
                            </div>

                            {/* Content */}
                            <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                        {item.year}
                                    </span>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                </div>
                                <p className="text-sm font-medium text-muted-foreground mb-2">
                                    {item.subtitle}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    )
}
