import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main-layout/gallery')({
  component: GalleryLayout,
})

function GalleryLayout() {
  return <Outlet />
}
