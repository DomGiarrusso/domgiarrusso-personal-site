import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { HugeiconsIcon } from '@hugeicons/react'
import { cn } from '@/lib/utils'
import {
  ContactIcon,
  DashboardSquare02Icon,
  Home,
  Home07Icon,
  HouseIcon,
  Navigation,
  SourceCodeSquareIcon,
} from '@hugeicons/core-free-icons'
import NavListItem from './nav-list-item'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import ContactDialog from '@/components/ui/contact-dialog'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/ui/theme-toggle'

type Props = {}

export default function NavMenu({}: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
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
          <NavigationMenuContent className="md:flex justify-center">
            <ul className="grid gap-3 p-2 md:w-[250px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink
                  href="/gallery"
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                >
                  <h4 className="mb-2 text-lg font-bold">Gallery</h4>
                  <p className="text-sm leading-tight text-muted-foreground">
                    The Gallery is a collection of various works outside of
                    professional and programming work.
                  </p>
                </NavigationMenuLink>
              </li>
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
