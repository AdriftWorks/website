"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div className="space-y-6">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight"
          >
            Building AI tools, interactive systems, and digital worlds.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg md:text-xl text-zinc-400 max-w-xl"
          >
            Adrift Works is a creative technology studio focused on AI products,
            game development, and experimental systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex gap-4"
          >
            <a
              href="/projects"
              className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:opacity-90 transition"
            >
              Explore Projects
            </a>

            <a
              href="/tools"
              className="px-6 py-3 border border-zinc-700 rounded-xl text-zinc-300 hover:bg-zinc-800 transition"
            >
              View Tools
            </a>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative h-[400px] md:h-[500px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-xl border border-white/10"
          />
        </div>

      </div>
    </section>
  )
}
