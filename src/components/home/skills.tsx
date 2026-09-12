import {
  BookOpen01Icon,
  Briefcase01Icon,
  SourceCodeIcon,
  ToolsIcon,
} from '@hugeicons/core-free-icons'
import type { SkillConfig } from '@/components/home/skills-card'
import SkillsCard from '@/components/home/skills-card'
import { Reveal } from '@/components/motion/reveal'
import { getSkills } from '@/lib/skills-registry'

const coreSkills: Array<SkillConfig> = getSkills([
  'csharp',
  'typescript',
  'javascript',
  'jquery',
  'html',
  'css',
  'sql',
  'dotnet',
  'react',
  'next',
  'tailwind',
  'vite',
  'postgres',
  'sqlserver',
  'node',
  'express',
  'markdown',
  'sqlite',
  'sass',
  'docker',
  'json',
  'bootstrap',
])

const additionalExperienceSkills: Array<SkillConfig> = getSkills([
  'python',
  'c',
  'cpp',
  'flask',
  'firebase',
  'xml',
])

const toolsAndPlatformsSkills: Array<SkillConfig> = getSkills([
  'vscode',
  'visualstudio',
  'zed',
  'codex',
  't3code',
  'opencode',
  'windows',
  'git',
  'github',
  'ssms',
  'dbeaver',
  'pgadmin',
  'office',
  'adobe',
  'affinity',
  'linux',
  'blender',
  'unreal',
  'unity',
  'godot',
])

const learningSkills: Array<SkillConfig> = getSkills(['agenticCoding'])

export default function Skills() {
  return (
    <section className="my-20 flex flex-col items-center justify-center sm:my-24">
      <Reveal>
        <h3 className="text-center text-4xl font-bold sm:text-5xl">Skills</h3>
      </Reveal>

      <div className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-12">
        <Reveal className="md:col-span-2 xl:col-span-8" delay={0} origin="left">
          <SkillsCard
            title="Core Technologies"
            icon={SourceCodeIcon}
            description="The technologies I am most comfortable using to build projects."
            skills={coreSkills}
            className="h-full"
          />
        </Reveal>
        <Reveal
          className="md:col-span-2 xl:col-span-4"
          delay={90}
          origin="right"
        >
          <SkillsCard
            title="Additional Experience"
            icon={Briefcase01Icon}
            description="Technologies I have worked with outside my primary stack."
            skills={additionalExperienceSkills}
            className="h-full"
          />
        </Reveal>
        <Reveal className="xl:col-span-7" delay={0} origin="left">
          <SkillsCard
            title="Tools & Platforms"
            icon={ToolsIcon}
            description="Software and environments that support my technical and creative work."
            skills={toolsAndPlatformsSkills}
            className="h-full"
          />
        </Reveal>
        <Reveal className="xl:col-span-5" delay={90} origin="right">
          <SkillsCard
            title="Learning & Tinkering"
            icon={BookOpen01Icon}
            description="Technologies I am actively making time to learn and experiment with."
            emptyMessage="Nothing here right now. I am focused on applying and deepening my current skills."
            skills={learningSkills}
            className="h-full"
          />
        </Reveal>
      </div>
    </section>
  )
}
