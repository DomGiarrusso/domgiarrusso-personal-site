import { Copy01Icon, Tick02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Children, isValidElement, useEffect, useState } from 'react'
import type { ComponentProps, ReactNode } from 'react'

type CodeBlockProps = ComponentProps<'pre'> & {
  'data-language'?: string
}

function getTextContent(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node)
  }

  if (!node) return ''

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getTextContent(node.props.children)
  }

  return Children.toArray(node).map(getTextContent).join('')
}

export default function CodeBlock({
  children,
  'data-language': language,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return

    const timeout = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timeout)
  }, [copied])

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(getTextContent(children).trimEnd())
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="not-prose overflow-hidden rounded-lg border border-border bg-background shadow-xs">
      <div className="flex min-h-10 items-center justify-between border-b border-border bg-muted/50 px-3">
        <span className="text-xs font-medium text-muted-foreground">
          {language ?? 'Code'}
        </span>
        <button
          type="button"
          onClick={copyCode}
          className="inline-flex min-h-8 items-center gap-1.5 rounded-md px-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={copied ? 'Code copied' : 'Copy code'}
        >
          <HugeiconsIcon
            icon={copied ? Tick02Icon : Copy01Icon}
            className="size-3.5"
            strokeWidth={2}
          />
          <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6" {...props}>
        {children}
      </pre>
    </div>
  )
}
