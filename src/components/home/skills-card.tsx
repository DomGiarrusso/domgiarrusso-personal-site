import { HugeiconsIcon } from '@hugeicons/react'
import type { IconSvgElement } from '@hugeicons/react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import DynamicSkillBadgeList from '@/components/ui/dynamic-skill-badge-list'
import { cn } from '@/lib/utils'

export type SkillConfig = {
  name: string
  icon: React.ReactNode
  href?: string
}

type SkillsCardProps = {
  title: string
  icon: IconSvgElement
  description: string
  className?: string
  emptyMessage?: string
  skills: Array<SkillConfig>
}

export default function SkillsCard({
  title,
  icon,
  description,
  className,
  emptyMessage,
  skills,
}: SkillsCardProps) {
  return (
    <Card className={cn('h-full', className)}>
      <CardHeader className="gap-2">
        <CardTitle className="flex items-center gap-2 text-xl font-bold sm:text-2xl">
          <HugeiconsIcon icon={icon} strokeWidth={2} aria-hidden="true" />
          {title}
        </CardTitle>
        <CardDescription className="leading-6">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {skills.length > 0 ? (
          <DynamicSkillBadgeList skills={skills} align="start" />
        ) : (
          <p className="text-muted-foreground leading-6">{emptyMessage}</p>
        )}
      </CardContent>
    </Card>
  )
}
