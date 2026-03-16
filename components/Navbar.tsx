"use client"

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-neutral-800 bg-black">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <Link href="/" className="text-xl font-bold">
          Adrift Works
        </Link>

        <div className="flex gap-6 text-sm text-neutral-300">
          <Link href="/projects">Projects</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/labs">Labs</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
