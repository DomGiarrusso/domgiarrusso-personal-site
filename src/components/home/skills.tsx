import SkillsCard, { SkillConfig } from '@/components/home/skills-card'
import { getSkills } from '@/lib/skills-registry'
import { CodeIcon, Layers01Icon, ToolsIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

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

const languageSkills: SkillConfig[] = getSkills([
  'csharp',
  'typescript',
  'javascript',
  'python',
  'html',
  'css',
  'sql',
  'c',
  'cpp',
  'markdown',
  'sass',
  'xml',
  'json',
])
const toolSkills: SkillConfig[] = getSkills([
  'vscode',
  'visualstudio',
  'windows',
  'linux',
  'git',
  'github',
  'unreal',
  'unity',
  'godot',
  'adobe',
  'office',
  'blender',
  'affinity',
  'docker',
])

export default function Skills({}: Props) {
  return (
    <section className="flex flex-col items-center justify-center my-24">
      <h3 className="text-5xl font-bold text-center">Skills</h3>

      <div className="grid grid-cols-3 gap-6 mt-8 w-full">
        <SkillsCard title="Languages" titleIcon={<HugeiconsIcon icon={CodeIcon} strokeWidth={2} className="size-8" />} skills={languageSkills} />
        <SkillsCard title="Frameworks" titleIcon={<HugeiconsIcon icon={Layers01Icon} strokeWidth={2} className="size-8" />} skills={frameworkSkills} />
        <SkillsCard title="Tools" titleIcon={<HugeiconsIcon icon={ToolsIcon} strokeWidth={2} className="size-8" />} skills={toolSkills} />
      </div>
    </section>
  )
}
