import { CodeIcon, Layers01Icon, ToolsIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import type { SkillConfig } from '@/components/home/skills-card'
import SkillsCard from '@/components/home/skills-card'
import { getSkills } from '@/lib/skills-registry'

const frameworkSkills: Array<SkillConfig> = getSkills([
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
  'firebase',
])

const languageSkills: Array<SkillConfig> = getSkills([
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
const toolSkills: Array<SkillConfig> = getSkills([
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

export default function Skills() {
  return (
    <section className="my-20 flex flex-col items-center justify-center sm:my-24">
      <h3 className="text-center text-4xl font-bold sm:text-5xl">Skills</h3>

      <div className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <SkillsCard
          title="Languages"
          titleIcon={
            <HugeiconsIcon icon={CodeIcon} strokeWidth={2} className="size-8" />
          }
          skills={languageSkills}
        />
        <SkillsCard
          title="Frameworks"
          titleIcon={
            <HugeiconsIcon
              icon={Layers01Icon}
              strokeWidth={2}
              className="size-8"
            />
          }
          skills={frameworkSkills}
        />
        <SkillsCard
          title="Tools"
          titleIcon={
            <HugeiconsIcon
              icon={ToolsIcon}
              strokeWidth={2}
              className="size-8"
            />
          }
          skills={toolSkills}
        />
      </div>
    </section>
  )
}
