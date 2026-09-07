import { AspectRatio } from './aspect-ratio'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export type VideoCardProps = {
  title: string
  duration?: string
  thumbnailUrl?: string
  href: string
  description?: string
}

export default function VideoCard({
  title,
  duration,
  thumbnailUrl,
  href,
  description,
}: VideoCardProps) {
  return (
    <a href={href} className="group block h-full">
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
                alt={`${title} thumbnail`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-muted" aria-hidden="true" />
            )}
            {thumbnailUrl && duration ? (
              <span className="absolute right-3 bottom-3 z-10 rounded bg-black/85 px-2 py-1 text-xs font-medium text-white">
                {duration}
              </span>
            ) : null}
          </AspectRatio>
        </CardHeader>
        <CardContent className="relative z-10 space-y-2">
          <CardTitle className="line-clamp-2 text-lg font-semibold leading-snug">
            {title}
          </CardTitle>
          {description ? (
            <CardDescription className="line-clamp-2 leading-6">
              {description}
            </CardDescription>
          ) : null}
        </CardContent>
      </Card>
    </a>
  )
}
