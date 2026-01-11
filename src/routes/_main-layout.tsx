import Navbar from '@/components/nav/navbar'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_main-layout')({ component: MainLayout })

function MainLayout() {
  return (
    <div className="w-full">
      {/* <ThemeToggle /> */}
      {/* header */}
      <header>
        <Navbar />
      </header>
      {/* main */}
      <Outlet />
      {/* footer */}
    </div>
  )
}
