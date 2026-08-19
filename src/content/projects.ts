import RemoteProjectTestContent from '../../content/projects/remote-project-test.mdx'
import SuperTestContent from '../../content/projects/super-test.mdx'
import TestContentTwoContent from '../../content/projects/test-content-2.mdx'
import type { MDXContent } from 'mdx/types'
import type { Project, ProjectSummary } from './types'

const projectThumbnailUrl =
  'https://wallpapermural.com/cdn/shop/files/KanagawaPano_Artwork_533x.png?v=1750700592'

const sampleProjectMedia = [
  {
    id: 'kanagawa-wave',
    src: projectThumbnailUrl,
    alt: 'Stylized illustration of the Great Wave off Kanagawa',
    caption: 'Primary project preview',
  },
  {
    id: 'mountain-landscape',
    src: 'https://images.unsplash.com/photo-1768185595109-18aded979f9d?q=80&w=1600&auto=format&fit=crop',
    alt: 'Mountain landscape beneath a cloudy sky',
    caption: 'Secondary project preview',
  },
  {
    id: 'coastal-landscape',
    src: 'https://images.unsplash.com/photo-1768879051946-4984246ed043?q=80&w=1600&auto=format&fit=crop',
    alt: 'Coastal landscape viewed from above',
    caption: 'Additional project preview',
  },
]

const projects: Array<Project> = [
  {
    id: '1',
    title: 'Remote Project Test',
    slug: 'test-demo',
    blurb: 'Short text',
    thumbnailUrl: projectThumbnailUrl,
    techStack: ['react', 'node'],
    media: sampleProjectMedia.slice(0, 1),
    sortOrder: 1,
  },
  {
    id: '2',
    title: 'Super Test',
    slug: 'super-test',
    blurb: 'Super amazing project text',
    thumbnailUrl: projectThumbnailUrl,
    techStack: ['react', 'tailwind', 'dotnet'],
    media: sampleProjectMedia,
    repositoryUrl: 'https://github.com/rsclarke/rehype-shiki',
    sortOrder: 2,
  },
  {
    id: '3',
    title: 'Test Content 2',
    slug: 'test-2',
    blurb: 'short text blurb',
    thumbnailUrl: projectThumbnailUrl,
    techStack: [],
    media: [],
    repositoryUrl: 'https://github.com/rsclarke/rehype-shiki',
    externalUrl: 'https://google.com',
    sortOrder: 3,
  },
]

const projectContentBySlug: Record<string, MDXContent> = {
  'test-demo': RemoteProjectTestContent,
  'super-test': SuperTestContent,
  'test-2': TestContentTwoContent,
}

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

export function getProjectContentBySlug(slug: string): MDXContent | undefined {
  return projectContentBySlug[slug]
}
