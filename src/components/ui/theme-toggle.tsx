import { useEffect, useState } from 'react'
import { ComputerIcon, MoonIcon, SunIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { useHaptics } from '@/components/haptics-provider'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/components/theme-provider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { trigger } = useHaptics()
  const [mounted, setMounted] = useState(false)

  const handleThemeSelect = () => {
    void trigger('selection')
  }

  // Prevent hydration mismatch by only rendering icons after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="icon" />}>
        <HugeiconsIcon
          icon={ComputerIcon}
          strokeWidth={2}
          className={` h-[1.2rem] w-[1.2rem] transition-[transform,opacity] ${
            !mounted || theme === 'system'
              ? 'scale-100 rotate-0 opacity-100'
              : 'scale-0 rotate-90 opacity-0'
          }`}
          data-icon-motion="theme-system"
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
          data-icon-motion="theme-sun"
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
          data-icon-motion="theme-moon"
          suppressHydrationWarning
        />
        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem
            value="system"
            data-haptic-managed
            onClick={handleThemeSelect}
          >
            <HugeiconsIcon
              icon={ComputerIcon}
              strokeWidth={2}
              data-icon-motion="theme-system"
            />
            System
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="light"
            data-haptic-managed
            onClick={handleThemeSelect}
          >
            <HugeiconsIcon
              icon={SunIcon}
              strokeWidth={2}
              data-icon-motion="theme-sun"
            />
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="dark"
            data-haptic-managed
            onClick={handleThemeSelect}
          >
            <HugeiconsIcon
              icon={MoonIcon}
              strokeWidth={2}
              data-icon-motion="theme-moon"
            />
            <span className="flex flex-col items-start leading-tight">
              <span>Dark</span>
              <span className="text-muted-foreground text-xs">Recommended</span>
            </span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
