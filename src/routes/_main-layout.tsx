import Navbar from '@/components/nav/navbar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_main-layout')({ component: MainLayout })

function MainLayout() {
  return (
    <div className="w-full">
      {/* <ThemeToggle /> */}
      {/* header */}
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      {/* main */}
      <main className="max-w-[1600px] mx-auto">
        <Outlet />
      </main>
      {/* footer */}
    </div>
  )
}
