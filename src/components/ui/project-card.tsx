import { AspectRatio } from "./aspect-ratio"
import type { ProjectsRow } from "@/types/database"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Props = Pick<ProjectsRow, 'title' | 'thumbnail_url' | 'blurb' | 'slug'>

export default function ProjectCard({ title, thumbnail_url, blurb, slug }: Props) {
    return (
        <a href={`/projects/${slug}`}>
            <Card className="hover:text-red-500 transition-all duration-300 min-w-sm h-full gap-3 pt-4">
                <CardHeader className="px-4">
                    <AspectRatio ratio={16/9}>
                        {thumbnail_url ? (
                            <img src={thumbnail_url} alt={title + " thumbnail"} className="w-full h-full ring-1 rounded-lg ring-foreground/10 object-cover" />
                        ) : (
                            <div className="w-full h-full rounded-lg ring-1 ring-foreground/10 bg-muted" aria-hidden="true" />
                        )}
                    </AspectRatio>
                </CardHeader>
                <CardContent className="">
                    <CardTitle className="text-lg font-semibold">{title}</CardTitle>
                    <CardDescription>{blurb}</CardDescription>
                </CardContent>
            </Card>

        </a>
    )
}
