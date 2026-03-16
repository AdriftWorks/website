"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
   <section className="relative z-10 h-screen flex flex-col items-center justify-center text-white px-6"> 

      {/* Studio Name Animation */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-heading mb-4 text-center"
      >
        Adrift Works
      </motion.h1>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-2xl md:text-3xl font-body text-center"
      >
        Creative Technology Studio
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-gray-300 mt-6 max-w-2xl text-center"
      >
        Building AI tools, game technology, and experimental software.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-10 flex flex-col md:flex-row gap-4 md:gap-6"
      >
        <a
          href="/projects"
          className="px-6 py-3 border border-white hover:bg-white hover:text-black transition rounded-lg text-center"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-6 py-3 border border-gray-500 hover:border-white transition rounded-lg text-center"
        >
          Work With Us
        </a>
      </motion.div>

    </section>
  )
}
