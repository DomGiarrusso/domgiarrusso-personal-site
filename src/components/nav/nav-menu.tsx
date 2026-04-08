import { HugeiconsIcon } from '@hugeicons/react'
import {
  ContactIcon,
  DashboardSquare02Icon,
  Home07Icon,
  SourceCodeSquareIcon,
} from '@hugeicons/core-free-icons'
import NavListItem from './nav-list-item'
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
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import ContactDialog from '@/components/ui/contact-dialog'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function NavMenu() {
  return (
    <NavigationMenu>
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
          <NavigationMenuTrigger className="">
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
              <NavListItem href="/gallery/art" title="Art">
                Testing out some art
              </NavListItem>
              <NavListItem href="/gallery/photos" title="Photography">
                Testing out some photos
              </NavListItem>
              <NavListItem href="/gallery/videos" title="Videos">
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
  )
}
