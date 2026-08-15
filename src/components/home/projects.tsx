import ProjectCard from '../ui/project-card'
import type { ProjectsRow } from '@/types/database'

type ProjectCardData = Pick<
  ProjectsRow,
  'id' | 'title' | 'slug' | 'blurb' | 'thumbnail_url'
>

type Props = {
  projects: Array<ProjectCardData>
}

export default function Projects({ projects }: Props) {
  return (
    <section
      id="projects"
      className="my-20 flex flex-col items-center justify-center sm:my-24"
    >
      <h3 className="text-center text-4xl font-bold sm:text-5xl">Projects</h3>
      <div className="mt-8 grid min-h-[400px] w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            slug={project.slug}
            blurb={project.blurb}
            thumbnail_url={project.thumbnail_url}
          />
        ))}
      </div>
    </section>
  )
}
