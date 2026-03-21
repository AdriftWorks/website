import Hero from "@/components/hero"
import IdentityStrip from "@/components/IdentityStrip"
import Capabilities from "@/components/sections/Capabilities"
import ToolHighlight from "@/components/sections/ToolHighlight"
import CTA from "@/components/sections/CTA"
import BackgroundAnimation from "@/components/BackgroundAnimation"

export default function Home() {
  return (
    <main className="relative bg-black text-white min-h-screen">

      <BackgroundAnimation />

      <Hero />
      <IdentityStrip />
      <Capabilities />
      <ToolHighlight />
      <CTA />

    </main>
  )
}
