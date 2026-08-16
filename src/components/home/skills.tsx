import type { SkillConfig } from '@/components/home/skills-card'
import SkillsCard from '@/components/home/skills-card'
import { getSkills } from '@/lib/skills-registry'

const coreSkills: Array<SkillConfig> = getSkills([
  'csharp',
  'typescript',
  'javascript',
  'html',
  'css',
  'sql',
  'dotnet',
  'react',
  'next',
  'tailwind',
  'postgres',
  'sqlserver',
  'node',
  'express',
  'markdown',
  'sqlite',
  'sass',
  'docker',
  'xml',
  'json',
  'bootstrap',
])

const additionalExperienceSkills: Array<SkillConfig> = getSkills([
  'python',
  'c',
  'cpp',
  'flask',
  'firebase',
])

const toolsAndPlatformsSkills: Array<SkillConfig> = getSkills([
  'vscode',
  'visualstudio',
  'windows',
  'git',
  'github',
  'office',
  'adobe',
  'affinity',
  'linux',
  'blender',
  'unreal',
  'unity',
  'godot',
])

const learningSkills: Array<SkillConfig> = getSkills([])

export default function Skills() {
  return (
    <section className="my-20 flex flex-col items-center justify-center sm:my-24">
      <h3 className="text-center text-4xl font-bold sm:text-5xl">Skills</h3>

      <div className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-12">
        <SkillsCard
          title="Core Technologies"
          description="The technologies I am most comfortable using to build projects."
          skills={coreSkills}
          className="md:col-span-2 xl:col-span-8"
        />
        <SkillsCard
          title="Additional Experience"
          description="Technologies I have worked with outside my primary stack."
          skills={additionalExperienceSkills}
          className="md:col-span-2 xl:col-span-4"
        />
        <SkillsCard
          title="Tools & Platforms"
          description="Software and environments that support my technical and creative work."
          skills={toolsAndPlatformsSkills}
          className="xl:col-span-7"
        />
        <SkillsCard
          title="Currently Exploring"
          description="Technologies I am actively making time to learn and experiment with."
          emptyMessage="Nothing here right now. I am focused on applying and deepening my current skills."
          skills={learningSkills}
          className="xl:col-span-5"
        />
      </div>
    </section>
  )
}
