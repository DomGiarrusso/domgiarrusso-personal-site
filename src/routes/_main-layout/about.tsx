import { createFileRoute } from '@tanstack/react-router'
import { createPageMetadata } from '@/lib/metadata'

export const Route = createFileRoute('/_main-layout/about')({
  head: () =>
    createPageMetadata({
      title: 'About',
      description:
        'About Dominic Giarrusso, a fullstack developer based in Northern Virginia.',
      path: '/about',
      robots: 'noindex, nofollow',
    }),
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main-layout/about"! My name is Dominic </div>
}
