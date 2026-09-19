import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import type { HapticInput } from 'web-haptics'

import { useHaptics } from '@/components/haptics-provider'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "icon-hover focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-md border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-4 inline-flex cursor-pointer items-center justify-center whitespace-nowrap transition-[color,background-color,border-color,box-shadow] duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    variants: {
      variant: {
        default: 'bg-primary  text-primary-foreground hover:bg-primary/80',
        'default-alt':
          'bg-primary-alt dark:bg-primary-alt-700 text-primary-foreground hover:bg-primary-alt/80 dark:hover:bg-primary-alt-700/80 border border-primary-alt-700 dark:border-primary-alt',
        outline:
          'border-border bg-input/40 hover:bg-muted/50 hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground shadow-xs',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground',
        ghost:
          'hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground',
        destructive:
          'bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30',
        link: 'text-primary-alt-600 underline-offset-4 hover:underline',
      },
      size: {
        default:
          'h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: 'h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5',
        lg: 'h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',
        icon: 'size-9',
        'icon-xs':
          "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
        'icon-sm':
          'size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default-alt',
      size: 'default',
    },
  },
)

type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>

const hapticByVariant: Record<ButtonVariant, HapticInput> = {
  default: 'medium',
  'default-alt': 'medium',
  outline: 'light',
  secondary: 'light',
  ghost: 'light',
  destructive: 'warning',
  link: 'light',
}

type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    haptic?: HapticInput | false
  }

function Button({
  className,
  variant = 'default-alt',
  size = 'default',
  haptic,
  onClick,
  ...props
}: ButtonProps) {
  const { trigger } = useHaptics()

  return (
    <ButtonPrimitive
      data-slot="button"
      data-haptic-managed
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={(event) => {
        onClick?.(event)

        if (!event.defaultPrevented && haptic !== false) {
          void trigger(haptic ?? hapticByVariant[variant ?? 'default-alt'])
        }
      }}
      {...props}
    />
  )
}

export { Button, buttonVariants }
export type { ButtonProps }
