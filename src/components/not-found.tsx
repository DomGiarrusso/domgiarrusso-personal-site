import { Link } from '@tanstack/react-router'

import { buttonVariants } from '@/components/ui/button'

const NOT_FOUND_GIF =
  'https://media.tenor.com/JIKCJXuV8ukAAAAM/oh-no-planet-of-the-apes.gif'

export function NotFound() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center px-4 py-12">
      <section className="flex w-full max-w-lg flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Uh Oh, Not Found
        </h1>

        <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          <img
            src={NOT_FOUND_GIF}
            alt="A worried ape saying oh no"
            className="aspect-square size-64 object-cover sm:size-72"
          />
        </div>

        <Link to="/" className={buttonVariants({ size: 'lg' })}>
          Back to home
        </Link>
      </section>
    </main>
  )
}
