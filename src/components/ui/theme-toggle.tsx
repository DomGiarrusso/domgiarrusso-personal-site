import { ComputerIcon, MoonIcon, SunIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from '@/components/ui/dropdown-menu'
import { useTheme } from '@/components/theme-provider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" size="icon" className="relative">
          <HugeiconsIcon
            icon={ComputerIcon}
            strokeWidth={2}
            className={` h-[1.2rem] w-[1.2rem] transition-all ${
              theme === 'system'
                ? 'scale-100 rotate-0 opacity-100'
                : 'scale-0 rotate-90 opacity-0'
            }`}
          />
          <HugeiconsIcon
            icon={SunIcon}
            strokeWidth={2}
            className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
              theme === 'light'
                ? 'scale-100 rotate-0 opacity-100'
                : 'scale-0 -rotate-90 opacity-0'
            }`}
          />
          {/* Overlay icons - absolutely positioned */}
          <HugeiconsIcon
            icon={MoonIcon}
            strokeWidth={2}
            className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
              theme === 'dark'
                ? 'scale-100 rotate-0 opacity-100'
                : 'scale-0 rotate-90 opacity-0'
            }`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
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
