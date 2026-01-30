"use client"

import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"

interface Player {
    name: string
    position: string
    category: string
    x: number
    y: number
}

export function FootballSkills() {
    // YOUR MAIN XI (Strongest Skills) - 4-3-3 Formation with FIXED positions
    const players: Player[] = [
        // Attack
        { name: "PyTorch", position: "LW", category: "ML/DL", x: 17, y: 23 },
        { name: "RAG", position: "ST", category: "AI/LLM", x: 50, y: 18 },
        { name: "Spark", position: "RW", category: "Big Data", x: 83, y: 23 },

        // Midfield
        { name: "FastAPI", position: "CAM", category: "Backend", x: 32, y: 40 },
        { name: "AWS", position: "CAM", category: "Cloud", x: 67, y: 40 },
        { name: "Docker", position: "CDM", category: "DevOps", x: 50, y: 60 },

        // Defense
        { name: "Python", position: "LB", category: "Core Language", x: 17, y: 65 },
        { name: "TypeScript", position: "RB", category: "Language", x: 83, y: 65 },
        { name: "Linux", position: "CB", category: "OS/Systems", x: 38, y: 78 },
        { name: "SQL", position: "CB", category: "Database", x: 62, y: 78 },

        // Goalkeeper
        { name: "Git", position: "GK", category: "Version Control", x: 50, y: 92 },
    ]

    // Bench - All other skills
    const benchSkills = [
        "C++", "C#", "C", "Java", "Go", "R", "JavaScript", "HTML/CSS",
        "React.js", "Next.js", "Node.js", "Scikit-learn", "Pandas", "NumPy",
        "TensorFlow", "KumoRFM", "LangChain", "Prophet", "Hugging Face",
        "PostgreSQL", "DynamoDB", "Supabase", "REST APIs", "MPI", "Unity", "Tableau",
        "Azure", "GCP", "Kubernetes", "Kafka", "ElasticSearch", "Lambda",
        "Tailwind CSS", "Shadcn UI",
        "OpenAI API", "Jupyter", "Google Colab", "Ray"
    ]

    const PlayerCard = ({ player }: { player: Player }) => (
        <div
            className="absolute flex flex-col items-center gap-1 select-none"
            style={{
                left: `${player.x}%`,
                top: `${player.y}%`,
                transform: 'translate(-50%, -50%)',
            }}
        >
            {/* Position label on pitch */}
            <div className="text-[9px] font-bold text-white uppercase tracking-wide">{player.position}</div>

            {/* Dot on pitch */}
            <div className="w-2 h-2 rounded-full bg-white shadow-md"></div>

            {/* Card with rainbow gradient border */}
            <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 p-[2px] rounded-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-white rounded-lg px-3 py-1.5 hover:scale-105 transition-transform duration-300 min-w-[60px]">
                    <div className="font-bold text-[11px] text-gray-900 text-center leading-tight">{player.name}</div>
                </div>
            </div>
        </div>
    )

    return (
        <section id="skills" className="py-16 md:py-24 bg-muted/50">
            <div className="container max-w-6xl mx-auto">
                <FadeIn>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-center">
                        <span className="gradient-text">The Tech Squad</span>
                    </h2>
                    {/* <p className="text-muted-foreground text-center max-w-[700px] mx-auto mb-8">
                        Starting XI in a 4-3-3 formation ⚽
                    </p> */}
                </FadeIn>

                {/* AWS Certification */}
                <div className="mb-8">
                    <FadeIn>
                        <div className="flex justify-center">
                            <Link
                                href="https://www.credly.com/earner/earned/badge/fbb610f4-4236-4d7b-a5c9-0f369091effd"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-105"
                            >
                                <div className="text-center">
                                    <p className="text-sm font-semibold mb-2">🏆 AWS Certified</p>
                                    <img
                                        src="/aws.jpg"
                                        alt="AWS Certified Cloud Practitioner"
                                        className="w-20 h-20 object-contain mx-auto"
                                    />
                                </div>
                            </Link>
                        </div>
                    </FadeIn>
                </div>

                {/* 2-Column Layout */}
                <div className="grid lg:grid-cols-[1.2fr,1fr] gap-6">

                    {/* Football Pitch */}
                    <FadeIn delay={0.2}>
                        <div className="relative">
                            {/* Pitch Container */}
                            <div
                                className="relative bg-[#00B140] rounded-lg border-4 border-white/90 shadow-2xl w-full max-w-md mx-auto overflow-hidden select-none aspect-[2/3]"
                            >

                                {/* Pitch Lines */}
                                <div className="absolute inset-0 pointer-events-none">
                                    {/* Outer border */}
                                    <div className="absolute inset-2 border-2 border-white rounded-sm" />

                                    {/* Halfway line */}
                                    <div className="absolute left-2 right-2 top-1/2 h-[2px] bg-white" />

                                    {/* Center circle */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-white" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" />

                                    {/* Top goal area */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 border-2 border-white border-t-0" />

                                    {/* Top penalty area */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-60 h-20 border-2 border-white border-t-0" />

                                    {/* Top penalty arc */}
                                    <div className="absolute top-[88px] left-1/2 -translate-x-1/2 w-20 h-10 rounded-b-full border-2 border-white border-t-0" />

                                    {/* Top penalty spot */}
                                    <div className="absolute top-14 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white" />

                                    {/* Bottom goal area */}
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-6 border-2 border-white border-b-0" />

                                    {/* Bottom penalty area */}
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-60 h-20 border-2 border-white border-b-0" />

                                    {/* Bottom penalty arc */}
                                    <div className="absolute bottom-[88px] left-1/2 -translate-x-1/2 w-20 h-10 rounded-t-full border-2 border-white border-b-0" />

                                    {/* Bottom penalty spot */}
                                    <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white" />

                                    {/* Corner arcs */}
                                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-white rounded-tl-full" />
                                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-white rounded-tr-full" />
                                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-white rounded-bl-full" />
                                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-white rounded-br-full" />
                                </div>

                                {/* Fixed Players */}
                                {players.map((player, index) => (
                                    <PlayerCard key={index} player={player} />
                                ))}

                            </div>

                            {/* Formation Label */}
                            <div className="text-center mt-4">
                                {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                                    <span className="text-sm font-semibold text-primary">4-3-3 Formation</span>
                                </div> */}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Bench */}
                    <FadeIn delay={0.3}>
                        <div className="bg-card border border-border rounded-lg p-5 shadow-lg">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <span>🪑 Bench</span>
                            </h3>
                            <div className="space-y-1.5 max-h-[500px] overflow-y-auto pr-2">
                                {benchSkills.sort().map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="px-3 py-2 bg-muted/50 border border-border/50 rounded text-sm hover:bg-primary/5 hover:border-primary/30 transition-all cursor-default"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-muted-foreground mt-4 pt-3 border-t text-center">
                                +{benchSkills.length} more skills
                            </p>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </section>
    )
}
