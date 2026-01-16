import { createFileRoute } from '@tanstack/react-router'
import { ComponentExample } from '@/components/component-example'
import Hero from '@/components/home/hero'

export const Route = createFileRoute('/_main-layout/')({ component: App })

function App() {
  return (
    <>
      {/* Hero */}
      <Hero />
      {/* Skills */}

      {/* Projects */}

      {/* About */}

      {/* <ComponentExample /> */}
    </>
  )
}
