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
  colSpan: number
  rowSpan: number
}

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

function getLayoutItems(items: Array<BentoItem>): Array<LayoutItem> {
  return items.map((item) => ({
    ...item,
    ...getVariantFootprint(getValidVariant(item.variant)),
  }))
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
  const layout = getLayoutItems(items)
  return (
    <div className="@container">
      <div
        className={cn(
          'grid auto-rows-[100cqw] grid-flow-row grid-cols-1 gap-4 md:auto-rows-[calc((100cqw-1rem)/2)] md:grid-cols-2 lg:auto-rows-[calc((100cqw-2rem)/3)] lg:grid-cols-3',
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
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_50%_-30%,transparent_0%,transparent_95%,var(--primary-alt-600)_108%),linear-gradient(to_top,rgb(0_0_0/85%)_0%,rgb(0_0_0/45%)_30%,transparent_65%)] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
                    <div className="absolute right-0 bottom-0 left-0 p-4">
                      <p className="text-sm font-medium text-white drop-shadow-md">
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
