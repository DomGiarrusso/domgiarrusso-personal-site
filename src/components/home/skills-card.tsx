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
  description: string
  className?: string
  emptyMessage?: string
  skills: Array<SkillConfig>
}

export default function SkillsCard({
  title,
  description,
  className,
  emptyMessage,
  skills,
}: SkillsCardProps) {
  return (
    <Card className={cn('h-full', className)}>
      <CardHeader className="gap-2">
        <CardTitle className="text-xl font-bold sm:text-2xl">{title}</CardTitle>
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
