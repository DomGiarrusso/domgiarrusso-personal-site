import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/home/hero'
import Skills from '@/components/home/skills'
import Projects from '@/components/home/projects'
import AboutMe from '@/components/home/about-me'
import { getProjectSummaries } from '@/content/projects'
import { createPageMetadata, defaultPageDescription } from '@/lib/metadata'

export const Route = createFileRoute('/_main-layout/')({
  loader: () => ({ projects: getProjectSummaries() }),
  head: () =>
    createPageMetadata({
      description: defaultPageDescription,
      path: '/',
    }),
  component: App,
})

function App() {
  const { projects } = Route.useLoaderData()

  return (
    <>
      {/* Hero */}
      <Hero />
      {/* Skills */}
      <Skills />
      {/* Projects */}
      <Projects projects={projects} />
      {/* About */}
      <AboutMe />
      {/* <ComponentExample /> */}
    </>
  )
}
