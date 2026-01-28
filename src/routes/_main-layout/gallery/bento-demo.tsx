import { createFileRoute } from "@tanstack/react-router";
import { BentoGalleryGrid, type BentoItem } from "@/components/gallery/BentoGalleryGrid";
import { useState } from "react";

export const Route = createFileRoute("/_main-layout/gallery/bento-demo")({
  component: BentoDemoPage,
});

function BentoDemoPage() {
  const [clickedItem, setClickedItem] = useState<BentoItem | null>(null);

  const sampleItems: BentoItem[] = [
    {
      id: "1",
      title: "Mountain Landscape",
      alt: "Mountain landscape with snow",
      thumbUrl: "https://picsum.photos/id/1011/400/400",
      fullUrl: "https://picsum.photos/id/1011/1600/900",
      variant: "square",
    },
    {
      id: "2",
      title: "Forest Path",
      alt: "Forest path through trees",
      thumbUrl: "https://picsum.photos/id/1015/400/400",
      fullUrl: "https://picsum.photos/id/1015/1600/900",
      variant: "wide",
    },
    {
      id: "3",
      title: "Ocean Waves",
      alt: "Ocean waves crashing",
      thumbUrl: "https://picsum.photos/id/1018/400/400",
      fullUrl: "https://picsum.photos/id/1018/1600/900",
      variant: "square",
    },
    {
      id: "4",
      title: "City Skyline",
      alt: "City skyline at night",
      thumbUrl: "https://picsum.photos/id/1019/400/400",
      fullUrl: "https://picsum.photos/id/1019/1600/900",
      variant: "tall",
    },
    {
      id: "5",
      title: "Desert Dunes",
      alt: "Desert sand dunes",
      thumbUrl: "https://picsum.photos/id/1020/400/400",
      fullUrl: "https://picsum.photos/id/1020/1600/900",
      variant: "square",
    },
    {
      id: "6",
      title: "Mountain Peak",
      alt: "Snow-capped mountain peak",
      thumbUrl: "https://picsum.photos/id/1021/400/400",
      fullUrl: "https://picsum.photos/id/1021/1600/900",
      variant: "big",
    },
    {
      id: "7",
      title: "Sunset Beach",
      alt: "Beach at sunset",
      thumbUrl: "https://picsum.photos/id/1022/400/400",
      fullUrl: "https://picsum.photos/id/1022/1600/900",
      variant: "square",
    },
    {
      id: "8",
      title: "Autumn Leaves",
      alt: "Colorful autumn leaves",
      thumbUrl: "https://picsum.photos/id/1023/400/400",
      fullUrl: "https://picsum.photos/id/1023/1600/900",
      variant: "wide",
    },
    {
      id: "9",
      title: "Waterfall",
      alt: "Waterfall in forest",
      thumbUrl: "https://picsum.photos/id/1024/400/400",
      fullUrl: "https://picsum.photos/id/1024/1600/900",
      variant: "square",
    },
    {
      id: "10",
      title: "Lighthouse",
      alt: "Lighthouse on coast",
      thumbUrl: "https://picsum.photos/id/1025/400/400",
      fullUrl: "https://picsum.photos/id/1025/1600/900",
      variant: "square",
    },
    {
      id: "11",
      title: "Meadow Flowers",
      alt: "Wildflowers in meadow",
      thumbUrl: "https://picsum.photos/id/1026/400/400",
      fullUrl: "https://picsum.photos/id/1026/1600/900",
      variant: "tall",
    },
    {
      id: "12",
      title: "Canyon View",
      alt: "Grand canyon view",
      thumbUrl: "https://picsum.photos/id/1027/400/400",
      fullUrl: "https://picsum.photos/id/1027/1600/900",
      variant: "square",
    },
    {
      id: "13",
      title: "Lake Reflection",
      alt: "Mountain reflection in lake",
      thumbUrl: "https://picsum.photos/id/1028/400/400",
      fullUrl: "https://picsum.photos/id/1028/1600/900",
      variant: "wide",
    },
    {
      id: "14",
      title: "Starry Night",
      alt: "Starry night sky",
      thumbUrl: "https://picsum.photos/id/1029/400/400",
      fullUrl: "https://picsum.photos/id/1029/1600/900",
      variant: "square",
    },
    {
      id: "15",
      title: "Tropical Paradise",
      alt: "Tropical beach paradise",
      thumbUrl: "https://picsum.photos/id/1030/400/400",
      fullUrl: "https://picsum.photos/id/1030/1600/900",
      variant: "big",
    },
    {
      id: "16",
      title: "Mountain Range",
      alt: "Distant mountain range",
      thumbUrl: "https://picsum.photos/id/1031/400/400",
      fullUrl: "https://picsum.photos/id/1031/1600/900",
      variant: "square",
    },
    {
      id: "17",
      title: "River Valley",
      alt: "River flowing through valley",
      thumbUrl: "https://picsum.photos/id/1032/400/400",
      fullUrl: "https://picsum.photos/id/1032/1600/900",
      variant: "wide",
    },
    {
      id: "18",
      title: "Aurora Borealis",
      alt: "Northern lights in sky",
      thumbUrl: "https://picsum.photos/id/1033/400/400",
      fullUrl: "https://picsum.photos/id/1033/1600/900",
      variant: "square",
    },
  ];

  const handleItemClick = (item: BentoItem, index: number) => {
    console.log("Clicked item:", item.id, "at index:", index);
    setClickedItem(item);
    // Clear after 3 seconds
    setTimeout(() => setClickedItem(null), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Bento Gallery Grid Demo</h1>
        <p className="text-muted-foreground">
          Responsive bento grid with automatic packing heuristic. Resize your
          browser to see the responsive behavior.
        </p>
      </div>

      {clickedItem && (
        <div className="rounded-lg border border-border bg-card p-4 ring-1 ring-border">
          <p className="text-sm font-medium">
            Clicked: {clickedItem.title || clickedItem.alt} (ID: {clickedItem.id})
          </p>
        </div>
      )}

      <div className="space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Default Layout (1/2/3 columns)</h2>
          <div className="max-w-7xl mx-auto">
            <BentoGalleryGrid
              items={sampleItems}
              onItemClick={handleItemClick}
              
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            4 Columns on XL (1/2/3/4 columns)
          </h2>
          <div className="max-w-7xl mx-auto">
            <BentoGalleryGrid
              items={sampleItems}
              onItemClick={handleItemClick}
              columns={{
                base: 1,
                md: 2,
                lg: 3,
                xl: 5,
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default BentoDemoPage;