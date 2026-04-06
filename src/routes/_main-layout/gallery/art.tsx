import { createFileRoute } from '@tanstack/react-router'
import { BentoGalleryWithLightbox } from '@/components/gallery/BentoGalleryWithLightbox'
import { supabase } from '@/lib/supabase'
import { imageRowToBentoItem } from '@/lib/utils'

type ArtSearch = {
  item?: string
}

export const Route = createFileRoute('/_main-layout/gallery/art')({
  validateSearch: (search: Record<string, unknown>): ArtSearch => ({
    item: typeof search.item === 'string' ? search.item : undefined,
  }),
  loader: async () => {
    const { data, error } = await supabase
      .from('images')
      .select('*')
      .eq('page', 'art')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching art images', error)
    }
    const artImages = (data ?? []).map(imageRowToBentoItem)
    return { artImages }
  },
  component: ArtPage,
})

export default function ArtPage() {
  const { artImages } = Route.useLoaderData()
  const search = Route.useSearch()
  const navigate = Route.useNavigate()

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="space-y-4 text-center ">
        <h1 className="text-4xl font-bold">Art</h1>
        <p className="text-muted-foreground">
          A selection of work. Click any piece to view in the lightbox.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
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
