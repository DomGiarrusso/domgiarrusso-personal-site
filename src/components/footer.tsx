import { Link } from '@tanstack/react-router'
import { ContactIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import ContactDialog from '@/components/ui/contact-dialog'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/tools-icons'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { contactConfig } from '@/content/contact'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/', hash: 'projects' },
  { label: 'Art', to: '/gallery/art' },
  { label: 'Photography', to: '/gallery/photos' },
  { label: 'Videos', to: '/gallery/videos' },
] as const

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
}

export default function Footer() {
  return (
    <Dialog>
      <footer className="bg-background">
        <Separator />
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-7 py-7 md:grid-cols-[1.5fr_1fr] md:py-8">
            <div className="flex max-w-md flex-col items-start gap-3">
              <Link
                to="/"
                className="flex items-center gap-2 rounded-md text-xl font-bold outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <img
                  src="/images/monogram/Monogram_DG_Blue.svg"
                  alt=""
                  className="size-9 shrink-0 dark:hidden"
                />
                <img
                  src="/images/monogram/Monogram_DG_Red.svg"
                  alt=""
                  className="hidden size-9 shrink-0 dark:block"
                />
                <span>Dominic Giarrusso</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Fullstack developer based in Northern Virginia. I build stuff,
                tinker with stuff, and learn stuff.
              </p>
              <DialogTrigger render={<Button size="sm" />}>
                <HugeiconsIcon
                  icon={ContactIcon}
                  strokeWidth={2}
                  data-icon="inline-start"
                />
                Get in touch
              </DialogTrigger>
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-6">
              <nav aria-label="Footer navigation">
                <h2 className="text-sm font-semibold">Explore</h2>
                <ul className="mt-3 grid grid-cols-2 gap-x-5 gap-y-1.5">
                  {footerLinks.map((link) => (
                    <li key={link.label}>
                      <Button
                        variant="link"
                        size="sm"
                        nativeButton={false}
                        className="h-auto justify-start p-0"
                        render={
                          <Link
                            to={link.to}
                            hash={'hash' in link ? link.hash : undefined}
                            role="link"
                          />
                        }
                      >
                        {link.label}
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <h2 className="text-sm font-semibold">Elsewhere</h2>
                <div className="mt-3 flex gap-2">
                  {contactConfig.links.map((link) => {
                    const SocialIcon = socialIcons[link.icon]

                    return (
                      <Button
                        key={link.label}
                        variant="outline"
                        size="icon"
                        nativeButton={false}
                        render={
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Visit Dominic on ${link.label}`}
                          />
                        }
                      >
                        <SocialIcon aria-hidden="true" />
                      </Button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Dominic Giarrusso</p>
            <Link
              to="/projects/$projectname"
              params={{ projectname: 'current-portfolio' }}
              className="underline-offset-4 hover:text-foreground hover:underline"
            >
              Built with ...
            </Link>
          </div>
        </div>
      </footer>
      <ContactDialog />
    </Dialog>
  )
}
