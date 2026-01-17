import SkillsCard, { SkillConfig } from '@/components/home/skills-card'
import { getSkills } from '@/lib/skills-registry'

type Props = {}

const frameworkSkills: SkillConfig[] = getSkills([
  'dotnet', 
  'react', 
  'next', 
  'tailwind', 
  'bootstrap', 
  'node', 
  'express', 
  'flask', 
  'postgres', 
  'sqlserver', 
  'sqlite', 
  'firebase'
])

export default function Skills({}: Props) {
  return (
    <section className="flex flex-col items-center justify-center my-24">
      <h3 className="text-5xl font-bold text-center">Skills</h3>

      <div className="grid grid-cols-3 gap-6 mt-8 w-full">
        <SkillsCard title="Frameworks" skills={frameworkSkills} />
      </div>
    </section>
  )
}
