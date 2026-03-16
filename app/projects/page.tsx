import ProjectCard from "@/components/ProjectCard"

export default function Projects(){

return(

<div className="max-w-6xl mx-auto px-6 py-24">

<h1 className="text-4xl font-bold mb-10">
Projects
</h1>

<div className="grid md:grid-cols-3 gap-6">

<ProjectCard
title="AI Game Idea Generator"
description="Generate unique indie game ideas."
link="/projects/ai-game-generator"
/>

<ProjectCard
title="Procedural World Builder"
description="Generate explorable worlds."
link="/projects/world-builder"
/>

<ProjectCard
title="Automation Toolkit"
description="AI automation systems."
link="/projects/automation"
/>

</div>

</div>

)

}
