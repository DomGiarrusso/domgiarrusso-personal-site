import type { BentoItem } from '@/components/gallery/bento-gallery-grid'
import type { UseGalleryWithLightboxOptions } from '@/components/gallery/use-gallery-with-lightbox'
import { BentoGalleryGrid } from '@/components/gallery/bento-gallery-grid'
import { GalleryLightbox } from '@/components/gallery/gallery-lightbox'
import { useGalleryWithLightbox } from '@/components/gallery/use-gallery-with-lightbox'
import { cn } from '@/lib/utils'

export type BentoGalleryWithLightboxProps = UseGalleryWithLightboxOptions & {
  items: Array<BentoItem>
  /** Optional class for the grid wrapper */
  className?: string
  /** Optional class passed to BentoGalleryGrid */
  gridClassName?: string
}

/**
 * Reusable bento grid + lightbox. Pass items and optionally wire URL sync
 * via openItemId + onOpenItemIdChange (e.g. from TanStack Router search params).
 */
export function BentoGalleryWithLightbox({
  items,
  openItemId,
  onOpenItemIdChange,
  restoreScrollOnClose,
  className,
  gridClassName,
}: BentoGalleryWithLightboxProps) {
  const { handleItemClick, onOpenChange, lightboxProps } =
    useGalleryWithLightbox(items, {
      openItemId,
      onOpenItemIdChange,
      restoreScrollOnClose,
    })

  return (
    <div className={cn('space-y-6', className)}>
      <BentoGalleryGrid
        items={items}
        onItemClick={handleItemClick}
        className={gridClassName}
      />
      <GalleryLightbox
        items={lightboxProps.items}
        open={lightboxProps.open}
        index={lightboxProps.index}
        onIndexChange={lightboxProps.onIndexChange}
        onOpenChange={onOpenChange}
      />
    </div>
  )
}
