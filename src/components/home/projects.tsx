import ProjectCard from "../ui/project-card"
import type { ProjectsRow } from "@/types/database"

type ProjectCardData = Pick<
    ProjectsRow,
    'id' | 'title' | 'slug' | 'blurb' | 'thumbnail_url'
>

type Props = {
    projects: Array<ProjectCardData>
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
