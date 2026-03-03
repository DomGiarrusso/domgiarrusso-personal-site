import Lightbox, { type SlideImage } from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import { useEffect, useMemo } from 'react'

import type { BentoItem } from './BentoGalleryGrid'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Add01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Cancel01Icon,
  PauseIcon,
  PlayIcon,
  SearchAddIcon,
  SearchMinusIcon,
} from '@hugeicons/core-free-icons'

export type GalleryLightboxProps = {
  items: BentoItem[]
  open: boolean
  index: number
  onIndexChange: (nextIndex: number) => void
  onOpenChange: (open: boolean) => void
}

function getSlideSrc(item: BentoItem): string {
  return item.fullUrl?.trim() ? item.fullUrl : item.thumbUrl
}

function getCaption(item: BentoItem): string | undefined {
  const title = item.title?.trim()
  if (title) return title
  const alt = item.alt.trim()
  return alt ? alt : undefined
}

function prefetchImage(src: string) {
  const img = new Image()
  img.decoding = 'async'
  img.loading = 'eager'
  img.src = src
}

export function GalleryLightbox({
  items,
  open,
  index,
  onIndexChange,
  onOpenChange,
}: GalleryLightboxProps) {
  const slides = useMemo<SlideImage[]>(
    () =>
      items.map((item) => ({
        src: getSlideSrc(item),
        alt: item.alt,
        title: getCaption(item),
      })),
    [items],
  )

  useEffect(() => {
    if (!open) return
    if (items.length < 2) return
    if (index < 0 || index >= items.length) return

    const nextIndex = (index + 1) % items.length
    const prevIndex = (index - 1 + items.length) % items.length

    prefetchImage(getSlideSrc(items[nextIndex]))
    prefetchImage(getSlideSrc(items[prevIndex]))
  }, [open, index, items])

  const iconClassName = 'yarl__icon'

  return (
    <Lightbox
      open={open}
      close={() => onOpenChange(false)}
      index={index}
      slides={slides}
      plugins={[Captions, Slideshow, Thumbnails, Zoom]}
      carousel={{
        finite: false,
        preload: 2,
      }}
      counter={{
        container: {
          style: {
            top: 'unset',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
          },
        },
      }}
      slideshow={{ autoplay: false, delay: 3000 }}
      zoom={{
        maxZoomPixelRatio: 4,
        zoomInMultiplier: 2,
        doubleTapDelay: 300,
        doubleClickDelay: 300,
        doubleClickMaxStops: 2,
        keyboardMoveDistance: 50,
        wheelZoomDistanceFactor: 100,
        pinchZoomDistanceFactor: 100,
        pinchZoomV4: true,
        scrollToZoom: true,
      }}
      render={{
        iconClose: () => (
          <HugeiconsIcon
            icon={Cancel01Icon}
            className={iconClassName}
            strokeWidth={2}
          />
        ),
        iconPrev: () => (
          <HugeiconsIcon
            icon={ArrowLeft01Icon}
            className={iconClassName}
            strokeWidth={2}
          />
        ),
        iconNext: () => (
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            className={iconClassName}
            strokeWidth={2}
          />
        ),
        iconZoomIn: () => (
          <HugeiconsIcon
            icon={SearchAddIcon}
            className={iconClassName}
            strokeWidth={2}
          />
        ),
        iconZoomOut: () => (
          <HugeiconsIcon
            icon={SearchMinusIcon}
            className={iconClassName}
            strokeWidth={2}
          />
        ),
        iconSlideshowPlay: () => (
          <HugeiconsIcon
            icon={PlayIcon}
            className={iconClassName + ' fill-foreground'}
            strokeWidth={2}
          />
        ),
        iconSlideshowPause: () => (
          <HugeiconsIcon
            icon={PauseIcon}
            className={iconClassName + ' fill-foreground'}
            strokeWidth={2}
          />
        ),
        // optional: iconSlideshowPlay, iconSlideshowPause, iconThumbnailsVisible, etc.
      }}
      on={{
        view: ({ index: nextIndex }) => onIndexChange(nextIndex),
      }}
      styles={{
        container: {
          backgroundColor: 'transparent',
        },
      }}
    />
  )
}
