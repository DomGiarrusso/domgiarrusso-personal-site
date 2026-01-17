import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import DynamicSkillBadgeList from '@/components/ui/dynamic-skill-badge-list'

export type SkillConfig = {
  name: string
  icon: React.ReactNode
}
type SkillsCardProps = {
  title: string
  className?: string
  skills: SkillConfig[]
}

export default function SkillsCard({
  title,
  className,
  skills,
}: SkillsCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-center text-2xl font-semibold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-wrap gap-1 gap-y-2 justify-center'>
        <DynamicSkillBadgeList skills={skills} />
      </CardContent>
    </Card>
  )
}
