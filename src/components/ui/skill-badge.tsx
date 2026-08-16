import type { VariantProps } from 'class-variance-authority'
import type { badgeVariants } from '@/components/ui/badge'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type SkillBadgeProps = {
  icon?: React.ReactNode
  variant?: VariantProps<typeof badgeVariants>['variant']
  className?: string
  skill: string
  href?: string
}

export default function SkillBadge({
  icon,
  variant,
  className,
  skill,
  href,
  ...props
}: SkillBadgeProps) {
  const sizeStyle = 'h-7 px-3 py-1 text-sm'
  const badgeEffects =
    'relative hover:scale-105 after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_90%_150%_at_50%_-20%,transparent_0%,transparent_65%,color-mix(in_oklab,var(--primary-alt)_60%,transparent)_100%)] after:opacity-0 after:transition-opacity after:duration-300 after:ease-in-out hover:after:opacity-100'
  const transitionControls =
    'transition-[color,background-color,border-color,box-shadow,transform] duration-300 ease-in-out'
  const badge = (
    <Badge
      variant={variant}
      className={cn(sizeStyle, badgeEffects, transitionControls, className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-1">
        {icon && icon}
        {skill}
      </span>
    </Badge>
  )

  return href ? (
    <a
      href={href}
      className="inline-flex rounded-4xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      {badge}
    </a>
  ) : (
    badge
  )
}
