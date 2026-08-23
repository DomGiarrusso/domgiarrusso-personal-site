import { useMemo } from 'react'
import { cn } from '@/lib/utils'

export type BentoVariant = 'square' | 'wide' | 'tall' | 'big'

export type BentoItem = {
  id: string
  title?: string | null
  alt: string
  thumbnailUrl: string
  fullUrl?: string | null
  width?: number | null
  height?: number | null
  variant?: BentoVariant | string | null
}

export type BentoGalleryGridProps = {
  items: Array<BentoItem>
  onItemClick?: (item: BentoItem, index: number) => void
  className?: string
}

type LayoutItem = BentoItem & {
  effectiveVariant: BentoVariant
  colSpan: number
  rowSpan: number
}

type OccupancyGrid = Array<Array<boolean>>

/**
 * Gets the footprint of a variant (colSpan, rowSpan)
 */
function getVariantFootprint(variant: BentoVariant): {
  colSpan: number
  rowSpan: number
} {
  switch (variant) {
    case 'square':
      return { colSpan: 1, rowSpan: 1 }
    case 'wide':
      return { colSpan: 2, rowSpan: 1 }
    case 'tall':
      return { colSpan: 1, rowSpan: 2 }
    case 'big':
      return { colSpan: 2, rowSpan: 2 }
    default:
      return { colSpan: 1, rowSpan: 1 }
  }
}

function getValidVariant(variant?: BentoItem['variant']): BentoVariant {
  switch (variant) {
    case 'wide':
    case 'tall':
    case 'big':
    case 'square':
      return variant
    default:
      return 'square'
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
  columns: number,
): boolean {
  // Check bounds
  if (col + colSpan > columns) return false

  // Check if all cells are available
  for (let r = row; r < row + rowSpan; r++) {
    // Grow grid if needed
    while (r >= grid.length) {
      grid.push(new Array(columns).fill(false))
    }
    for (let c = col; c < col + colSpan; c++) {
      if (grid[r][c]) return false
    }
  }
  return true
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
  columns: number,
): void {
  for (let r = row; r < row + rowSpan; r++) {
    while (r >= grid.length) {
      grid.push(new Array(columns).fill(false))
    }
    for (let c = col; c < col + colSpan; c++) {
      grid[r][c] = true
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
  columns: number,
): { row: number; col: number } | null {
  // Start from row 0, try each column
  for (let row = 0; row < grid.length + 10; row++) {
    // Ensure row exists
    while (row >= grid.length) {
      grid.push(new Array(columns).fill(false))
    }
    for (let col = 0; col <= columns - colSpan; col++) {
      if (canPlace(grid, row, col, colSpan, rowSpan, columns)) {
        return { row, col }
      }
    }
  }
  return null
}

/**
 * Computes layout with packing heuristic
 */
function computeLayout(
  items: Array<BentoItem>,
  columns: number,
): Array<LayoutItem> {
  if (columns === 1) {
    // Force all square on mobile
    return items.map((item) => ({
      ...item,
      effectiveVariant: 'square',
      colSpan: 1,
      rowSpan: 1,
    }))
  }

  const grid: OccupancyGrid = []
  const layout: Array<LayoutItem> = []

  // Variant priority order for fallback
  const fallbackOrder: Array<BentoVariant> = ['square', 'wide', 'tall']

  for (const item of items) {
    const preferredVariant = getValidVariant(item.variant)
    let placed = false

    // Try preferred variant first
    let variantToTry = preferredVariant
    if (columns === 2 && variantToTry === 'big') {
      // big not allowed on 2 columns
      variantToTry = 'wide'
    }
    if (columns < 3 && variantToTry === 'big') {
      variantToTry = 'square'
    }

    const footprint = getVariantFootprint(variantToTry)
    let placement = findPlacement(
      grid,
      footprint.colSpan,
      footprint.rowSpan,
      columns,
    )

    if (placement) {
      placeItem(
        grid,
        placement.row,
        placement.col,
        footprint.colSpan,
        footprint.rowSpan,
        columns,
      )
      layout.push({
        ...item,
        effectiveVariant: variantToTry,
        colSpan: footprint.colSpan,
        rowSpan: footprint.rowSpan,
      })
      placed = true
    } else {
      // Fallback to smaller variants
      for (const fallbackVariant of fallbackOrder) {
        if (fallbackVariant === variantToTry) continue
        if (columns === 2 && fallbackVariant === 'big') continue
        if (columns < 3 && fallbackVariant === 'big') continue

        const fallbackFootprint = getVariantFootprint(fallbackVariant)
        placement = findPlacement(
          grid,
          fallbackFootprint.colSpan,
          fallbackFootprint.rowSpan,
          columns,
        )

        if (placement) {
          placeItem(
            grid,
            placement.row,
            placement.col,
            fallbackFootprint.colSpan,
            fallbackFootprint.rowSpan,
            columns,
          )
          layout.push({
            ...item,
            effectiveVariant: fallbackVariant,
            colSpan: fallbackFootprint.colSpan,
            rowSpan: fallbackFootprint.rowSpan,
          })
          placed = true
          break
        }
      }
    }

    // If still not placed, force square (shouldn't happen, but safety)
    if (!placed) {
      const squareFootprint = getVariantFootprint('square')
      placement = findPlacement(
        grid,
        squareFootprint.colSpan,
        squareFootprint.rowSpan,
        columns,
      )
      if (placement) {
        placeItem(
          grid,
          placement.row,
          placement.col,
          squareFootprint.colSpan,
          squareFootprint.rowSpan,
          columns,
        )
        layout.push({
          ...item,
          effectiveVariant: 'square',
          colSpan: 1,
          rowSpan: 1,
        })
      }
    }
  }

  return layout
}

/**
 * Gets Tailwind span classes for a variant
 * On mobile (base), force all to square (1x1)
 */
function getSpanClasses(colSpan: number, rowSpan: number): string {
  const classes: Array<string> = [
    'col-span-1 row-span-1', // Force square on mobile
  ]
  if (colSpan === 2) {
    classes.push('md:col-span-2')
  }
  if (rowSpan === 2) {
    classes.push('md:row-span-2')
  }
  return classes.join(' ')
}

export function BentoGalleryGrid({
  items,
  onItemClick,
  className,
}: BentoGalleryGridProps) {
  const layout = useMemo(() => computeLayout(items, 3), [items])
  return (
    <div className="@container">
      <div
        className={cn(
          'grid auto-rows-[100cqw] grid-flow-row-dense grid-cols-1 gap-4 md:auto-rows-[calc((100cqw-1rem)/2)] md:grid-cols-2 lg:auto-rows-[calc((100cqw-2rem)/3)] lg:grid-cols-3',
          className,
        )}
      >
        {layout.map((item, index) => {
          const spanClasses = getSpanClasses(item.colSpan, item.rowSpan)
          const ariaLabel = item.title ?? item.alt

          return (
            <button
              key={item.id}
              id={`bento-item-${item.id}`}
              type="button"
              onClick={() => onItemClick?.(item, index)}
              aria-label={ariaLabel}
              className={cn(
                'group relative h-full w-full min-w-0 cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-xs ring-1 ring-foreground/10 transition-[color,background-color,border-color,box-shadow] duration-300 hover:border-primary-alt/60 hover:bg-accent hover:ring-primary-alt/40 hover:shadow-[0_0_24px_color-mix(in_oklab,var(--primary-alt)_40%,transparent)] focus-visible:border-primary-alt/60 focus-visible:ring-2 focus-visible:ring-primary-alt/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:shadow-[0_0_24px_color-mix(in_oklab,var(--primary-alt)_40%,transparent)] focus-visible:outline-none',
                spanClasses,
              )}
            >
              <div className="relative h-full w-full">
                <img
                  src={item.thumbnailUrl}
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                {item.title && (
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_50%_-30%,transparent_0%,transparent_95%,var(--primary-alt)_108%)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
                    <div className="absolute right-0 bottom-0 left-0 p-4">
                      <p className="text-sm font-medium text-primary-alt-foreground">
                        {item.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
