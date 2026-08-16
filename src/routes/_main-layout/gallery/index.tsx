import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getGalleryPreviews } from '@/content/gallery-images'
import { getVideoPreviews } from '@/content/videos'
import { cn } from '@/lib/utils'

export const Route = createFileRoute('/_main-layout/gallery/')({
  loader: () => ({
    artPreviews: getGalleryPreviews('art'),
    photoPreviews: getGalleryPreviews('photos'),
    videoPreviews: getVideoPreviews(),
  }),
  component: GalleryPage,
})

function GalleryPage() {
  const { artPreviews, photoPreviews, videoPreviews } = Route.useLoaderData()
  const artFeaturedImage = artPreviews.at(0)
  const photoFeaturedImage = photoPreviews.at(0)
  const videoFeaturedImage = videoPreviews.at(0)

  return (
    <div className="px-4 py-10 md:px-6 md:py-14">
      <section className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A brief showcase of the different gallery sections across the site.
            Explore art, photography, and video from one place.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <ShowcaseCard
            href="/gallery/art"
            eyebrow="Section"
            title="Art"
            description="Illustration, sketches, and experiments collected in a more visual gallery layout."
            imageSrc={artFeaturedImage?.thumbnailUrl}
            imageAlt={artFeaturedImage?.alt ?? 'Art preview'}
          />

          <ShowcaseCard
            href="/gallery/photos"
            eyebrow="Section"
            title="Photography"
            description="Frames, texture, and place presented in a gallery built for quick browsing and closer viewing."
            imageSrc={photoFeaturedImage?.thumbnailUrl}
            imageAlt={photoFeaturedImage?.alt ?? 'Photography preview'}
          />

          <ShowcaseCard
            href="/gallery/videos"
            eyebrow="Section"
            title="Videos"
            description="Motion work and edited pieces with direct links to watch each video in full."
            imageSrc={videoFeaturedImage?.thumbnailUrl}
            imageAlt={
              videoFeaturedImage
                ? `${videoFeaturedImage.title} thumbnail`
                : 'Video preview'
            }
            imageLabel={videoFeaturedImage?.duration ?? 'Video'}
          />
        </div>
      </section>
    </div>
  )
}

type ShowcaseCardProps = {
  href: string
  eyebrow: string
  title: string
  description: string
  imageSrc?: string | null
  imageAlt: string
  imageLabel?: string
}

function ShowcaseCard({
  href,
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  imageLabel,
}: ShowcaseCardProps) {
  return (
    <a href={href} className="group block h-full">
      <Card className="h-full gap-5 border-border/70 bg-card/80 pt-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <CardHeader className="space-y-3 px-4">
          <PreviewTile
            src={imageSrc}
            alt={imageAlt}
            className="aspect-[16/10]"
            label={imageLabel}
          />
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow}
          </div>
          <div className="space-y-2">
            <CardTitle className="text-xl leading-tight transition-colors group-hover:text-red-500">
              {title}
            </CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </div>
        </CardHeader>
        <CardContent className="mt-auto px-4">
          <p className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
            View page
          </p>
        </CardContent>
      </Card>
    </a>
  )
}

function PreviewTile({
  src,
  alt,
  className,
  label,
}: {
  src?: string | null
  alt: string
  className?: string
  label?: string
}) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl border border-border/70 bg-muted/50',
        className,
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div className="h-full w-full bg-muted" aria-hidden="true" />
      )}
      {label ? (
        <span className="absolute right-2 bottom-2 rounded bg-black/80 px-2 py-1 text-xs font-medium text-white">
          {label}
        </span>
      ) : null}
    </div>
  )
}
