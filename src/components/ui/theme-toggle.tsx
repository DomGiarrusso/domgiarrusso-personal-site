import { useEffect, useState } from 'react'
import { ComputerIcon, MoonIcon, SunIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/components/theme-provider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering icons after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="outline" size="icon" className="relative" />}
      >
        <HugeiconsIcon
          icon={ComputerIcon}
          strokeWidth={2}
          className={` h-[1.2rem] w-[1.2rem] transition-[transform,opacity] ${
            !mounted || theme === 'system'
              ? 'scale-100 rotate-0 opacity-100'
              : 'scale-0 rotate-90 opacity-0'
          }`}
          suppressHydrationWarning
        />
        <HugeiconsIcon
          icon={SunIcon}
          strokeWidth={2}
          className={`absolute h-[1.2rem] w-[1.2rem] transition-[transform,opacity] ${
            mounted && theme === 'light'
              ? 'scale-100 rotate-0 opacity-100'
              : 'scale-0 -rotate-90 opacity-0'
          }`}
          suppressHydrationWarning
        />
        {/* Overlay icons - absolutely positioned */}
        <HugeiconsIcon
          icon={MoonIcon}
          strokeWidth={2}
          className={`absolute h-[1.2rem] w-[1.2rem] transition-[transform,opacity] ${
            mounted && theme === 'dark'
              ? 'scale-100 rotate-0 opacity-100'
              : 'scale-0 rotate-90 opacity-0'
          }`}
          suppressHydrationWarning
        />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="system">
            <HugeiconsIcon icon={ComputerIcon} strokeWidth={2} />
            System
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="light">
            <HugeiconsIcon icon={SunIcon} strokeWidth={2} />
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            <HugeiconsIcon icon={MoonIcon} strokeWidth={2} />
            Dark
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
