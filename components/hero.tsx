"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      {/* Studio Name */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-semibold tracking-tight text-center"
      >
        Adrift Works
      </motion.h1>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="text-xl md:text-2xl text-zinc-300 text-center mt-4"
      >
        Creative Technology Studio
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="text-zinc-400 mt-6 max-w-xl text-center text-base md:text-lg"
      >
        Building AI tools, game technology, and experimental systems.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-10 flex flex-col md:flex-row gap-4 md:gap-6"
      >
        <a
          href="/projects"
          className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:opacity-90 transition text-center"
        >
          View Projects
        </a>

        <a
          href="/tools"
          className="px-6 py-3 border border-zinc-700 hover:bg-zinc-800 transition rounded-xl text-center"
        >
          View Tools
        </a>
      </motion.div>

      {/* Bottom Fade (subtle depth) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />

    </section>
  )
}
