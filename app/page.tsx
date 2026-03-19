import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import Contact from "@/components/contact"
import Footer from "@/components/Footer"
import BackgroundAnimation from "@/components/BackgroundAnimation"
import IdentityStrip from "@/components/sections/IdentityStrip"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Hero />

      <FeaturedProjects />

      <Contact />

       <IdentityStrip />

       <Footer />

      <BackgroundAnimation />

    </main>
  );
}
