import { AtSign, Circle } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <section className="flex flex-col items-center justify-center mt-24">
      <div className="flex gap-12 justify-between items-center">
        <HugeiconsIcon icon={Circle} strokeWidth={2} className="size-70" />
        <h1 className="text-8xl font-bold max-w-min">Dominic Giarrusso</h1>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center w-full">
        <div className="w-full p-px bg-linear-to-r from-transparent via-foreground/10 to-transparent my-8 max-w-4xl" />
        <div className="text-5xl font-bold text-center">
          <h2>
            <span className="text-muted-foreground">Hello there,</span> I'm
            Dominic,
          </h2>
          <h2 className="inline-flex gap-2 justify-between items-center">
            <span className="text-muted-foreground">a</span> Fullstack Developer
            <span className="inline-flex items-center">
              <HugeiconsIcon
                icon={AtSign}
                strokeWidth={2.5}
                className="items-baseline size-14"
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
