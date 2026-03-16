"use client"
import { motion } from "framer-motion"

export default function BackgroundAnimation() {
  const circles = Array.from({ length: 20 }, (_, i) => i)
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {circles.map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10 + i,
            delay: i * 0.3,
          }}
          className="absolute bg-purple-500 rounded-full w-4 h-4 md:w-6 md:h-6"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}
