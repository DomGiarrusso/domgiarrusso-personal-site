import type { ProjectSummary } from '@/content/types'
import ProjectCard from '@/components/ui/project-card'
import { Reveal } from '@/components/motion/reveal'

type Props = {
  projects: Array<ProjectSummary>
}

export default function Projects({ projects }: Props) {
  return (
    <section
      id="projects"
      className="my-20 flex flex-col items-center justify-center sm:my-24"
    >
      <Reveal>
        <h3 className="text-center text-4xl font-bold sm:text-5xl">Projects</h3>
      </Reveal>
      <div className="mt-8 grid min-h-100 w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            key={project.slug}
            className="h-full"
            delay={(index % 3) * 80}
          >
            <ProjectCard
              title={project.title}
              slug={project.slug}
              blurb={project.blurb}
              thumbnailUrl={project.thumbnailUrl}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
