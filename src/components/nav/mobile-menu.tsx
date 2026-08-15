import { useState } from 'react'

import {
  ContactIcon,
  DashboardSquare02Icon,
  Home07Icon,
  Menu01Icon,
  SourceCodeSquareIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import ContactDialog from '@/components/ui/contact-dialog'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="md:hidden">
      <Drawer
        open={isMobileMenuOpen}
        onOpenChange={setIsMobileMenuOpen}
        direction="bottom"
      >
        <DrawerTrigger render={<Button variant="outline" size="sm" />}>
          <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} className="size-4" />
          Menu
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="border-b pb-4 text-left">
            <DrawerTitle>Navigation</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-2 p-4">
            <Button
              variant="outline"
              className="w-full"
              render={<a href="/#" onClick={handleMobileLinkClick} />}
            >
              <HugeiconsIcon
                icon={Home07Icon}
                strokeWidth={2}
                className="size-4"
              />
              Home
            </Button>
            <Button
              variant="outline"
              className="w-full"
              render={<a href="/#projects" onClick={handleMobileLinkClick} />}
            >
              <HugeiconsIcon
                icon={SourceCodeSquareIcon}
                strokeWidth={2}
                className="size-4"
              />
              Projects
            </Button>
            <Button
              variant="outline"
              className="w-full"
              render={<a href="/gallery" onClick={handleMobileLinkClick} />}
            >
              <HugeiconsIcon
                icon={DashboardSquare02Icon}
                strokeWidth={2}
                className="size-4"
              />
              Gallery
            </Button>
            <Separator className="my-2" />
            <Dialog>
              <DialogTrigger
                render={<Button variant="ghost" className="justify-center" />}
              >
                <HugeiconsIcon
                  icon={ContactIcon}
                  strokeWidth={2}
                  className="size-4"
                />
                Contact
              </DialogTrigger>
              <ContactDialog />
            </Dialog>
            <div className="flex items-center justify-between rounded-md border px-3 py-2">
              <span className="text-sm font-medium">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
