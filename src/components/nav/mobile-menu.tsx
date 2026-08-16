import { useState } from 'react'

import {
  ArrowDown01Icon,
  Camera01Icon,
  CanvasIcon,
  ContactIcon,
  DashboardSquare02Icon,
  Home07Icon,
  Menu01Icon,
  SourceCodeSquareIcon,
  Video01Icon,
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
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false)
    setIsGalleryOpen(false)
  }
  const handleMobileMenuOpenChange = (isOpen: boolean) => {
    setIsMobileMenuOpen(isOpen)
    if (!isOpen) setIsGalleryOpen(false)
  }

  return (
    <div className="md:hidden">
      <Drawer
        open={isMobileMenuOpen}
        onOpenChange={handleMobileMenuOpenChange}
        direction="bottom"
      >
        <DrawerTrigger render={<Button variant="outline" size="sm" />}>
          <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} className="size-4" />
          Menu
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="flex-row items-center justify-between border-b pb-4 text-left">
            <DrawerTitle>Dominic Giarrusso</DrawerTitle>
            <ThemeToggle />
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
            <div>
              <div className="flex">
                <Button
                  variant="outline"
                  className="flex-1 rounded-r-none"
                  render={<a href="/gallery" onClick={handleMobileLinkClick} />}
                >
                  <HugeiconsIcon
                    icon={DashboardSquare02Icon}
                    strokeWidth={2}
                    className="size-4"
                  />
                  Gallery
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="shrink-0 rounded-l-none border-l-0"
                  aria-expanded={isGalleryOpen}
                  aria-controls="mobile-gallery-links"
                  aria-label="Toggle gallery links"
                  onClick={() => setIsGalleryOpen((isOpen) => !isOpen)}
                >
                  <HugeiconsIcon
                    icon={ArrowDown01Icon}
                    strokeWidth={2}
                    className={`size-4 transition-transform ${isGalleryOpen ? 'rotate-180' : ''}`}
                  />
                </Button>
              </div>
              <div
                id="mobile-gallery-links"
                aria-hidden={!isGalleryOpen}
                inert={!isGalleryOpen}
                className={`grid transition-[grid-template-rows,opacity,margin] duration-200 ease-out ${
                  isGalleryOpen
                    ? 'mt-2 grid-rows-[1fr] opacity-100'
                    : 'pointer-events-none grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="grid gap-1.5 rounded-xl border bg-muted/40 p-1.5">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full justify-center px-1"
                      render={
                        <a
                          href="/gallery/art"
                          onClick={handleMobileLinkClick}
                        />
                      }
                    >
                      <HugeiconsIcon
                        icon={CanvasIcon}
                        strokeWidth={2}
                        className="size-4"
                      />
                      Art
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full justify-center px-1"
                      render={
                        <a
                          href="/gallery/photos"
                          onClick={handleMobileLinkClick}
                        />
                      }
                    >
                      <HugeiconsIcon
                        icon={Camera01Icon}
                        strokeWidth={2}
                        className="size-4"
                      />
                      Photography
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="w-full justify-center px-1"
                      render={
                        <a
                          href="/gallery/videos"
                          onClick={handleMobileLinkClick}
                        />
                      }
                    >
                      <HugeiconsIcon
                        icon={Video01Icon}
                        strokeWidth={2}
                        className="size-4"
                      />
                      Videos
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="my-2" />
            <Dialog>
              <DialogTrigger
                render={<Button variant="outline" className="w-full" />}
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
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
