import { useEffect, useRef, useState } from 'react'
import type { BentoItem } from '@/components/gallery/bento-gallery-grid'

function useStableCallback<T extends (...args: Array<any>) => void>(fn: T): T {
  const ref = useRef(fn)
  ref.current = fn
  return useRef(((...args: Parameters<T>) => ref.current(...args)) as T).current
}

export type UseGalleryWithLightboxOptions = {
  /**
   * When set (e.g. from URL search), opens the lightbox at the item with this id.
   */
  openItemId?: string | null
  /**
   * Called when the lightbox opens/closes or the current slide changes.
   * Use this to sync URL (e.g. set ?item=id when open, clear when closed).
   */
  onOpenItemIdChange?: (itemId: string | null) => void
  /**
   * Whether to restore scroll position after closing the lightbox. Default true.
   */
  restoreScrollOnClose?: boolean
}

export type UseGalleryWithLightboxReturn = {
  open: boolean
  index: number
  handleItemClick: (item: BentoItem, index: number) => void
  onOpenChange: (open: boolean) => void
  lightboxProps: {
    items: Array<BentoItem>
    open: boolean
    index: number
    onIndexChange: (index: number) => void
    onOpenChange: (open: boolean) => void
  }
}

export function useGalleryWithLightbox(
  items: Array<BentoItem>,
  options: UseGalleryWithLightboxOptions = {},
): UseGalleryWithLightboxReturn {
  const {
    openItemId,
    onOpenItemIdChange,
    restoreScrollOnClose = true,
  } = options

  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const scrollPositionRef = useRef(0)
  const onOpenItemIdChangeStable = useStableCallback(
    onOpenItemIdChange ?? (() => {}),
  )

  const handleItemClick = (item: BentoItem, nextIndex: number) => {
    if (restoreScrollOnClose) {
      scrollPositionRef.current = window.scrollY
    }
    setIndex(nextIndex)
    setOpen(true)
    onOpenItemIdChangeStable(item.id)
  }

  // Open lightbox when openItemId matches an item (e.g. from URL)
  useEffect(() => {
    if (openItemId == null || openItemId === '') return
    const foundIndex = items.findIndex((it) => it.id === openItemId)
    if (foundIndex === -1) return
    if (restoreScrollOnClose) {
      scrollPositionRef.current = window.scrollY
    }
    setIndex(foundIndex)
    setOpen(true)
  }, [items, openItemId, restoreScrollOnClose])

  // Keep openItemId in sync when user navigates inside lightbox
  useEffect(() => {
    if (!open || !items.length) return
    const item = items[index]
    if (item.id === openItemId) return
    onOpenItemIdChangeStable(item.id)
  }, [index, open, items, onOpenItemIdChangeStable, openItemId])

  const onOpenChange = (nextOpen: boolean) => {
    if (!nextOpen && restoreScrollOnClose) {
      scrollPositionRef.current = window.scrollY
    }
    setOpen(nextOpen)
    if (!nextOpen) {
      onOpenItemIdChangeStable(null)
    }
  }

  // Restore scroll position after lightbox closes
  useEffect(() => {
    if (typeof window === 'undefined' || !restoreScrollOnClose) return
    if (open) return

    const targetScroll = scrollPositionRef.current
    let restoreAttempts = 0
    const maxAttempts = 20

    const restoreScroll = () => {
      const currentScroll = window.scrollY
      if (
        Math.abs(currentScroll - targetScroll) > 1 &&
        restoreAttempts < maxAttempts
      ) {
        window.scrollTo(0, targetScroll)
        restoreAttempts++
        requestAnimationFrame(restoreScroll)
      }
    }

    requestAnimationFrame(restoreScroll)

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
  }, [open, restoreScrollOnClose])

  return {
    open,
    index,
    handleItemClick,
    onOpenChange,
    lightboxProps: {
      items,
      open,
      index,
      onIndexChange: setIndex,
      onOpenChange,
    },
  }
}
