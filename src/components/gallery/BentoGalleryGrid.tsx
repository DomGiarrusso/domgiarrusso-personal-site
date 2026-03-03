import { cn } from "@/lib/utils";
import { useMemo } from "react";

export type BentoVariant = "square" | "wide" | "tall" | "big";

export type BentoItem = {
  id: string;
  title?: string | null;
  alt: string;
  thumbUrl: string;
  fullUrl?: string;
  width?: number | null;
  height?: number | null;
  variant?: BentoVariant;
};

export type BentoGalleryGridProps = {
  items: BentoItem[];
  onItemClick?: (item: BentoItem, index: number) => void;
  className?: string;
};

type LayoutItem = BentoItem & {
  effectiveVariant: BentoVariant;
  colSpan: number;
  rowSpan: number;
};

type OccupancyGrid = boolean[][];

/**
 * Gets the footprint of a variant (colSpan, rowSpan)
 */
function getVariantFootprint(
  variant: BentoVariant,
): { colSpan: number; rowSpan: number } {
  switch (variant) {
    case "square":
      return { colSpan: 1, rowSpan: 1 };
    case "wide":
      return { colSpan: 2, rowSpan: 1 };
    case "tall":
      return { colSpan: 1, rowSpan: 2 };
    case "big":
      return { colSpan: 2, rowSpan: 2 };
    default:
      return { colSpan: 1, rowSpan: 1 };
  }
}

/**
 * Checks if a footprint fits at (row, col) in the occupancy grid
 */
function canPlace(
  grid: OccupancyGrid,
  row: number,
  col: number,
  colSpan: number,
  rowSpan: number,
  columns: number
): boolean {
  // Check bounds
  if (col + colSpan > columns) return false;

  // Check if all cells are available
  for (let r = row; r < row + rowSpan; r++) {
    // Grow grid if needed
    while (r >= grid.length) {
      grid.push(new Array(columns).fill(false));
    }
    for (let c = col; c < col + colSpan; c++) {
      if (grid[r][c]) return false;
    }
  }
  return true;
}

/**
 * Marks cells as occupied
 */
function placeItem(
  grid: OccupancyGrid,
  row: number,
  col: number,
  colSpan: number,
  rowSpan: number,
  columns: number
): void {
  for (let r = row; r < row + rowSpan; r++) {
    while (r >= grid.length) {
      grid.push(new Array(columns).fill(false));
    }
    for (let c = col; c < col + colSpan; c++) {
      grid[r][c] = true;
    }
  }
}

/**
 * Finds the earliest row where a footprint fits
 */
function findPlacement(
  grid: OccupancyGrid,
  colSpan: number,
  rowSpan: number,
  columns: number
): { row: number; col: number } | null {
  // Start from row 0, try each column
  for (let row = 0; row < grid.length + 10; row++) {
    // Ensure row exists
    while (row >= grid.length) {
      grid.push(new Array(columns).fill(false));
    }
    for (let col = 0; col <= columns - colSpan; col++) {
      if (canPlace(grid, row, col, colSpan, rowSpan, columns)) {
        return { row, col };
      }
    }
  }
  return null;
}

/**
 * Computes layout with packing heuristic
 */
function computeLayout(
  items: BentoItem[],
  columns: number
): LayoutItem[] {
  if (columns === 1) {
    // Force all square on mobile
    return items.map((item) => ({
      ...item,
      effectiveVariant: "square",
      colSpan: 1,
      rowSpan: 1,
    }));
  }

  const grid: OccupancyGrid = [];
  const layout: LayoutItem[] = [];

  // Variant priority order for fallback
  const fallbackOrder: BentoVariant[] = ["square", "wide", "tall"];

  for (const item of items) {
    const preferredVariant = item.variant || "square";
    let placed = false;

    // Try preferred variant first
    let variantToTry = preferredVariant;
    if (columns === 2 && variantToTry === "big") {
      // big not allowed on 2 columns
      variantToTry = "wide";
    }
    if (columns < 3 && variantToTry === "big") {
      variantToTry = "square";
    }

    const footprint = getVariantFootprint(variantToTry);
    let placement = findPlacement(grid, footprint.colSpan, footprint.rowSpan, columns);

    if (placement) {
      placeItem(
        grid,
        placement.row,
        placement.col,
        footprint.colSpan,
        footprint.rowSpan,
        columns
      );
      layout.push({
        ...item,
        effectiveVariant: variantToTry,
        colSpan: footprint.colSpan,
        rowSpan: footprint.rowSpan,
      });
      placed = true;
    } else {
      // Fallback to smaller variants
      for (const fallbackVariant of fallbackOrder) {
        if (fallbackVariant === variantToTry) continue;
        if (columns === 2 && fallbackVariant === "big") continue;
        if (columns < 3 && fallbackVariant === "big") continue;

        const fallbackFootprint = getVariantFootprint(
          fallbackVariant
        );
        placement = findPlacement(
          grid,
          fallbackFootprint.colSpan,
          fallbackFootprint.rowSpan,
          columns
        );

        if (placement) {
          placeItem(
            grid,
            placement.row,
            placement.col,
            fallbackFootprint.colSpan,
            fallbackFootprint.rowSpan,
            columns
          );
          layout.push({
            ...item,
            effectiveVariant: fallbackVariant,
            colSpan: fallbackFootprint.colSpan,
            rowSpan: fallbackFootprint.rowSpan,
          });
          placed = true;
          break;
        }
      }
    }

    // If still not placed, force square (shouldn't happen, but safety)
    if (!placed) {
      const squareFootprint = getVariantFootprint("square");
      placement = findPlacement(
        grid,
        squareFootprint.colSpan,
        squareFootprint.rowSpan,
        columns
      );
      if (placement) {
        placeItem(
          grid,
          placement.row,
          placement.col,
          squareFootprint.colSpan,
          squareFootprint.rowSpan,
          columns
        );
        layout.push({
          ...item,
          effectiveVariant: "square",
          colSpan: 1,
          rowSpan: 1,
        });
      }
    }
  }

  return layout;
}

/**
 * Gets Tailwind span classes for a variant
 * On mobile (base), force all to square (1x1)
 */
function getSpanClasses(colSpan: number, rowSpan: number): string {
  const classes: string[] = [
    "col-span-1 row-span-1", // Force square on mobile
  ];
  if (colSpan === 2) {
    classes.push("md:col-span-2");
  }
  if (rowSpan === 2) {
    classes.push("md:row-span-2");
  }
  return classes.join(" ");
}

export function BentoGalleryGrid({
  items,
  onItemClick,
  className,
}: BentoGalleryGridProps) {
  const layout = useMemo(
    () => computeLayout(items, 3),
    [items]
  );
  return (
    <div
      className={cn(
        "grid grid-flow-row-dense gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[350px] sm:auto-rows-[500px] md:auto-rows-[300px] lg:auto-rows-[350px] xl:auto-rows-[400px]",
        className
      )}
    >
      {layout.map((item, index) => {
        const spanClasses = getSpanClasses(item.colSpan, item.rowSpan);
        const ariaLabel = item.title ?? item.alt;

        return (
          <button
            key={item.id}
            id={`bento-item-${item.id}`}
            type="button"
            onClick={() => onItemClick?.(item, index)}
            aria-label={ariaLabel}
            className={cn(
              "group relative w-full h-full min-w-0 cursor-pointer overflow-hidden rounded-xl border border-border bg-card ring-1 ring-border transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              spanClasses
            )}
          >
            <div className="relative w-full h-full">
              <img
                src={item.thumbUrl}
                alt={item.alt}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              {item.title && (
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-sm font-medium text-white">
                      {item.title}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}