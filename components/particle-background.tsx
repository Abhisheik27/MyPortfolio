"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
}

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { theme } = useTheme()
    const mouseRef = useRef({ x: 0, y: 0 })
    const particlesRef = useRef<Particle[]>([])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener("resize", resize)

        // Particle settings
        const particleCount = 80
        const maxDistance = 120
        const mouseRadius = 150

        // Initialize particles
        const initParticles = () => {
            particlesRef.current = []
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1,
                })
            }
        }
        initParticles()

        // Mouse move tracking
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX
            mouseRef.current.y = e.clientY
        }
        window.addEventListener("mousemove", handleMouseMove)

        // Animation loop
        let animationFrameId: number

        const animate = () => {
            if (!ctx || !canvas) return

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Theme-based colors
            const isDark = theme === "dark" || theme === "system"
            const particleColor = isDark ? "rgba(168, 85, 247, 0.8)" : "rgba(139, 92, 246, 0.7)"
            const lineColor = isDark ? "rgba(168, 85, 247, 0.15)" : "rgba(139, 92, 246, 0.12)"
            const mouseLineColor = isDark ? "rgba(168, 85, 247, 0.3)" : "rgba(139, 92, 246, 0.25)"

            const particles = particlesRef.current

            // Update and draw particles
            particles.forEach((particle, i) => {
                // Update position
                particle.x += particle.vx
                particle.y += particle.vy

                // Bounce off edges
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

                // Keep particles in bounds
                particle.x = Math.max(0, Math.min(canvas.width, particle.x))
                particle.y = Math.max(0, Math.min(canvas.height, particle.y))

                // Mouse interaction - repel particles
                const dx = mouseRef.current.x - particle.x
                const dy = mouseRef.current.y - particle.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < mouseRadius) {
                    const angle = Math.atan2(dy, dx)
                    const force = (mouseRadius - distance) / mouseRadius
                    particle.vx -= Math.cos(angle) * force * 0.2
                    particle.vy -= Math.sin(angle) * force * 0.2
                }

                // Apply damping
                particle.vx *= 0.99
                particle.vy *= 0.99

                // Draw particle
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
                ctx.fillStyle = particleColor
                ctx.fill()

                // Draw connections to nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const other = particles[j]
                    const dx = particle.x - other.x
                    const dy = particle.y - other.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < maxDistance) {
                        ctx.beginPath()
                        ctx.moveTo(particle.x, particle.y)
                        ctx.lineTo(other.x, other.y)
                        const opacity = (1 - distance / maxDistance) * 0.5
                        ctx.strokeStyle = lineColor.replace(/[\d.]+\)$/g, `${opacity})`)
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                }

                // Draw connection to mouse
                const mouseDistance = Math.sqrt(dx * dx + dy * dy)
                if (mouseDistance < mouseRadius) {
                    ctx.beginPath()
                    ctx.moveTo(particle.x, particle.y)
                    ctx.lineTo(mouseRef.current.x, mouseRef.current.y)
                    const opacity = (1 - mouseDistance / mouseRadius) * 0.3
                    ctx.strokeStyle = mouseLineColor.replace(/[\d.]+\)$/g, `${opacity})`)
                    ctx.lineWidth = 1
                    ctx.stroke()
                }
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        // Cleanup
        return () => {
            window.removeEventListener("resize", resize)
            window.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [theme])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    )
}
