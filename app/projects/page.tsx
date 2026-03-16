"use client"
import ProjectCard from "@/components/ProjectCard"

const projects = [
  {
    title: "Aether Frontier",
    description: "Mobile RPG with exploration, gacha, and arena mechanics.",
    link: "/projects/aether-frontier",
  },
  {
    title: "AI Game Idea Generator",
    description: "Generate unique indie game ideas.",
    link: "/projects/ai-game-generator",
  },
  {
    title: "Procedural World Builder",
    description: "Generate explorable worlds.",
    link: "/projects/world-builder",
  },
  {
    title: "Automation Toolkit",
    description: "AI automation systems.",
    link: "/projects/automation",
  },
]

export default function Projects() {
  return (
    <div className="relative max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-10 text-white">Projects</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}
