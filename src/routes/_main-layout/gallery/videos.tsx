import { createFileRoute } from '@tanstack/react-router'
import type { Video } from '@/content/types'
import VideoCard from '@/components/ui/video-card'
import { getVideos } from '@/content/videos'

export const Route = createFileRoute('/_main-layout/gallery/videos')({
  loader: () => ({ videos: getVideos() }),
  component: VideosPage,
})

function videoToCardProps(video: Video) {
  return {
    title: video.title,
    duration: video.duration ?? undefined,
    thumbnailUrl: video.thumbnailUrl,
    href: video.videoUrl,
    description: video.description,
  }
}

function VideosPage() {
  const { videos } = Route.useLoaderData()

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Videos</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          A selection of my video work. Click any piece to view on YouTube.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {videos.map((video) => (
          <VideoCard key={video.id} {...videoToCardProps(video)} />
        ))}
      </div>
    </div>
  )
}
