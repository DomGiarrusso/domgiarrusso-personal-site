import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/home/hero'
import Skills from '@/components/home/skills'
import { supabase } from '@/lib/supabase'
import Projects from '@/components/home/projects'
import AboutMe from '@/components/home/about-me'

export const Route = createFileRoute('/_main-layout/')({
  loader: async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('id, title, slug, blurb, thumbnail_url')
      .eq('is_published', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching projects', error)
    }
    return { projects: data ?? [] }
  },
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
