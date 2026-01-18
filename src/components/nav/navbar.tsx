import { useCallback, useEffect, useState } from 'react'
import NavMenu from '@/components/nav/nav-menu'

type Props = {}

export default function Navbar({}: Props) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [prevScrollPosition, setPrevScrollPosition] = useState(0)

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY
    const isScrollingDown = scrollPosition > prevScrollPosition
    const isScrollingUp = scrollPosition < prevScrollPosition

    if (isScrollingDown && scrollPosition > 50) {
      setIsScrolled(true)
      setIsHidden(true)
    } else if (isScrollingUp && isHidden) {
      setIsHidden(false)
    } else if (isScrollingUp && scrollPosition < 50) {
      setIsScrolled(false)
    }
    setPrevScrollPosition(scrollPosition)
  }, [prevScrollPosition, isHidden])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <nav
      className={`w-full flex justify-center bg-background border-b border-b-foreground/10 h-16 transition-all z-50 text-lg  ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-background border-b-transparent'}`}
    >
      <div className="w-full max-w-[1600px]  flex justify-between py-5 text-md">
        <div className="flex gap-3 w-full items-center">
          {/*Add Image here*/}
          <a href="/" className="font-bold text-lg md:text-2xl">
            Dominic Giarrusso
          </a>
        </div>
        <div className="flex flex-row-reverse gap-3 w-full items-center">
          <NavMenu />
        </div>
      </div>
    </nav>
  )
}
