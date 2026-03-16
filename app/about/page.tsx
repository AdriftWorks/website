"use client"
import BackgroundAnimation from "@/components/BackgroundAnimation"

export default function About() {
  return (
    <main className="relative min-h-screen px-6 py-16">
      <BackgroundAnimation />

      <div className="max-w-4xl mx-auto space-y-12 text-white">
        {/* Header */}
        <section className="space-y-4">
        <h1 className="text-4xl font-bold">About AdriftWorks</h1>

        <p className="text-neutral-400">
          AdriftWorks is an independent creative technology studio focused on
          building games, intelligent software, experimental hardware, and
          digital tools.
        </p>

        <p className="text-neutral-400">
          The studio operates at the intersection of creativity, engineering,
          and emerging technology — exploring how small teams and modern AI can
          build powerful products, immersive worlds, and scalable digital systems.
        </p>
      </section>

      {/* Divisions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Studio Divisions</h2>

        <ul className="space-y-2 text-neutral-400">
          <li><strong>Blackframe Interactive</strong> – game development and original IP</li>
          <li><strong>Nexori Labs</strong> – AI tools and SaaS platforms</li>
          <li><strong>Obsidian Circuit</strong> – hardware experiments and device engineering</li>
          <li><strong>Daedal Labs</strong> – research and experimental technology</li>
        </ul>
      </section>

      {/* Mission */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Mission</h2>

        <p className="text-neutral-400">
          Build interesting things. Document the journey. Turn ideas into real systems.
        </p>

        <p className="text-neutral-400">
          The studio believes the future of technology will be driven by
          independent creators who combine software, AI, and hardware to build
          new types of products and experiences.
        </p>

        <p className="text-neutral-400">
          AdriftWorks exists to explore that future.
        </p>
      </section>

      {/* Founder */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Founder</h2>

        <p className="text-neutral-400">
          AdriftWorks was founded by <strong>Kyle Mashburn</strong>, a builder
          and technologist exploring the intersection of game development,
          artificial intelligence, software systems, and creative engineering.
        </p>

        <p className="text-neutral-400">
          The studio operates as an evolving lab where ideas are tested,
          built, and refined in public — turning experiments into real
          products, tools, and worlds.
        </p>
      </section>

      {/* Philosophy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Philosophy</h2>

        <ul className="space-y-2 text-neutral-400">
          <li>Small teams can build powerful technology</li>
          <li>AI accelerates creativity and engineering</li>
          <li>Games and software are forms of digital craftsmanship</li>
          <li>The best way to learn is to build in the open</li>
        </ul>

        <p className="text-neutral-400">
          AdriftWorks is not just a company. It’s a long-term experiment in
          building a modern creative technology studio from the ground up.
        </p>
      </section>

    </main>
  );
}
