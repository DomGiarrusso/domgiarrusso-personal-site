// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import {
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router'

import NavMenu from '@/components/nav/nav-menu'

afterEach(cleanup)

describe('NavMenu', () => {
  it('uses list items for every desktop navigation list child', async () => {
    const router = createRouter({
      routeTree: createRootRoute({
        component: () => <NavMenu isScrolled={false} />,
      }),
      history: createMemoryHistory({ initialEntries: ['/'] }),
    })
    await router.load()
    const { container } = render(<RouterProvider router={router} />)
    const navigationList = container.querySelector(
      '[data-slot="navigation-menu-list"]',
    )

    expect(navigationList).not.toBeNull()
    expect(
      Array.from(navigationList!.children).every(
        (child) => child.tagName === 'LI',
      ),
    ).toBe(true)
  })

  it('opens the contact dialog from the mobile drawer', async () => {
    const router = createRouter({
      routeTree: createRootRoute({
        component: () => <NavMenu isScrolled={false} />,
      }),
      history: createMemoryHistory({ initialEntries: ['/'] }),
    })
    await router.load()
    render(<RouterProvider router={router} />)

    fireEvent.click(await screen.findByRole('button', { name: 'Open menu' }))
    const contactButtons = await screen.findAllByRole('button', {
      name: 'Contact',
    })
    fireEvent.click(contactButtons.at(-1)!)

    expect(
      await screen.findByRole('dialog', { name: 'Send a message' }),
    ).toBeTruthy()
  })
})
