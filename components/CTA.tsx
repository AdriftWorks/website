// components/sections/CTA.tsx

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Need Something Built?
        </h2>

        <p className="text-zinc-400 mb-8">
          We design and build AI systems, tools, and workflows tailored to your business.
        </p>

        <a
          href="/contact"
          className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
        >
          Request a Build
        </a>

      </div>
    </section>
  )
}
