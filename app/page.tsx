import Hero from "@/components/hero"
import IdentityStrip from "@/components/sections/IdentityStrip"
import BackgroundAnimation from "@/components/BackgroundAnimation"

export default function Home() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">

      {/* Background */}
      <BackgroundAnimation />

      {/* Content */}
      <Hero />
      <IdentityStrip />

    </main>
  );
}
