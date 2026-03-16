import Link from "next/link";

export default function ProjectCard({ title, description, link }) {
  return (
    <Link href={link}>

      <div className="
        bg-neutral-900
        border border-neutral-800
        rounded-xl
        p-6
        transition-all
        duration-300
        hover:border-blue-500
        hover:scale-[1.03]
        hover:shadow-xl
        hover:shadow-blue-500/10
        cursor-pointer
      ">

        <h3 className="text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-neutral-400 text-sm">
          {description}
        </p>

      </div>

    </Link>
  );
}
