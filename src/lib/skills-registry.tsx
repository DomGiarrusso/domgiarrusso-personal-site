import { SkillConfig } from "@/components/home/skills-card";
import { BootstrapIcon, DotNetIcon, ExpressIcon, FirebaseIcon, FlaskIcon, NextIcon, NodeIcon, PostgresIcon, ReactIcon, SQLiteIcon, SQLServerIcon, TailwindIcon } from '@/components/icons/frameworks-icons'


export const skillsRegistry: Record<string, SkillConfig> = {
    dotnet: { name: '.NET', icon: <DotNetIcon className="size-4" />},
    react: { name: 'React', icon: <ReactIcon className="size-4" /> },
    next: { name: 'Next.js', icon: <NextIcon className="size-4" /> },
    tailwind: { name: 'Tailwind CSS', icon: <TailwindIcon className="size-4" /> },
    bootstrap: { name: 'Bootstrap', icon: <BootstrapIcon className="size-4" /> },
    node: { name: 'Node.js', icon: <NodeIcon className="size-4" /> },
    express: { name: 'Express.js', icon: <ExpressIcon className="size-4" /> },
    flask: { name: 'Flask', icon: <FlaskIcon className="size-4" /> },
    postgres: { name: 'PostgresSQL', icon: <PostgresIcon className="size-4" /> },
    sqlserver: { name: 'SQL Server', icon: <SQLServerIcon className="size-4" /> },
    sqlite: { name: 'SQLite', icon: <SQLiteIcon className="size-4" /> },
    firebase: { name: 'Firebase', icon: <FirebaseIcon className="size-4" /> },
}

/**
 * Helper function to get the skills configs from the skills registry
 * @param keys - The keys of the skills to get
 * @returns The skills configs
 */
export function getSkills(keys: string[]): SkillConfig[] {
    return keys.map(key => {
      const skill = skillsRegistry[key]
      if (!skill) {
        console.warn(`Skill "${key}" not found in registry`)
        return null
      }
      return skill
    }).filter(Boolean) as SkillConfig[]
  }