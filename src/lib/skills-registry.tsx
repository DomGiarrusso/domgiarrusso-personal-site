import {
  AiProgrammingIcon,
  CodeSimpleIcon,
  DatabaseIcon,
  ThirdBracketFreeIcons,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import type { SkillConfig } from '@/components/home/skills-card'
import {
  BootstrapIcon,
  DotNetIcon,
  ExpressIcon,
  FirebaseIcon,
  FlaskIcon,
  JQueryIcon,
  NextIcon,
  NodeIcon,
  PostgresIcon,
  ReactIcon,
  SQLServerIcon,
  SQLiteIcon,
  TailwindIcon,
  TanStackStartIcon,
  ViteIcon,
} from '@/components/icons/frameworks-icons'
import {
  CIcon,
  CPlusPlusIcon,
  CSSIcon,
  CSharpIcon,
  HTMLIcon,
  JavaScriptIcon,
  MarkdownIcon,
  PythonIcon,
  SassIcon,
  TypeScriptIcon,
} from '@/components/icons/languages-icons'
import {
  AdobeIcon,
  AffinityIcon,
  BlenderIcon,
  CodexIcon,
  DBeaverIcon,
  DockerIcon,
  FigmaIcon,
  GitHubIcon,
  GitIcon,
  GodotIcon,
  LinuxIcon,
  MSOfficeIcon,
  OpenCodeIcon,
  T3CodeIcon,
  UnityIcon,
  UnrealIcon,
  VSCodeIcon,
  VSIcon,
  WindowsIcon,
  ZedIcon,
} from '@/components/icons/tools-icons'

export const skillsRegistry: Partial<Record<string, SkillConfig>> = {
  agenticCoding: {
    name: 'Agentic Coding',
    icon: (
      <HugeiconsIcon
        icon={AiProgrammingIcon}
        strokeWidth={2}
        className="size-4"
      />
    ),
    href: 'https://www.ibm.com/think/topics/agentic-coding',
  },
  dotnet: {
    name: '.NET',
    icon: <DotNetIcon className="size-4" />,
    href: 'https://dotnet.microsoft.com/en-us/',
  },
  react: {
    name: 'React',
    icon: <ReactIcon className="size-4" />,
    href: 'https://react.dev/',
  },
  tanstackStart: {
    name: 'TanStack Start',
    icon: <TanStackStartIcon className="size-4" />,
    href: 'https://tanstack.com/start/latest',
  },
  next: {
    name: 'Next.js',
    icon: <NextIcon className="size-4" />,
    href: 'https://nextjs.org/',
  },
  tailwind: {
    name: 'Tailwind CSS',
    icon: <TailwindIcon className="size-4" />,
    href: 'https://tailwindcss.com/',
  },
  vite: {
    name: 'Vite',
    icon: <ViteIcon className="size-4" />,
    href: 'https://vite.dev/',
  },
  bootstrap: {
    name: 'Bootstrap',
    icon: <BootstrapIcon className="size-4" />,
    href: 'https://getbootstrap.com/',
  },
  node: {
    name: 'Node.js',
    icon: <NodeIcon className="size-5" />,
    href: 'https://nodejs.org/en',
  },
  express: {
    name: 'Express.js',
    icon: <ExpressIcon className="size-4" />,
    href: 'https://expressjs.com/',
  },
  flask: {
    name: 'Flask',
    icon: <FlaskIcon className="size-4" />,
    href: 'https://flask.palletsprojects.com/en/stable/',
  },
  jquery: {
    name: 'jQuery',
    icon: <JQueryIcon className="size-4" />,
    href: 'https://jquery.com/',
  },
  postgres: {
    name: 'PostgresSQL',
    icon: <PostgresIcon className="size-4" />,
    href: 'https://www.postgresql.org/',
  },
  sqlserver: {
    name: 'SQL Server',
    icon: <SQLServerIcon className="size-4" />,
    href: 'https://www.microsoft.com/en-us/sql-server',
  },
  ssms: {
    name: 'SSMS',
    icon: <SQLServerIcon className="size-4" />,
    href: 'https://learn.microsoft.com/en-us/ssms/sql-server-management-studio-ssms',
  },
  dbeaver: {
    name: 'DBeaver',
    icon: <DBeaverIcon className="size-4" />,
    href: 'https://dbeaver.io/',
  },
  pgadmin: {
    name: 'pgAdmin',
    icon: <PostgresIcon className="size-4" />,
    href: 'https://www.pgadmin.org/',
  },
  sqlite: {
    name: 'SQLite',
    icon: <SQLiteIcon className="size-4" />,
    href: 'https://sqlite.org/',
  },
  firebase: {
    name: 'Firebase',
    icon: <FirebaseIcon className="size-4" />,
    href: 'https://firebase.google.com/',
  },
  typescript: {
    name: 'TypeScript',
    icon: <TypeScriptIcon className="size-4" />,
    href: 'https://www.typescriptlang.org/',
  },
  javascript: {
    name: 'JavaScript',
    icon: <JavaScriptIcon className="size-4" />,
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  csharp: {
    name: 'C#',
    icon: <CSharpIcon className="size-4" />,
    href: 'https://dotnet.microsoft.com/en-us/languages/csharp',
  },
  python: {
    name: 'Python',
    icon: <PythonIcon className="size-4" />,
    href: 'https://www.python.org/',
  },
  html: {
    name: 'HTML',
    icon: <HTMLIcon className="size-4" />,
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  css: {
    name: 'CSS',
    icon: <CSSIcon className="size-4" />,
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  sql: {
    name: 'SQL',
    icon: (
      <HugeiconsIcon icon={DatabaseIcon} strokeWidth={2} className="size-4" />
    ),
    href: 'https://en.wikipedia.org/wiki/SQL',
  },
  c: {
    name: 'C',
    icon: <CIcon className="size-3" />,
    href: 'https://www.c-language.org/',
  },
  cpp: {
    name: 'C++',
    icon: <CPlusPlusIcon className="size-5" />,
    href: 'https://cplusplus.com/',
  },
  markdown: {
    name: 'Markdown',
    icon: <MarkdownIcon className="size-5" />,
    href: 'https://www.markdownguide.org/',
  },
  sass: {
    name: 'Sass',
    icon: <SassIcon className="size-5" />,
    href: 'https://sass-lang.com/',
  },
  xml: {
    name: 'XML',
    icon: (
      <HugeiconsIcon icon={CodeSimpleIcon} strokeWidth={2} className="size-4" />
    ),
    href: 'https://developer.mozilla.org/en-US/docs/Web/XML/Guides/XML_introduction',
  },
  json: {
    name: 'JSON',
    icon: (
      <HugeiconsIcon
        icon={ThirdBracketFreeIcons}
        strokeWidth={2}
        className="size-4"
      />
    ),
    href: 'https://www.json.org/json-en.html',
  },
  vscode: {
    name: 'VSCode',
    icon: <VSCodeIcon className="size-4" />,
    href: 'https://code.visualstudio.com/',
  },
  visualstudio: {
    name: 'Visual Studio',
    icon: <VSIcon className="size-4" />,
    href: 'https://visualstudio.microsoft.com/',
  },
  windows: {
    name: 'Windows',
    icon: <WindowsIcon className="size-4" />,
    href: 'https://www.microsoft.com/en-us/windows',
  },
  linux: {
    name: 'Linux',
    icon: <LinuxIcon className="size-4" />,
    href: 'https://www.linux.org/',
  },
  git: {
    name: 'Git',
    icon: <GitIcon className="size-4" />,
    href: 'https://git-scm.com/',
  },
  github: {
    name: 'GitHub',
    icon: <GitHubIcon className="size-4" />,
    href: 'https://github.com/',
  },
  unreal: {
    name: 'Unreal Engine',
    icon: <UnrealIcon className="size-4" />,
    href: 'https://www.unrealengine.com/',
  },
  unity: {
    name: 'Unity',
    icon: <UnityIcon className="size-4" />,
    href: 'https://unity.com/',
  },
  godot: {
    name: 'Godot',
    icon: <GodotIcon className="size-4" />,
    href: 'https://godotengine.org/',
  },
  adobe: {
    name: 'Adobe',
    icon: <AdobeIcon className="size-4" />,
    href: 'https://www.adobe.com/',
  },
  figma: {
    name: 'Figma',
    icon: <FigmaIcon className="size-4" />,
    href: 'https://www.figma.com/',
  },
  office: {
    name: 'Microsoft Office',
    icon: <MSOfficeIcon className="size-4" />,
    href: 'https://m365.cloud.microsoft/',
  },
  blender: {
    name: 'Blender',
    icon: <BlenderIcon className="size-4" />,
    href: 'https://www.blender.org/',
  },
  affinity: {
    name: 'Affinity',
    icon: <AffinityIcon className="size-4" />,
    href: 'https://www.affinity.studio/',
  },
  zed: {
    name: 'Zed',
    icon: <ZedIcon className="size-4" />,
    href: 'https://zed.dev/',
  },
  codex: {
    name: 'Codex',
    icon: <CodexIcon className="size-4" />,
    href: 'https://openai.com/codex/',
  },
  t3code: {
    name: 'T3 Code',
    icon: <T3CodeIcon className="size-4" />,
    href: 'https://t3.codes/',
  },
  opencode: {
    name: 'OpenCode',
    icon: <OpenCodeIcon className="size-4" />,
    href: 'https://opencode.ai/',
  },
  docker: {
    name: 'Docker',
    icon: <DockerIcon className="size-4" />,
    href: 'https://www.docker.com/',
  },
}

/**
 * Helper function to get the skills configs from the skills registry
 * @param keys - The keys of the skills to get
 * @returns The skills configs
 */
export function getSkills(keys: Array<string>): Array<SkillConfig> {
  return keys
    .map((key) => {
      const skill = skillsRegistry[key]
      if (!skill) {
        console.warn(`Skill "${key}" not found in registry`)
        return null
      }
      return skill
    })
    .filter(Boolean) as Array<SkillConfig>
}
