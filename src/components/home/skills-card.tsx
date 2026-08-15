import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import DynamicSkillBadgeList from '@/components/ui/dynamic-skill-badge-list'
import { cn } from '@/lib/utils'

export type SkillConfig = {
  name: string
  icon: React.ReactNode
}
type SkillsCardProps = {
  title: string
  titleIcon?: React.ReactNode
  className?: string
  skills: Array<SkillConfig>
}

export default function SkillsCard({
  title,
  titleIcon,
  className,
  skills,
}: SkillsCardProps) {
  return (
    <Card className={cn('h-full', className)}>
      <CardHeader>
        <CardTitle className="flex items-center justify-center gap-2 text-center text-xl font-bold sm:text-2xl">
          {titleIcon && titleIcon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <DynamicSkillBadgeList skills={skills} />
      </CardContent>
    </Card>
  )
}
