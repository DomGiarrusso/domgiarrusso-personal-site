import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import DynamicSkillBadgeList from '@/components/ui/dynamic-skill-badge-list'

export type SkillConfig = {
  name: string
  icon: React.ReactNode
}
type SkillsCardProps = {
  title: string
  titleIcon?: React.ReactNode
  className?: string
  skills: SkillConfig[]
}

export default function SkillsCard({
  title,
  titleIcon,
  className,
  skills,
}: SkillsCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 justify-center text-2xl font-bold">
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
