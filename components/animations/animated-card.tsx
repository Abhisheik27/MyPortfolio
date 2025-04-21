"use client"

import type React from "react"

import { motion } from "framer-motion"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  return (
    <motion.div className={className} whileHover={{ y: -5, transition: { duration: 0.2 } }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.div>
  )
}
