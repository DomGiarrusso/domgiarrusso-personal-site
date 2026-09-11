import { Outlet, createFileRoute } from '@tanstack/react-router'

import Footer from '@/components/footer'
import Navbar from '@/components/nav/navbar'

export const Route = createFileRoute('/_main-layout')({ component: MainLayout })

function MainLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col pb-16 md:pb-0">
      <header className="fixed inset-x-0 bottom-0 z-50 md:sticky md:top-0 md:bottom-auto">
        <Navbar />
      </header>
      <main className="page-content mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
