import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/home/hero'
import Skills from '@/components/home/skills'

export const Route = createFileRoute('/_main-layout/')({ component: App })

function App() {
  return (
    <>
      {/* Hero */}
      <Hero />
      {/* Skills */}
      <Skills />
      {/* Projects */}

      {/* About */}

      {/* <ComponentExample /> */}
    </>
  )
}
