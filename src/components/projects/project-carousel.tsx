import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
type Props = {
}

export default function ProjectCarousel({ }: Props) {

    const images: string[] = [
        "https://wallpapermural.com/cdn/shop/files/KanagawaPano_Artwork_533x.png?v=1750700592",
        "https://images.unsplash.com/photo-1768185595109-18aded979f9d?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1768879051946-4984246ed043?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
    return (
        <Carousel opts={{ loop: true }}>
            <CarouselContent>
                {images.map((image) => (
                    <CarouselItem  key={image}>
                        <AspectRatio className="rounded-xl border-2 border-foreground/10" ratio={16/9}>
                            <img src={image} alt="Project Image" className="w-full h-full object-cover rounded-xl" />
                        </AspectRatio>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="flex justify-center gap-2">
                <CarouselPrevious variant="ghost" size="icon-lg" />
                <CarouselNext variant="ghost" size="icon-lg" />
            </div>
        </Carousel>
    )
}