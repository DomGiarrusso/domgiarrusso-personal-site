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

export default function NavMenu() {
  return (
    <>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-1">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/#"
              className={cn(navigationMenuTriggerStyle(), '')}
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
              className={cn(navigationMenuTriggerStyle(), '')}
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
            <NavigationMenuTrigger>
              <span className="flex gap-1">
                <HugeiconsIcon
                  icon={DashboardSquare02Icon}
                  strokeWidth={2}
                  className="mb-0.5 size-4.5"
                />
                Gallery
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="justify-center md:flex">
              <ul className="grid gap-3 p-2 md:w-[250px] lg:w-[320px]">
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
            <Dialog>
              <DialogTrigger
                className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')}
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
              <ContactDialog />
            </Dialog>
          </NavigationMenuItem>
          <Separator orientation="vertical" className="mx-3" />
          <NavigationMenuItem>
            <ThemeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <MobileMenu />
    </>
  )
}
