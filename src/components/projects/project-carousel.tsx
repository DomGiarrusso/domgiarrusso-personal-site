import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useRef, useState } from 'react'
import type { ProjectMedia } from '@/content/types'
import type { CarouselApi } from '@/components/ui/carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { cn } from '@/lib/utils'

type Props = {
  media: Array<ProjectMedia>
}

export default function ProjectCarousel({ media }: Props) {
  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  )
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!api) return

    const updateCurrentSlide = () => setCurrentSlide(api.selectedScrollSnap())
    updateCurrentSlide()
    api.on('select', updateCurrentSlide)

    return () => {
      api.off('select', updateCurrentSlide)
    }
  }, [api])

  if (media.length === 0) return null

  const landscapeAspectRatios = media.flatMap((item) =>
    item.aspectRatio && item.aspectRatio >= 1 ? [item.aspectRatio] : [],
  )
  const frameAspectRatio =
    landscapeAspectRatios.length > 0
      ? Math.min(...landscapeAspectRatios)
      : 16 / 9

  const renderMedia = (item: ProjectMedia, index: number) => (
    <figure className="relative overflow-hidden rounded-xl">
      <AspectRatio
        className="overflow-hidden rounded-xl border border-border bg-muted shadow-sm ring-1 ring-foreground/10"
        ratio={frameAspectRatio}
      >
        <img
          src={item.src}
          alt={item.alt}
          className={cn(
            'size-full',
            item.fit === 'contain' ? 'object-contain' : 'object-cover',
          )}
          loading={index === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      </AspectRatio>
    </figure>
  )

  return (
    <>
      {media.length === 1 ? (
        renderMedia(media[0], 0)
      ) : (
        <Carousel
          opts={{ loop: true }}
          plugins={[autoplay.current]}
          setApi={setApi}
        >
          <CarouselContent>
            {media.map((item, index) => (
              <CarouselItem key={item.id} className="relative">
                {renderMedia(item, index)}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="left-2 rounded-md text-foreground shadow-md disabled:hidden sm:-left-12"
            size="icon-lg"
          />
          <CarouselNext
            className="right-2 rounded-md text-foreground shadow-md disabled:hidden sm:-right-12"
            size="icon-lg"
          />
          <div
            className="mt-4 flex items-center justify-center gap-2"
            role="group"
            aria-label="Choose project image"
          >
            {media.map((item, index) => (
              <button
                key={item.id}
                type="button"
                data-haptic="selection"
                onClick={() => api?.scrollTo(index)}
                className="size-2.5 rounded-full bg-muted-foreground/35 transition-colors hover:bg-muted-foreground aria-current:bg-primary-alt"
                aria-label={`Show image ${index + 1} of ${media.length}`}
                aria-current={currentSlide === index}
              />
            ))}
          </div>
        </Carousel>
      )}
    </>
  )
}
