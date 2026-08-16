import { AspectRatio } from './aspect-ratio'
import type { ProjectSummary } from '@/content/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type Props = Omit<ProjectSummary, 'id'>

export default function ProjectCard({
  title,
  thumbnailUrl,
  blurb,
  slug,
}: Props) {
  return (
    <a href={`/projects/${slug}`} className="block h-full">
      <Card className="h-full gap-3 pt-4 transition-all duration-300 hover:text-red-500">
        <CardHeader className="px-4">
          <AspectRatio ratio={16 / 9}>
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt={title + ' thumbnail'}
                className="h-full w-full rounded-lg object-cover ring-1 ring-foreground/10"
              />
            ) : (
              <div
                className="h-full w-full rounded-lg bg-muted ring-1 ring-foreground/10"
                aria-hidden="true"
              />
            )}
          </AspectRatio>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-lg font-semibold text-balance">
            {title}
          </CardTitle>
          <CardDescription className="mt-2 text-sm sm:text-base">
            {blurb}
          </CardDescription>
        </CardContent>
      </Card>
    </a>
  )
}
