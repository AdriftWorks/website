"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-indie text-white">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl font-heading mb-4"
      >
        Adrift Works
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-3xl font-body"
      >
        Creative Technology Studio
      </motion.div>
    </section>
  );
}
</motion.h1>

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:.5}}
className="text-gray-400 mt-6 max-w-2xl"
>

Building AI tools, game technology, and experimental software.

</motion.p>

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
transition={{delay:1}}
className="mt-10 flex gap-6"
>

<a
href="/projects"
className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
>

View Projects

</a>

<a
href="/contact"
className="px-6 py-3 border border-gray-600 hover:border-white transition"
>

Work With Us

</a>

</motion.div>

</section>

)

}
