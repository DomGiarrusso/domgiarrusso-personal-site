import { BentoItem, type BentoVariant } from '@/components/gallery/BentoGalleryGrid'
import { ImagesRow } from '@/types/database'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function imageRowToBentoItem(row: ImagesRow): BentoItem {
  return {
    id: row.id,
    title: row.title ?? undefined,
    alt: row.alt,
    thumbUrl: row.thumb_url,
    fullUrl: row.full_url ?? undefined,
    width: row.width ?? undefined,
    height: row.height ?? undefined,
    variant: (row.variant as BentoVariant | null) ?? undefined,
  }
}
