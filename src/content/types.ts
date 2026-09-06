export type Project = {
  title: string
  slug: string
  blurb: string
  thumbnailUrl?: string
  techStack: Array<string>
  media: Array<ProjectMedia>
  repositoryUrl?: string
  externalUrl?: string
  sortOrder: number
}

export type ProjectMedia = {
  id: string
  src: string
  alt: string
  caption?: string
  aspectRatio?: number
  fit?: 'contain' | 'cover'
}

export type ProjectSummary = Pick<
  Project,
  'title' | 'slug' | 'blurb' | 'thumbnailUrl'
>

export type GalleryImageVariant = 'square' | 'wide' | 'tall' | 'big'

export type GalleryImage = {
  id: string
  title: string
  alt: string
  thumbnailUrl: string
  fullUrl?: string
  variant?: GalleryImageVariant
  width?: number
  height?: number
}

export type Video = {
  id: string
  title: string
  description?: string
  videoUrl: string
  thumbnailUrl?: string
  duration?: string
  sortOrder: number
}
