import { BentoGalleryGrid, type BentoItem } from '@/components/gallery/BentoGalleryGrid'
import { GalleryLightbox } from '@/components/gallery/GalleryLightbox'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo, useRef, useState } from 'react'

type BentoDemoSearch = {
  item?: string
}

export const Route = createFileRoute('/_main-layout/gallery/bento-demo')({
  validateSearch: (search: Record<string, unknown>): BentoDemoSearch => ({
    item: typeof search.item === 'string' ? search.item : undefined,
  }),
  component: BentoDemoPage,
})

function BentoDemoPage() {
  const search = Route.useSearch()
  const navigate = Route.useNavigate()
  const scrollPositionRef = useRef<number>(0)

  const sampleItems: BentoItem[] = useMemo(
    () => [
    {
      id: "1",
      title: "Mountain Landscape",
      alt: "Mountain landscape with snow",
      thumbUrl: "https://picsum.photos/id/1011/400/400",
      fullUrl: "https://picsum.photos/id/1011/1600/900",
      variant: "square",
    },
    {
      id: "2",
      title: "Forest Path",
      alt: "Forest path through trees",
      thumbUrl: "https://picsum.photos/id/1015/400/400",
      fullUrl: "https://picsum.photos/id/1015/1600/900",
      variant: "wide",
    },
    {
      id: "3",
      title: "Ocean Waves",
      alt: "Ocean waves crashing",
      thumbUrl: "https://picsum.photos/id/1018/400/400",
      fullUrl: "https://picsum.photos/id/1018/1600/900",
      variant: "square",
    },
    {
      id: "4",
      title: "City Skyline",
      alt: "City skyline at night",
      thumbUrl: "https://picsum.photos/id/1019/400/400",
      fullUrl: "https://picsum.photos/id/1019/1600/900",
      variant: "tall",
    },
    {
      id: "5",
      title: "Desert Dunes",
      alt: "Desert sand dunes",
      thumbUrl: "https://picsum.photos/id/1020/400/400",
      fullUrl: "https://picsum.photos/id/1020/1600/900",
      variant: "square",
    },
    {
      id: "6",
      title: "Mountain Peak",
      alt: "Snow-capped mountain peak",
      thumbUrl: "https://picsum.photos/id/1021/400/400",
      fullUrl: "https://picsum.photos/id/1021/1600/900",
      variant: "big",
    },
    {
      id: "7",
      title: "Sunset Beach",
      alt: "Beach at sunset",
      thumbUrl: "https://picsum.photos/id/1022/400/400",
      fullUrl: "https://picsum.photos/id/1022/1600/900",
      variant: "square",
    },
    {
      id: "8",
      title: "Autumn Leaves",
      alt: "Colorful autumn leaves",
      thumbUrl: "https://picsum.photos/id/1023/400/400",
      fullUrl: "https://picsum.photos/id/1023/1600/900",
      variant: "wide",
    },
    {
      id: "9",
      title: "Waterfall",
      alt: "Waterfall in forest",
      thumbUrl: "https://picsum.photos/id/1024/400/400",
      fullUrl: "https://picsum.photos/id/1024/1600/900",
      variant: "square",
    },
    {
      id: "10",
      title: "Lighthouse",
      alt: "Lighthouse on coast",
      thumbUrl: "https://picsum.photos/id/1025/400/400",
      fullUrl: "https://picsum.photos/id/1025/1600/900",
      variant: "square",
    },
    {
      id: "11",
      title: "Meadow Flowers",
      alt: "Wildflowers in meadow",
      thumbUrl: "https://picsum.photos/id/1026/400/400",
      fullUrl: "https://picsum.photos/id/1026/1600/900",
      variant: "tall",
    },
    {
      id: "12",
      title: "Canyon View",
      alt: "Grand canyon view",
      thumbUrl: "https://picsum.photos/id/1027/400/400",
      fullUrl: "https://picsum.photos/id/1027/1600/900",
      variant: "square",
    },
    {
      id: "13",
      title: "Lake Reflection",
      alt: "Mountain reflection in lake",
      thumbUrl: "https://picsum.photos/id/1028/400/400",
      fullUrl: "https://picsum.photos/id/1028/1600/900",
      variant: "wide",
    },
    {
      id: "14",
      title: "Starry Night",
      alt: "Starry night sky",
      thumbUrl: "https://picsum.photos/id/1029/400/400",
      fullUrl: "https://picsum.photos/id/1029/1600/900",
      variant: "square",
    },
    {
      id: "15",
      title: "Tropical Paradise",
      alt: "Tropical beach paradise",
      thumbUrl: "https://picsum.photos/id/1030/400/400",
      fullUrl: "https://picsum.photos/id/1030/1600/900",
      variant: "big",
    },
    {
      id: "16",
      title: "Mountain Range",
      alt: "Distant mountain range",
      thumbUrl: "https://picsum.photos/id/1031/400/400",
      fullUrl: "https://picsum.photos/id/1031/1600/900",
      variant: "square",
    },
    {
      id: "17",
      title: "River Valley",
      alt: "River flowing through valley",
      thumbUrl: "https://picsum.photos/id/1032/400/400",
      fullUrl: "https://picsum.photos/id/1032/1600/900",
      variant: "wide",
    },
    {
      id: "18",
      title: "Aurora Borealis",
      alt: "Northern lights in sky",
      thumbUrl: "https://picsum.photos/id/1033/400/400",
      fullUrl: "https://picsum.photos/id/1033/1600/900",
      variant: "square",
    },
  ],
    [],
  )

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const handleItemClick = (item: BentoItem, nextIndex: number) => {
    // Save scroll position before opening
    scrollPositionRef.current = window.scrollY

    setIndex(nextIndex)
    setOpen(true)

    void navigate({
      search: (prev) => ({ ...prev, item: item.id }),
      replace: true,
    })
  }

  // On initial load (and when URL changes), if ?item=<id> matches, open there.
  useEffect(() => {
    if (!search.item) return
    const foundIndex = sampleItems.findIndex((it) => it.id === search.item)
    if (foundIndex === -1) return

    // Save scroll position before opening
    scrollPositionRef.current = window.scrollY

    setIndex(foundIndex)
    setOpen(true)
  }, [sampleItems, search.item])

  // Keep ?item=<id> synced while open (including swipes/keyboard nav).
  useEffect(() => {
    if (!open) return
    const item = sampleItems[index]
    if (!item) return

    if (search.item === item.id) return

    void navigate({
      search: (prev) => ({ ...prev, item: item.id }),
      replace: true,
    })
  }, [index, navigate, open, sampleItems, search.item])

  const onOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      // Save scroll position before closing (while lightbox is still open)
      scrollPositionRef.current = window.scrollY
    }

    setOpen(nextOpen)

    if (!nextOpen) {
      void navigate({
        search: (prev) => {
          const { item: _item, ...rest } = prev
          return rest
        },
        replace: true,
      })
    }
  }

  // Restore scroll position after navigation completes
  // Use a scroll listener to continuously restore until position is stable
  useEffect(() => {
    if (typeof window === 'undefined') return

    const targetScroll = scrollPositionRef.current
    let restoreAttempts = 0
    const maxAttempts = 20 // Stop after 20 attempts (2 seconds)

    const restoreScroll = () => {
      const currentScroll = window.scrollY
      if (Math.abs(currentScroll - targetScroll) > 1 && restoreAttempts < maxAttempts) {
        window.scrollTo(0, targetScroll)
        restoreAttempts++
        requestAnimationFrame(restoreScroll)
      }
    }

    // Start restoration immediately
    requestAnimationFrame(restoreScroll)

    // Also use delayed attempts as backup
    const timeout1 = setTimeout(() => {
      if (Math.abs(window.scrollY - targetScroll) > 1) {
        window.scrollTo(0, targetScroll)
      }
    }, 50)

    const timeout2 = setTimeout(() => {
      if (Math.abs(window.scrollY - targetScroll) > 1) {
        window.scrollTo(0, targetScroll)
      }
    }, 150)

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }
  }, [search.item, open])

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Bento Gallery Grid Demo</h1>
        <p className="text-muted-foreground">
          Responsive bento grid with automatic packing heuristic. Resize your
          browser to see the responsive behavior.
        </p>
      </div>

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Default Layout (1/2/3 columns)</h2>
          <div className="max-w-7xl mx-auto">
            <BentoGalleryGrid
              items={sampleItems}
              onItemClick={handleItemClick}

            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            4 Columns on XL (1/2/3/4 columns)
          </h2>
          <div className="max-w-7xl mx-auto">
            <BentoGalleryGrid
              items={sampleItems}
              onItemClick={handleItemClick}
            />
          </div>
        </section>
      </div>

      <GalleryLightbox
        items={sampleItems}
        open={open}
        index={index}
        onIndexChange={setIndex}
        onOpenChange={onOpenChange}
      />
    </div>
  )
}

export default BentoDemoPage