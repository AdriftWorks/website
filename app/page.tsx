import Hero from "@/components/hero"
import IdentityStrip from "@/components/IdentityStrip"
import Capabilities from "@/components/Capabilities"
import ToolHighlight from "@/components/ToolHighlight"
import CTA from "@/components/CTA"
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
