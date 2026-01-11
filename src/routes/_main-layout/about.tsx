import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main-layout/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main-layout/about"! My name is Dominic </div>
}
