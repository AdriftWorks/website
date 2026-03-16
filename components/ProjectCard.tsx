import Link from "next/link";

export default function ProjectCard({ title, description, link }) {
  return (
    <Link href={link}>
      <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer group">

        <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400">
          {title}
        </h3>

        <p className="text-neutral-400 text-sm">
          {description}
        </p>

      </div>
    </Link>
  );
}
