import type { Video } from '@/content/types'

const videos: Array<Video> = [
  {
    id: 'dev-log',
    title: 'dev.log',
    description:
      'A video series following the development of Everway, including project updates, lessons learned, and a look at how the web app works as it is built.',
    videoUrl:
      'https://youtube.com/playlist?list=PLdx_J9qjRIvKIiql8857ey-O78--PEoRF&si=i2Jimc4VjH5qe6qo',
    thumbnailUrl: '/images/videos/dev-log.webp',
    sortOrder: 1,
  },
  {
    id: 'aesthetics-of-bethesda-games',
    title: 'The Aesthetics of Bethesda Games',
    description:
      'A video essay about the aesthetic differences between Fallout 4 and Skyrim, and how games from the same studio can use distinct visual styles.',
    videoUrl: 'https://youtu.be/3M1o4FtXgBM',
    thumbnailUrl: '/images/videos/aesthetics-of-bethesda-games.jpg',
    sortOrder: 2,
  },
  {
    id: 'basics-to-unity-lighting',
    title: 'The Basics to Unity Lighting',
    description:
      'An introduction to Unity lighting with a focus on the URP and HDRP render pipelines, when to use them, and how to add them to existing projects.',
    videoUrl: 'https://youtu.be/u_LjxJeXujo',
    thumbnailUrl: '/images/videos/basics-to-unity-lighting.jpg',
    sortOrder: 3,
  },
  {
    id: 'road-to-redemption',
    title: 'The Road to Redemption',
    description:
      'An action short film centered on a western car chase, made with Red Dead Redemption 2 and Forza Horizon 5 for a university class.',
    videoUrl: 'https://youtu.be/JM-npSvuMD4',
    thumbnailUrl: '/images/videos/road-to-redemption.jpg',
    sortOrder: 4,
  },
  {
    id: 'pandemic-and-mental-health',
    title: 'The Pandemic and Mental Health',
    description:
      "A video about the pandemic's effects on mental health and the issues people faced during that period.",
    videoUrl: 'https://youtu.be/ecP9xC8XACw',
    thumbnailUrl: '/images/videos/pandemic-and-mental-health.jpg',
    sortOrder: 5,
  },
]

export function getVideos(): Array<Video> {
  return [...videos].sort((first, second) => first.sortOrder - second.sortOrder)
}

export function getVideoPreviews(limit = 2): Array<Video> {
  return getVideos().slice(0, limit)
}
