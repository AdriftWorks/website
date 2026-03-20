"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Glow (let it breathe) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      {/* Vignette (cinematic depth) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 space-y-6">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight 
                     bg-gradient-to-r from-white via-zinc-200 to-zinc-400 
                     bg-clip-text text-transparent"
        >
          Adrift Works
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-lg md:text-xl text-zinc-300 max-w-xl"
        >
          Creative technology studio building AI tools, interactive systems, and digital worlds.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex gap-4 mt-4"
        >
          <a
            href="/projects"
            className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:opacity-90 transition"
          >
            Explore Projects
          </a>

          <a
            href="/tools"
            className="px-6 py-3 border border-white/20 text-white rounded-xl hover:bg-white/10 transition"
          >
            View Tools
          </a>
        </motion.div>

      </div>
    </section>
  )
}
