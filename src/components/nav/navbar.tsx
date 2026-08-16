import { useEffect, useState } from 'react'

import NavMenu from '@/components/nav/nav-menu'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  const navSurfaceClass = isScrolled
    ? 'md:bg-background/70 md:backdrop-blur-md md:shadow-md md:ring-foreground/10 dark:md:bg-background/80'
    : 'md:bg-transparent md:border-transparent md:shadow-none md:ring-transparent md:backdrop-blur-none'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`flex h-16 justify-center border-t bg-background/80 text-lg ring ring-foreground/10 backdrop-blur-md transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 md:border-t-0 md:border-b dark:bg-background/90 ${navSurfaceClass}`}
    >
      <div className="flex w-full max-w-6xl items-center justify-between px-4 py-3 text-md sm:px-6 lg:px-8">
        <div className="flex w-full items-center gap-3">
          <a
            href="/"
            className="flex items-center gap-2 text-base font-bold sm:text-lg md:text-2xl"
          >
            <img
              src="/images/monogram/Monogram_DG_Blue.svg"
              alt=""
              className="size-9 shrink-0 dark:hidden"
            />
            <img
              src="/images/monogram/Monogram_DG_Red.svg"
              alt=""
              className="hidden size-9 shrink-0 dark:block"
            />
            <span>Dominic Giarrusso</span>
          </a>
        </div>
        <div className="flex w-full flex-row-reverse items-center gap-3">
          <NavMenu isScrolled={isScrolled} />
        </div>
      </div>
    </nav>
  )
}
