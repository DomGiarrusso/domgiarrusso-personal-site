import { useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Camera01Icon,
  CanvasIcon,
  ContactIcon,
  DashboardSquare02Icon,
  Home07Icon,
  SourceCodeSquareIcon,
  Video01Icon,
} from '@hugeicons/core-free-icons'

import NavListItem from './nav-list-item'
import MobileMenu from './mobile-menu'
import ContactDialog from '@/components/ui/contact-dialog'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

type NavMenuProps = {
  isScrolled: boolean
}

export default function NavMenu({ isScrolled }: NavMenuProps) {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const navItemOutlineClass = isScrolled
    ? 'border-border bg-background hover:bg-muted focus:bg-muted data-[active=true]:bg-muted data-open:bg-muted data-popup-open:bg-muted aria-expanded:bg-muted dark:border-input'
    : 'border-transparent'

  return (
    <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/#"
              className={cn(
                navigationMenuTriggerStyle(),
                'border',
                navItemOutlineClass,
              )}
            >
              <HugeiconsIcon
                icon={Home07Icon}
                strokeWidth={2}
                className="mb-0.5 size-4.5"
              />
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/#projects"
              className={cn(
                navigationMenuTriggerStyle(),
                'border',
                navItemOutlineClass,
              )}
            >
              <HugeiconsIcon
                icon={SourceCodeSquareIcon}
                strokeWidth={2}
                className="mb-0.5 size-4.5"
              />
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn('border', navItemOutlineClass)}
            >
              <span className="flex gap-1">
                <HugeiconsIcon
                  icon={DashboardSquare02Icon}
                  strokeWidth={2}
                  className="mb-0.5 size-4.5"
                />
                Gallery
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="justify-center lg:flex">
              <ul className="grid gap-3 p-2 lg:w-[250px] xl:w-[320px]">
                <NavListItem
                  href="/gallery/art"
                  title="Art"
                  icon={
                    <HugeiconsIcon
                      icon={CanvasIcon}
                      strokeWidth={2}
                      className="size-4"
                    />
                  }
                >
                  Testing out some art
                </NavListItem>
                <NavListItem
                  href="/gallery/photos"
                  title="Photography"
                  icon={
                    <HugeiconsIcon
                      icon={Camera01Icon}
                      strokeWidth={2}
                      className="size-4"
                    />
                  }
                >
                  Testing out some photos
                </NavListItem>
                <NavListItem
                  href="/gallery/videos"
                  title="Videos"
                  icon={
                    <HugeiconsIcon
                      icon={Video01Icon}
                      strokeWidth={2}
                      className="size-4"
                    />
                  }
                >
                  Testing out some videos
                </NavListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <DialogTrigger
              className={cn(
                navigationMenuTriggerStyle(),
                'cursor-pointer border',
                navItemOutlineClass,
              )}
            >
              <span className="flex gap-1">
                <HugeiconsIcon
                  icon={ContactIcon}
                  strokeWidth={2}
                  className="mb-0.5 size-4.5"
                />
                Contact
              </span>
            </DialogTrigger>
          </NavigationMenuItem>
          <Separator orientation="vertical" className="mx-3 bg-primary-alt" />
          <NavigationMenuItem>
            <ThemeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <MobileMenu onContactOpen={() => setIsContactOpen(true)} />
      <ContactDialog />
    </Dialog>
  )
}
