import { LinkSquare02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { createFileRoute, notFound } from '@tanstack/react-router'
import type { SkillConfig } from '@/components/home/skills-card'
import { GitHubIcon } from '@/components/icons/tools-icons'
import ProjectCarousel from '@/components/projects/project-carousel'
import MarkdownContent from '@/components/ui/MarkdownContent'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import DynamicSkillBadgeList from '@/components/ui/dynamic-skill-badge-list'
import { getProjectBySlug } from '@/content/projects'
import { getSkills } from '@/lib/skills-registry'

export const Route = createFileRoute('/_main-layout/projects/$projectname')({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.projectname)
    if (!project) throw notFound()
    return { project }
  },
  component: ProjectPage,
})

function ProjectPage() {
  const { project } = Route.useLoaderData()
  const techStack: Array<SkillConfig> = getSkills(project.techStack)

  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-12 mb-6">
        {project.title}
      </h1>
      <DynamicSkillBadgeList skills={techStack} />
      <div className="flex flex-col md:flex-row gap-6 mt-20">
        <div className="flex-1 space-y-4">
          <ProjectCarousel />
        </div>
        <div className="flex-1 space-y-4 pl-8">
          <Card className="min-h-96">
            <CardContent>
              <MarkdownContent>{project.content}</MarkdownContent>
            </CardContent>
            <CardFooter className="flex gap-2">
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="cursor-pointer">
                    <GitHubIcon className="size-4" />
                    View Repo
                    <HugeiconsIcon
                      icon={LinkSquare02Icon}
                      strokeWidth={2}
                      className="size-4"
                    />
                  </Button>
                </a>
              )}
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="cursor-pointer">
                    View Project
                    <HugeiconsIcon
                      icon={LinkSquare02Icon}
                      strokeWidth={2}
                      className="size-4"
                    />
                  </Button>
                </a>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
