import { AtSign } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export default function Hero() {
  return (
    <section className="mt-16 flex flex-col items-center justify-center sm:mt-20 md:mt-24">
      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-6 text-center md:flex-row md:gap-10 md:text-left">
        <div className="size-[12.5rem] shrink-0 overflow-hidden rounded-full border-2 border-border sm:size-[16.25rem] lg:size-80">
          <img
            src="/images/profile.webp"
            alt="Dominic Giarrusso"
            width={256}
            height={256}
            className="size-full scale-110 object-cover"
          />
        </div>
        <h1 className="max-w-3xl text-5xl leading-none font-bold sm:text-6xl md:w-min lg:text-7xl xl:text-8xl">
          Dominic Giarrusso
        </h1>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="my-6 w-full max-w-4xl bg-linear-to-r from-transparent via-foreground/10 to-transparent p-px sm:my-8" />
        <div className="max-w-5xl text-center text-2xl font-bold text-balance sm:text-4xl md:flex md:flex-col md:gap-2 lg:text-5xl">
          <h2>
            <span className="text-muted-foreground">Hello there,</span> I'm
            Dominic,
          </h2>
          <h2 className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span className="inline-flex items-center gap-2">
              <span className="text-muted-foreground">a</span>
              Fullstack Developer
            </span>
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
