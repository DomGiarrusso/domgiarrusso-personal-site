import { Outlet, createFileRoute } from '@tanstack/react-router'

import Navbar from '@/components/nav/navbar'

export const Route = createFileRoute('/_main-layout')({ component: MainLayout })

function MainLayout() {
  return (
    <div className="w-full">
      <header className="fixed inset-x-0 bottom-0 z-50 md:sticky md:top-0 md:bottom-auto">
        <Navbar />
      </header>
      <main className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 md:pb-0 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
