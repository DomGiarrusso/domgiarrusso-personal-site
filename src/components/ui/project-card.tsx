import { Link } from '@tanstack/react-router'
import type { ProjectSummary } from '@/content/types'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type Props = ProjectSummary

export default function ProjectCard({
  title,
  thumbnailUrl,
  blurb,
  slug,
}: Props) {
  return (
    <Link
      to="/projects/$projectname"
      params={{ projectname: slug }}
      className="group block h-full"
    >
      <Card className="relative h-full gap-3 pt-4 transition-[color,background-color,border-color,box-shadow,scale] duration-300 ease-out group-hover:scale-[1.02] group-hover:border-primary-alt/60 group-hover:text-primary-alt-600 group-hover:ring-primary-alt/40 group-hover:shadow-[0_0_24px_color-mix(in_oklab,var(--primary-alt)_40%,transparent)] group-focus-visible:scale-[1.02] group-focus-visible:border-primary-alt/60 group-focus-visible:text-primary-alt-600 group-focus-visible:ring-primary-alt/40 group-focus-visible:shadow-[0_0_24px_color-mix(in_oklab,var(--primary-alt)_40%,transparent)] motion-reduce:transition-none">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_100%_120%_at_50%_-30%,var(--card)_0%,var(--card)_95%,var(--primary-alt)_140%)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
        />
        <CardHeader className="relative z-10 px-4">
          <AspectRatio
            ratio={16 / 9}
            className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10"
          >
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt={title + ' thumbnail'}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-muted" aria-hidden="true" />
            )}
          </AspectRatio>
        </CardHeader>
        <CardContent className="relative z-10">
          <CardTitle className="text-lg font-semibold text-balance">
            {title}
          </CardTitle>
          <CardDescription className="mt-2 text-sm sm:text-base">
            {blurb}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
