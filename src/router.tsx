import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from '@/routeTree.gen'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    scrollRestorationBehavior: 'instant',
    defaultPreloadStaleTime: 0,
  })

  // Recheck on each navigation so anchor jumps and reduced motion stay instant.
  router.subscribe('onBeforeLoad', ({ pathChanged }) => {
    router.update({
      defaultViewTransition:
        pathChanged &&
        typeof window !== 'undefined' &&
        !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })
  })

  return router
}
