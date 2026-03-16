import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-800 bg-black text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        <Link href="/" className="text-xl font-bold">
          Adrift Works
        </Link>

        <div className="flex gap-6 text-sm">
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
