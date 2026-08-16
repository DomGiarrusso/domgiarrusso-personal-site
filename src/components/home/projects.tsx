import ProjectCard from '../ui/project-card'
import type { ProjectSummary } from '@/content/types'

type Props = {
  projects: Array<ProjectSummary>
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
            thumbnailUrl={project.thumbnailUrl}
          />
        ))}
      </div>
    </section>
  )
}
