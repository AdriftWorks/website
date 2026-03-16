import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import Contact from "@/components/contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Hero />

      <FeaturedProjects />

      <Contact />

    </main>
  )
}
