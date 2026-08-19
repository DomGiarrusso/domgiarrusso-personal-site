import { ArrowLeft01Icon, LinkSquare02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { createFileRoute, notFound } from '@tanstack/react-router'
import type { SkillConfig } from '@/components/home/skills-card'
import { GitHubIcon } from '@/components/icons/tools-icons'
import ArticleContent from '@/components/content/article-content'
import ProjectCarousel from '@/components/projects/project-carousel'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import DynamicSkillBadgeList from '@/components/ui/dynamic-skill-badge-list'
import { getProjectBySlug, getProjectContentBySlug } from '@/content/projects'
import { getSkills } from '@/lib/skills-registry'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/_main-layout/projects/$projectname')({
  loader: ({ params }) => {
    const project = getProjectBySlug(params.projectname)
    const content = getProjectContentBySlug(params.projectname)
    if (!project || !content) throw notFound()
    return { project }
  },
  component: ProjectPage,
})

function ProjectPage() {
  const { project } = Route.useLoaderData()
  const ProjectContent = getProjectContentBySlug(project.slug)
  const techStack: Array<SkillConfig> = getSkills(project.techStack)

  if (!ProjectContent) throw notFound()

  return (
    <div className="pb-16 sm:pb-24">
      <header className="mx-auto mt-12 max-w-3xl text-center sm:mt-16">
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-pretty text-muted-foreground sm:text-lg">
          {project.blurb}
        </p>
        {techStack.length > 0 && (
          <DynamicSkillBadgeList skills={techStack} className="mt-5" />
        )}
      </header>

      <div className="mx-auto mt-8 max-w-5xl">
        <nav
          aria-label="Project navigation"
          className="flex flex-wrap items-center justify-between gap-3 border-b border-primary-alt pb-3"
        >
          <a
            href="/#projects"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'cursor-pointer',
            )}
          >
            <HugeiconsIcon
              icon={ArrowLeft01Icon}
              strokeWidth={2}
              className="size-4"
            />
            Back to projects
          </a>

          {(project.repositoryUrl || project.externalUrl) && (
            <div className="ml-auto flex flex-wrap items-center justify-end gap-2">
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'outline' }),
                    'cursor-pointer',
                  )}
                >
                  <GitHubIcon className="size-4" />
                  View repo
                  <HugeiconsIcon
                    icon={LinkSquare02Icon}
                    strokeWidth={2}
                    className="size-4"
                  />
                </a>
              )}
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'cursor-pointer',
                  )}
                >
                  View project
                  <HugeiconsIcon
                    icon={LinkSquare02Icon}
                    strokeWidth={2}
                    className="size-4"
                  />
                </a>
              )}
            </div>
          )}
        </nav>
        {project.media.length > 0 && (
          <div className="mx-auto mt-6 max-w-4xl">
            <ProjectCarousel media={project.media} />
          </div>
        )}
      </div>

      <Card className="mx-auto mt-8 max-w-5xl py-0 sm:mt-10">
        <CardContent className="px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
          <ArticleContent content={ProjectContent} />
        </CardContent>
      </Card>
    </div>
  )
}

export default ProjectPage
