import { VariantProps } from 'class-variance-authority'
import { Badge, badgeVariants } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type SkillBadgeProps = {
  icon?: React.ReactNode
  variant?: VariantProps<typeof badgeVariants>['variant']
  className?: string
  skill: string
}

export default function SkillBadge({
  icon,
  variant,
  className,
  skill,
  ...props
}: SkillBadgeProps) {
  const sizeStyle: string = 'h-7 px-3 py-1 text-sm'
  const badgeEffects: string = ' hover:bg-secondary/80'
  const transitionControls: string = 'transition-all duration-200'
  return (
    <Badge variant={variant} className={cn(sizeStyle, badgeEffects, transitionControls,  className)} {...props}>
      <span>
        {icon && icon}
      </span>
        {skill}
    </Badge>
  )
}
