import type { Video } from './types'

const videos: Array<Video> = [
  {
    id: '1',
    title: 'Test Video 1',
    description: 'Test of the Description',
    videoUrl: '/test',
    thumbnailUrl:
      'https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg',
    duration: '2:00',
    sortOrder: 1,
  },
  {
    id: '2',
    title: 'Test 2',
    description: 'Test 2 this is very cool',
    videoUrl: '/test',
    thumbnailUrl:
      'https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg',
    duration: '2:00',
    sortOrder: 2,
  },
]

export function getVideos(): Array<Video> {
  return [...videos].sort((first, second) => first.sortOrder - second.sortOrder)
}

export function getVideoPreviews(limit = 2): Array<Video> {
  return getVideos().slice(0, limit)
}
