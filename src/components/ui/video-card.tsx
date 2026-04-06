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
      <Card className="h-full gap-3 pt-4 transition-all duration-300 group-hover:text-red-500">
        <CardHeader className="px-4">
          <AspectRatio ratio={16 / 9}>
            {thumbnailUrl ? (
              <>
                <img
                  src={thumbnailUrl}
                  alt={`${title} thumbnail`}
                  className="h-full w-full rounded-lg ring-1 ring-foreground/10 object-cover"
                />
                {duration ? (
                  <span className="absolute right-3 bottom-3 rounded bg-black/85 px-2 py-1 text-xs font-medium text-white">
                    {duration}
                  </span>
                ) : null}
              </>
            ) : (
              <div
                className="h-full w-full rounded-lg ring-1 ring-foreground/10 bg-muted"
                aria-hidden="true"
              />
            )}
          </AspectRatio>
        </CardHeader>
        <CardContent className="space-y-2">
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
