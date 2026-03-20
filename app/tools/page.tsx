import Link from "next/link";

export default function Tools() {
  const tools = [
    {
      name: "AI Startup Idea Generator",
      description: "Generate startup ideas, monetization strategies, and next steps.",
      href: "/tools/idea-generator",
    },
    // add future tools here
  ];

  return (
    <div className="space-y-6 p-4">
      <h1 className="text-3xl font-bold">Tools</h1>
      <p className="text-neutral-400">
        AI tools and utilities created by Adrift Works.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {tools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className="p-4 border rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            <h2 className="text-xl font-semibold">{tool.name}</h2>
            <p className="text-neutral-500">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
