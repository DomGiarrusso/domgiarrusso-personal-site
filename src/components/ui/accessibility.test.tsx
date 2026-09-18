// @vitest-environment jsdom

import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router'

import Navbar from '@/components/nav/navbar'
import DynamicSkillBadgeList from '@/components/ui/dynamic-skill-badge-list'
import ProjectCard from '@/components/ui/project-card'

afterEach(cleanup)

async function renderWithRouter(component: React.ReactNode) {
  const router = createRouter({
    routeTree: createRootRoute({ component: () => component }),
    history: createMemoryHistory({ initialEntries: ['/'] }),
  })
  await router.load()
  return render(<RouterProvider router={router} />)
}

describe('link focus indicators', () => {
  it('gives the site title a visible focus ring', async () => {
    const { getByRole } = await renderWithRouter(<Navbar />)

    expect(
      getByRole('link', { name: 'Dominic Giarrusso' }).className,
    ).toContain('focus-visible:ring-[3px]')
  })

  it('gives project cards a visible focus ring', async () => {
    const { getByRole } = await renderWithRouter(
      <ProjectCard
        title="Test project"
        slug="test-project"
        blurb="A project used to verify keyboard focus styles."
      />,
    )

    expect(getByRole('link', { name: /Test project/ }).className).toContain(
      'focus-visible:ring-[3px]',
    )
  })
})

describe('list semantics', () => {
  it('renders skill badges as list items', () => {
    const { container } = render(
      <DynamicSkillBadgeList
        skills={[
          {
            name: 'TypeScript',
            icon: null,
            href: 'https://typescriptlang.org',
          },
          { name: 'React', icon: null },
        ]}
      />,
    )
    const list = container.querySelector('ul')

    expect(list).not.toBeNull()
    expect(Array.from(list!.children).map((child) => child.tagName)).toEqual([
      'LI',
      'LI',
    ])
  })
})
