"use client"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-400 py-8 mt-20 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-sm">
          © {new Date().getFullYear()} Adrift Works. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Twitter
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="/contact"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>

      </div>
    </footer>
  )
}
