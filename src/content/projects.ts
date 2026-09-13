import AwakenedContent from '../../content/projects/awakened.mdx'
import CurrentPortfolioContent from '../../content/projects/current-portfolio.mdx'
import DorkmodeChromeContent from '../../content/projects/dorkmode-chrome.mdx'
import LegacyPortfolioContent from '../../content/projects/legacy-portfolio.mdx'
import TaskTimerContent from '../../content/projects/task-timer.mdx'
import YetiMouthGamesWebsiteContent from '../../content/projects/yeti-mouth-games-website.mdx'
import type { MDXContent } from 'mdx/types'
import type { Project, ProjectSummary } from '@/content/types'

const projects: Array<Project> = [
  {
    title: 'Current Portfolio Website',
    slug: 'current-portfolio',
    blurb:
      'The current iteration of my portfolio, built with TanStack Start, React, TypeScript, and Tailwind CSS.',
    thumbnailUrl: '/images/monogram/Monogram_DG_Blue.svg',
    techStack: ['typescript', 'react', 'tailwind'],
    media: [
      {
        id: 'current-portfolio-monogram',
        src: '/images/monogram/Monogram_DG_Blue.svg',
        alt: 'Dominic Giarrusso monogram',
        fit: 'contain',
      },
    ],
    sortOrder: 1,
  },
  {
    title: 'Yeti Mouth Games Website',
    slug: 'yeti-mouth-games-website',
    blurb:
      "A statically generated Next.js website for Yeti Mouth Games and the studio's game catalog.",
    thumbnailUrl: `/images/projects/yeti-mouth-games/YMG_Logo_Square.webp`,
    techStack: ['typescript', 'next', 'tailwind'],
    media: [
      {
        id: 'yeti-mouth-games-logo',
        src: `/images/projects/yeti-mouth-games/YMG_Logo_Square.webp`,
        alt: 'Yeti Mouth Games logo',
        fit: 'contain',
      },
      {
        id: 'yeti-mouth-games-home-desktop',
        src: '/images/projects/yeti-mouth-games/ymg-screenshot-1.webp',
        alt: 'Yeti Mouth Games website landing page on desktop',
        aspectRatio: 8 / 5,
        fit: 'contain',
      },
      {
        id: 'yeti-mouth-games-home-compact',
        src: '/images/projects/yeti-mouth-games/ymg-screenshot-2.webp',
        alt: 'Yeti Mouth Games landing page with compact sidebar navigation',
        aspectRatio: 8 / 5,
        fit: 'contain',
      },
      {
        id: 'yeti-mouth-games-catalog',
        src: '/images/projects/yeti-mouth-games/ymg-screenshot-3.webp',
        alt: 'Games catalog on the Yeti Mouth Games website',
        aspectRatio: 8 / 5,
        fit: 'contain',
      },
      {
        id: 'yeti-mouth-games-mobile-home',
        src: '/images/projects/yeti-mouth-games/ymg-screenshot-4-mobile.webp',
        alt: 'Yeti Mouth Games website landing page on mobile',
        aspectRatio: 1320 / 2868,
        fit: 'contain',
      },
    ],
    externalUrl: 'https://yetimouthgames.com/',
    sortOrder: 2,
  },
  {
    title: 'Awakened',
    slug: 'awakened',
    blurb:
      'A third-person puzzle adventure where supernatural wisps help Magnol recover his lost memories.',
    thumbnailUrl: `/images/projects/awakened/Awakened_M.jpg`,
    techStack: ['unreal', 'blender', 'windows'],
    media: [
      {
        id: 'awakened-title',
        src: `/images/projects/awakened/Awakened_M.jpg`,
        alt: 'Awakened title graphic',
      },
      {
        id: 'awakened-lakeside',
        src: '/images/projects/awakened/screenshot-1.webp',
        alt: 'A lakeside dock and pink treehouse in Awakened',
        aspectRatio: 1749 / 994,
        fit: 'contain',
      },
      {
        id: 'awakened-overgrown-city',
        src: '/images/projects/awakened/screenshot-2.webp',
        alt: 'An overgrown city street between abandoned buildings in Awakened',
        aspectRatio: 1749 / 994,
        fit: 'contain',
      },
      {
        id: 'awakened-ice-cavern',
        src: '/images/projects/awakened/screenshot-3.webp',
        alt: 'A blue ice cavern with towering rock formations in Awakened',
        aspectRatio: 1749 / 994,
        fit: 'contain',
      },
      {
        id: 'awakened-forest-ravine',
        src: '/images/projects/awakened/screenshot-4.webp',
        alt: 'A misty purple forest surrounding a deep ravine in Awakened',
        aspectRatio: 1749 / 994,
        fit: 'contain',
      },
      {
        id: 'awakened-pink-tree',
        src: '/images/projects/awakened/screenshot-5.webp',
        alt: 'A large pink tree rising above an abandoned building in Awakened',
        aspectRatio: 1749 / 994,
        fit: 'contain',
      },
    ],
    externalUrl: 'https://domgiarrusso.itch.io/awakened',
    sortOrder: 3,
  },
  {
    title: 'Dorkmode for Chrome',
    slug: 'dorkmode-chrome',
    blurb:
      'A Chrome theme that brings the Dorkmode palette to the browser without turning every surface black.',
    thumbnailUrl: '/images/projects/dorkmode-chrome/DfC_TN.webp',
    techStack: ['json'],
    media: [
      {
        id: 'dorkmode-chrome-title',
        src: '/images/projects/dorkmode-chrome/screenshot-2.jpg',
        alt: 'Dorkmode for Chrome title graphic',
        aspectRatio: 8 / 5,
        fit: 'contain',
      },
      {
        id: 'dorkmode-chrome-browser',
        src: '/images/projects/dorkmode-chrome/screenshot-1.jpg',
        alt: 'Dorkmode theme applied to a Google Chrome window',
        aspectRatio: 8 / 5,
        fit: 'contain',
      },
    ],
    repositoryUrl: 'https://github.com/DomGiarrusso/Dorkmode-for-Chrome',
    externalUrl:
      'https://chromewebstore.google.com/detail/dorkmode/klccchdpjbbdhnoifajgomdiigiciaog',
    sortOrder: 4,
  },
  {
    title: 'Task:Timer',
    slug: 'task-timer',
    blurb:
      'A Chrome extension that runs repeating work and break timers based on the Pomodoro Technique.',
    thumbnailUrl: `/images/projects/task-timer/TaskTimer_M.jpg`,
    techStack: ['html', 'css', 'javascript', 'bootstrap'],
    media: [
      {
        id: 'task-timer-title',
        src: '/images/projects/task-timer/title.jpg',
        alt: 'Task:Timer title on a blue background',
        aspectRatio: 8 / 5,
        fit: 'contain',
      },
      {
        id: 'task-timer-empty',
        src: '/images/projects/task-timer/empty-state.jpg',
        alt: 'Task:Timer extension open in Chrome with empty timer fields',
        aspectRatio: 8 / 5,
        fit: 'contain',
      },
      {
        id: 'task-timer-work-timer',
        src: '/images/projects/task-timer/work-timer.jpg',
        alt: 'Task:Timer extension counting down a ten-minute work interval',
        aspectRatio: 8 / 5,
        fit: 'contain',
      },
      {
        id: 'task-timer-break-timer',
        src: '/images/projects/task-timer/break-timer.jpg',
        alt: 'Task:Timer extension counting down a five-minute break interval',
        aspectRatio: 8 / 5,
        fit: 'contain',
      },
    ],
    repositoryUrl: 'https://github.com/DomGiarrusso/Task-Timer',
    externalUrl:
      'https://chromewebstore.google.com/detail/tasktimer/diocibokflhpliokncgjnnhggpagolek',
    sortOrder: 5,
  },
  {
    title: 'Legacy Portfolio Website',
    slug: 'legacy-portfolio',
    blurb:
      'My legacy portfolio, built from scratch with HTML, CSS, JavaScript, and Bootstrap.',
    thumbnailUrl:
      '/images/projects/legacy-portfolio/legacy-portfolio-thumbnail.webp',
    techStack: ['html', 'css', 'javascript', 'bootstrap'],
    media: [
      {
        id: 'legacy-portfolio-home',
        src: '/images/projects/legacy-portfolio/legacy-portfolio-home.webp',
        alt: 'Landing page of the legacy portfolio website',
        aspectRatio: 8 / 5,
        fit: 'contain',
      },
      {
        id: 'legacy-portfolio-about',
        src: '/images/projects/legacy-portfolio/legacy-portfolio-about.webp',
        alt: 'About section of the legacy portfolio website',
        aspectRatio: 8 / 5,
        fit: 'contain',
      },
      {
        id: 'legacy-portfolio-projects',
        src: '/images/projects/legacy-portfolio/legacy-portfolio-projects.webp',
        alt: 'Projects section of the legacy portfolio website',
        aspectRatio: 8 / 5,
        fit: 'contain',
      },
      {
        id: 'legacy-portfolio-gallery',
        src: '/images/projects/legacy-portfolio/legacy-portfolio-gallery.webp',
        alt: 'Gallery section of the legacy portfolio website',
        aspectRatio: 8 / 5,
        fit: 'contain',
      },
    ],
    repositoryUrl: 'https://github.com/DomGiarrusso/domgiarrusso.github.io',
    sortOrder: 6,
  },
]

const projectContentBySlug: Record<string, MDXContent> = {
  awakened: AwakenedContent,
  'current-portfolio': CurrentPortfolioContent,
  'dorkmode-chrome': DorkmodeChromeContent,
  'legacy-portfolio': LegacyPortfolioContent,
  'task-timer': TaskTimerContent,
  'yeti-mouth-games-website': YetiMouthGamesWebsiteContent,
}

export function getProjectSummaries(): Array<ProjectSummary> {
  return [...projects]
    .sort((first, second) => first.sortOrder - second.sortOrder)
    .map(({ title, slug, blurb, thumbnailUrl }) => ({
      title,
      slug,
      blurb,
      thumbnailUrl,
    }))
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectContentBySlug(slug: string): MDXContent | undefined {
  return projectContentBySlug[slug]
}
