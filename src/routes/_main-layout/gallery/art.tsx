import { createFileRoute } from '@tanstack/react-router'
import { BentoGalleryWithLightbox } from '@/components/gallery/bento-gallery-with-lightbox'
import { getArtImages } from '@/content/gallery-images'

type ArtSearch = {
  item?: string
}

export const Route = createFileRoute('/_main-layout/gallery/art')({
  validateSearch: (search: Record<string, unknown>): ArtSearch => ({
    item: typeof search.item === 'string' ? search.item : undefined,
  }),
  loader: () => ({ artImages: getArtImages() }),
  component: ArtPage,
})

function ArtPage() {
  const { artImages } = Route.useLoaderData()
  const search = Route.useSearch()
  const navigate = Route.useNavigate()

  return (
    <div className="container mx-auto space-y-8 px-4 py-12">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Art</h1>
        <p className="text-muted-foreground">
          A selection of work. Click any piece to view in the lightbox.
        </p>
      </div>

      <div className="mx-auto max-w-7xl">
        <BentoGalleryWithLightbox
          items={artImages}
          openItemId={search.item ?? undefined}
          onOpenItemIdChange={(id) =>
            void navigate({
              search: (prev) => ({ ...prev, item: id ?? undefined }),
              replace: true,
              resetScroll: false,
            })
          }
        />
      </div>
    </div>
  )
}
