import { NavigationMenuLink } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}

export default function NavListItem({
  className,
  title,
  children,
  href,
  ...props
}: Props) {
  return (
    <li>
      <NavigationMenuLink
        href={href}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          className,
        )}
        {...props}
      >
        <div className="text-medium font-semibold leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  )
}
