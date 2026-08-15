import remoteProjectTestContent from '../../content/projects/remote-project-test.md?raw'
import superTestContent from '../../content/projects/super-test.md?raw'
import testContentTwoContent from '../../content/projects/test-content-2.md?raw'
import type { Project, ProjectSummary } from './types'

const projectThumbnailUrl =
  'https://wallpapermural.com/cdn/shop/files/KanagawaPano_Artwork_533x.png?v=1750700592'

const projects: Array<Project> = [
  {
    id: '1',
    title: 'Remote Project Test',
    slug: 'test-demo',
    blurb: 'Short text',
    thumbnailUrl: projectThumbnailUrl,
    content: remoteProjectTestContent,
    techStack: ['react', 'node'],
    sortOrder: 1,
  },
  {
    id: '2',
    title: 'Super Test',
    slug: 'super-test',
    blurb: 'Super amazing project text',
    thumbnailUrl: projectThumbnailUrl,
    content: superTestContent,
    techStack: ['react', 'tailwind', 'dotnet'],
    repositoryUrl: 'https://github.com/rsclarke/rehype-shiki',
    sortOrder: 2,
  },
  {
    id: '3',
    title: 'Test Content 2',
    slug: 'test-2',
    blurb: 'short text blurb',
    thumbnailUrl: projectThumbnailUrl,
    content: testContentTwoContent,
    techStack: [],
    repositoryUrl: 'https://github.com/rsclarke/rehype-shiki',
    externalUrl: 'https://google.com',
    sortOrder: 3,
  },
]

export function getProjectSummaries(): Array<ProjectSummary> {
  return [...projects]
    .sort((first, second) => first.sortOrder - second.sortOrder)
    .map(({ id, title, slug, blurb, thumbnailUrl }) => ({
      id,
      title,
      slug,
      blurb,
      thumbnailUrl,
    }))
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
