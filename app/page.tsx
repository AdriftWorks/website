import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-5xl md:text-7xl font-bold">
          Creative Technology Studio
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl">
          Building AI tools, game technology, and experimental software.
        </p>

        <div className="mt-10 flex gap-6">
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
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-2xl font-bold mb-6">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <ProjectCard
            title="AI Indie Game Idea Generator"
            description="Generate unique indie game concepts."
            link="/projects/ai-game-generator"
          />

          <ProjectCard
            title="Procedural World Builder"
            description="Tools for creating dynamic game worlds."
            link="/projects/world-builder"
          />

          <ProjectCard
            title="Automation Toolkit"
            description="AI systems that automate creative workflows."
            link="/projects/automation"
          />

          <ProjectCard
            title="AI Writing Engine"
            description="AI system for long-form content generation."
            link="/projects/ai-writing-engine"
          />

          <ProjectCard
            title="Procedural Game Engine"
            description="Experimental game world generator."
            link="/projects/procedural-engine"
          />

          <ProjectCard
            title="Creative AI Lab"
            description="Internal tools for creators and developers."
            link="/projects/creative-ai-lab"
          />

        </div>

      </section>

    </main>
  );
}
