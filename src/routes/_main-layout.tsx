import Navbar from '@/components/nav/navbar'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_main-layout')({ component: MainLayout })

function MainLayout() {
  return (
    <div className="w-full">
      {/* <ThemeToggle /> */}
      {/* header */}
      <header className="sticky top-0">
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
