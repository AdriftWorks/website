import ProjectCard from "./ProjectCard"

export default function FeaturedProjects() {

const projects = [

{
title:"AI Indie Game Idea Generator",
description:"Generate unique indie game concepts.",
link:"/projects/ai-game-generator"
},

{
title:"Procedural World Builder",
description:"Tools for creating dynamic game worlds.",
link:"/projects/world-builder"
},

{
title:"Automation Toolkit",
description:"AI systems that automate creative workflows.",
link:"/projects/automation"
},

{
title:"AI Writing Engine",
description:"AI system for long-form content generation.",
link:"/projects/ai-writing-engine"
},

{
title:"Procedural Game Engine",
description:"Experimental game world generator.",
link:"/projects/procedural-engine"
},

{
title:"Creative AI Lab",
description:"Internal tools for creators and developers.",
link:"/projects/creative-ai-lab"
}

]

return (

<section className="max-w-6xl mx-auto px-6 pb-24">

<h2 className="text-3xl font-bold mb-8">
Featured Projects
</h2>

<div className="grid md:grid-cols-3 gap-6">

{projects.map((p,i)=>(
<ProjectCard key={i} {...p}/>
))}

</div>

</section>

)

}
