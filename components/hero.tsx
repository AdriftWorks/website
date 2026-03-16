"use client"

import { motion } from "framer-motion"

export default function Hero(){

return(

<section className="relative flex flex-col items-center justify-center text-center py-40 px-6 overflow-hidden">

<motion.h1
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-5xl md:text-7xl font-bold"
>

Creative Technology Studio

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
