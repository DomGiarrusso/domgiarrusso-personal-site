import type { GalleryImage, GalleryPage } from './types'

const galleryImages: Array<GalleryImage> = [
  {
    id: '1',
    page: 'art',
    title: 'Test Item',
    alt: 'Test alt',
    thumbnailUrl:
      'https://6kmjrjw570.ufs.sh/f/AtjECMYdGJy3FNOrNZBtnSRmu2qdv7IBxDTWlea0EpUz9Qr8',
    fullUrl:
      'https://6kmjrjw570.ufs.sh/f/AtjECMYdGJy3FNOrNZBtnSRmu2qdv7IBxDTWlea0EpUz9Qr8',
    variant: 'wide',
    sortOrder: 1,
  },
  {
    id: '2',
    page: 'art',
    title: 'Test Item 2',
    alt: 'Test 2',
    thumbnailUrl:
      'https://6kmjrjw570.ufs.sh/f/AtjECMYdGJy3FNOrNZBtnSRmu2qdv7IBxDTWlea0EpUz9Qr8',
    fullUrl:
      'https://6kmjrjw570.ufs.sh/f/AtjECMYdGJy3FNOrNZBtnSRmu2qdv7IBxDTWlea0EpUz9Qr8',
    variant: 'tall',
    sortOrder: 2,
  },
  {
    id: '3',
    page: 'photos',
    title: 'Test Item 3',
    alt: 'Test item 3',
    thumbnailUrl:
      'https://6kmjrjw570.ufs.sh/f/AtjECMYdGJy3FNOrNZBtnSRmu2qdv7IBxDTWlea0EpUz9Qr8',
    fullUrl:
      'https://6kmjrjw570.ufs.sh/f/AtjECMYdGJy3FNOrNZBtnSRmu2qdv7IBxDTWlea0EpUz9Qr8',
    variant: 'big',
    sortOrder: 3,
  },
  {
    id: '4',
    page: 'art',
    title: 'Testing',
    alt: 'Test alt',
    thumbnailUrl:
      'https://6kmjrjw570.ufs.sh/f/AtjECMYdGJy3FNOrNZBtnSRmu2qdv7IBxDTWlea0EpUz9Qr8',
    fullUrl:
      'https://6kmjrjw570.ufs.sh/f/AtjECMYdGJy3FNOrNZBtnSRmu2qdv7IBxDTWlea0EpUz9Qr8',
    variant: 'square',
    sortOrder: 4,
  },
]

export function getGalleryImages(page: GalleryPage): Array<GalleryImage> {
  return galleryImages
    .filter((image) => image.page === page)
    .sort((first, second) => first.sortOrder - second.sortOrder)
}

export function getGalleryPreviews(
  page: GalleryPage,
  limit = 3,
): Array<GalleryImage> {
  return getGalleryImages(page).slice(0, limit)
}
