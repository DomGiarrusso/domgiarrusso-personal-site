import type { ReactNode } from 'react'

type CalloutProps = {
  children: ReactNode
  title?: string
}

export default function Callout({ children, title }: CalloutProps) {
  return (
    <aside className="not-prose my-6 rounded-lg border border-primary-alt/30 bg-primary-alt/5 px-5 py-4">
      {title && <p className="font-semibold text-foreground">{title}</p>}
      <div className="mt-1 text-sm leading-6 text-muted-foreground first:mt-0 [&_p+p]:mt-2">
        {children}
      </div>
    </aside>
  )
}
