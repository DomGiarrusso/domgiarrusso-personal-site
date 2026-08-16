import { createFileRoute } from '@tanstack/react-router'
import { BentoGalleryWithLightbox } from '@/components/gallery/BentoGalleryWithLightbox'
import { getGalleryImages } from '@/content/gallery-images'

type PhotosSearch = {
  item?: string
}

export const Route = createFileRoute('/_main-layout/gallery/photos')({
  validateSearch: (search: Record<string, unknown>): PhotosSearch => ({
    item: typeof search.item === 'string' ? search.item : undefined,
  }),
  loader: () => ({ photosImages: getGalleryImages('photos') }),
  component: RouteComponent,
})

function RouteComponent() {
  const { photosImages } = Route.useLoaderData()
  const search = Route.useSearch()
  const navigate = Route.useNavigate()

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="space-y-4 text-center ">
        <h1 className="text-4xl font-bold">Photography</h1>
        <p className="text-muted-foreground">
          A selection of work. Click any piece to view in the lightbox.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <BentoGalleryWithLightbox
          items={photosImages}
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
