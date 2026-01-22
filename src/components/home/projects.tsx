import ProjectCard from "../ui/project-card"

type ProjectCardData = {
    id: string
    title: string
    slug: string
    blurb: string
    thumbnail_url: string
}
type Props = {
    projects: ProjectCardData[]
}

export default function Projects({ projects }: Props) {

    return (
        <section id="projects" className="flex flex-col items-center justify-center my-24">
            <h3 className="text-5xl font-bold text-center">Projects</h3>
            <div className="flex flex-wrap justify-center gap-6 mt-8 w-full min-h-[400px] ">
                {projects.map((project) => (
                    <ProjectCard key={project.id} title={project.title} slug={project.slug} blurb={project.blurb} thumbnail_url={project.thumbnail_url} />
                ))}
            </div>
        </section>
    )

}