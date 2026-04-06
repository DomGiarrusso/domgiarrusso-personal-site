import { createFileRoute } from '@tanstack/react-router'
import type { VideosRow } from '@/types/database'
import VideoCard from '@/components/ui/video-card'
import { supabase } from '@/lib/supabase'

export const Route = createFileRoute('/_main-layout/gallery/videos')({
  loader: async () => {
    const { data, error } = await supabase
      .from('videos')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching videos', error)
    }

    return { videos: data ?? [] }
  },
  component: VideosPage,
})

function videoRowToCardProps(video: VideosRow) {
  return {
    title: video.title,
    duration: video.duration ?? undefined,
    thumbnailUrl: video.thumbnail_url ?? undefined,
    href: video.video_url,
    description: video.description ?? undefined,
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
          <VideoCard key={video.id} {...videoRowToCardProps(video)} />
        ))}
      </div>
    </div>
  )
}
