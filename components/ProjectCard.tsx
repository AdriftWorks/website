"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function ProjectCard({title,description,link}:{title:string,description:string,link:string}){

return(

<Link href={link}>

<motion.div
whileHover={{scale:1.05}}
className="bg-neutral-900 border border-neutral-800 p-6 rounded-xl transition hover:border-white"
>

<h3 className="text-xl font-semibold mb-2">
{title}
</h3>

<p className="text-gray-400">
{description}
</p>

</motion.div>

</Link>

)

}
