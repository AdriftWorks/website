"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  link: string
  image?: string
}

export default function ProjectCard({ title, description, link, image }: ProjectCardProps) {
  return (
    <Link href={link}>
      <motion.div
        whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(58, 204, 225, 0.3)" }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl overflow-hidden cursor-pointer"
      >
        {/* Optional image for future feature */}
        {image && <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />}

        <h3 className="text-xl font-heading mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </motion.div>
    </Link>
  )
}
