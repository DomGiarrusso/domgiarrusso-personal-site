import { SkillConfig } from "@/components/home/skills-card";
import { BootstrapIcon, DotNetIcon, ExpressIcon, FirebaseIcon, FlaskIcon, NextIcon, NodeIcon, PostgresIcon, ReactIcon, SQLiteIcon, SQLServerIcon, TailwindIcon } from '@/components/icons/frameworks-icons'
import { CIcon, CPlusPlusIcon, CSharpIcon, CSSIcon, HTMLIcon, JavaScriptIcon, MarkdownIcon, PythonIcon, SassIcon, TypeScriptIcon, } from "@/components/icons/languages-icons";
import { AdobeIcon, AffinityIcon, BlenderIcon, DockerIcon, GitHubIcon, GitIcon, GodotIcon, LinuxIcon, MSOfficeIcon, UnityIcon, UnrealIcon, VSCodeIcon, VSIcon, WindowsIcon } from "@/components/icons/tools-icons";
import { CodeSimpleIcon, DatabaseIcon, ThirdBracketFreeIcons, } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";


export const skillsRegistry: Record<string, SkillConfig> = {
    dotnet: { name: '.NET', icon: <DotNetIcon className="size-4" />},
    react: { name: 'React', icon: <ReactIcon className="size-4" /> },
    next: { name: 'Next.js', icon: <NextIcon className="size-4" /> },
    tailwind: { name: 'Tailwind CSS', icon: <TailwindIcon className="size-4" /> },
    bootstrap: { name: 'Bootstrap', icon: <BootstrapIcon className="size-4" /> },
    node: { name: 'Node.js', icon: <NodeIcon className="size-5" /> },
    express: { name: 'Express.js', icon: <ExpressIcon className="size-4" /> },
    flask: { name: 'Flask', icon: <FlaskIcon className="size-4" /> },
    postgres: { name: 'PostgresSQL', icon: <PostgresIcon className="size-4" /> },
    sqlserver: { name: 'SQL Server', icon: <SQLServerIcon className="size-4" /> },
    sqlite: { name: 'SQLite', icon: <SQLiteIcon className="size-4" /> },
    firebase: { name: 'Firebase', icon: <FirebaseIcon className="size-4" /> },
    typescript: { name: 'TypeScript', icon: <TypeScriptIcon className="size-4" /> },
    javascript: { name: 'JavaScript', icon: <JavaScriptIcon className="size-4" /> },
    csharp: { name: 'C#', icon: <CSharpIcon className="size-4" /> },
    python: { name: 'Python', icon: <PythonIcon className="size-4" /> },
    html: { name: 'HTML', icon: <HTMLIcon className="size-4" /> },
    css: { name: 'CSS', icon: <CSSIcon className="size-4" /> },
    sql: { name: 'SQL', icon: <HugeiconsIcon icon={DatabaseIcon} strokeWidth={2} className="size-4" /> },
    c: { name: 'C', icon: <CIcon className="size-3" /> },
    cpp: { name: 'C++', icon: <CPlusPlusIcon className="size-5" /> },
    markdown: { name: 'Markdown', icon: <MarkdownIcon className="size-5" /> },
    sass: { name: 'Sass', icon: <SassIcon className="size-5" /> },
    xml: { name: 'XML', icon: <HugeiconsIcon icon={CodeSimpleIcon} strokeWidth={2} className="size-4" /> },
    json: { name: 'JSON', icon: <HugeiconsIcon icon={ThirdBracketFreeIcons} strokeWidth={2} className="size-4" /> },
    vscode: { name: 'VSCode', icon: <VSCodeIcon className="size-4" /> },
    visualstudio: { name: 'Visual Studio', icon: <VSIcon className="size-4" /> },
    windows: { name: 'Windows', icon: <WindowsIcon className="size-4" /> },
    linux: { name: 'Linux', icon: <LinuxIcon className="size-4" /> },
    git: { name: 'Git', icon: <GitIcon className="size-4" /> },
    github: { name: 'GitHub', icon: <GitHubIcon className="size-4" /> },
    unreal: { name: 'Unreal Engine', icon: <UnrealIcon className="size-4" /> },
    unity: { name: 'Unity', icon: <UnityIcon className="size-4" /> },
    godot: { name: 'Godot', icon: <GodotIcon className="size-4" /> },
    adobe: { name: 'Adobe', icon: <AdobeIcon className="size-4" /> },
    office: { name: 'Microsoft Office', icon: <MSOfficeIcon className="size-4" /> },
    blender: { name: 'Blender', icon: <BlenderIcon className="size-4" /> },
    affinity: { name: 'Affinity', icon: <AffinityIcon className="size-4" /> },
    docker: { name: 'Docker', icon: <DockerIcon className="size-4" /> },
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