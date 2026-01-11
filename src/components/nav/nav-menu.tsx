import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { HugeiconsIcon } from '@hugeicons/react'
import { cn } from '@/lib/utils'
import {
  DashboardSquare02Icon,
  Home,
  Home07Icon,
  HouseIcon,
  Navigation,
  SourceCodeSquareIcon,
} from '@hugeicons/core-free-icons'

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
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
