import type { SkillConfig } from '@/components/home/skills-card'
import SkillBadge from '@/components/ui/skill-badge'
import { cn } from '@/lib/utils'

type Props = {
  skills: Array<SkillConfig>
  align?: 'center' | 'start' | 'end'
  className?: string
}

export default function DynamicSkillBadgeList({
  skills,
  align = 'center',
  className,
}: Props) {
  const justifyClass = {
    center: 'justify-center',
    start: 'justify-start',
    end: 'justify-end',
  }[align]
  return (
    <ul className={cn('flex flex-wrap gap-1 gap-y-2', justifyClass, className)}>
      {skills.map((skill) => (
        <SkillBadge
          variant="secondary"
          key={skill.name}
          icon={skill.icon}
          skill={skill.name}
          href={skill.href}
        />
      ))}
    </ul>
  )
}
