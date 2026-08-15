import { AtSign, Circle } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export default function Hero() {
  return (
    <section className="mt-16 flex flex-col items-center justify-center sm:mt-20 md:mt-24">
      <div className="flex w-full max-w-5xl flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:gap-10 md:text-left">
        <HugeiconsIcon
          icon={Circle}
          strokeWidth={2}
          className="size-40 shrink-0 sm:size-52 lg:size-64"
        />
        <h1 className="max-w-3xl text-5xl leading-none font-bold sm:text-6xl lg:text-7xl xl:text-8xl">
          Dominic Giarrusso
        </h1>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="my-6 w-full max-w-4xl bg-linear-to-r from-transparent via-foreground/10 to-transparent p-px sm:my-8" />
        <div className="max-w-5xl text-center text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">
          <h2>
            <span className="text-muted-foreground">Hello there,</span> I'm
            Dominic,
          </h2>
          <h2 className="mt-2 flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
            <span className="text-muted-foreground">a</span> Fullstack Developer
            <span className="inline-flex items-center gap-1 whitespace-nowrap">
              <HugeiconsIcon
                icon={AtSign}
                strokeWidth={2.5}
                className="size-8 sm:size-10 lg:size-12"
              />
              CACI
            </span>
          </h2>
          <h2>
            <span className="text-muted-foreground"> based in </span>
            Northern Virginia
            <span className="text-muted-foreground">.</span>
          </h2>
        </div>
      </div>
    </section>
  )
}
