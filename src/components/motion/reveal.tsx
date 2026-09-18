import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export type RevealOrigin =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'center'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'

type RevealProps = ComponentProps<'div'> & {
  delay?: number
  origin?: RevealOrigin
}

type RevealStyle = CSSProperties & {
  '--reveal-delay'?: string
}

export function Reveal({
  children,
  className,
  delay = 0,
  origin = 'bottom',
  style,
  ...props
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setIsVisible(true)
        observer.disconnect()
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const revealStyle: RevealStyle = {
    ...style,
    '--reveal-delay': `${delay}ms`,
  }

  return (
    <div
      ref={elementRef}
      className={cn('scroll-reveal', className)}
      data-origin={origin}
      data-visible={isVisible}
      style={revealStyle}
      {...props}
    >
      {children}
    </div>
  )
}
