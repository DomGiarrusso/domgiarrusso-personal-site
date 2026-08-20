import Callout from './callout'
import CodeBlock from './code-block'
import type { ComponentProps } from 'react'
import type { MDXComponents, MDXContent } from 'mdx/types'

type ArticleContentProps = {
  content: MDXContent
}

function ArticleLink({ href, ...props }: ComponentProps<'a'>) {
  const external = href?.startsWith('http://') || href?.startsWith('https://')

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      {...props}
    />
  )
}

const components: MDXComponents = {
  a: ArticleLink,
  img: (props) => (
    <img
      className="rounded-lg border border-border shadow-xs"
      loading="lazy"
      decoding="async"
      {...props}
    />
  ),
  pre: CodeBlock,
  Callout,
}

export default function ArticleContent({
  content: Content,
}: ArticleContentProps) {
  return (
    <article className="article-content prose prose-sm prose-slate dark:prose-invert max-w-none text-[0.8125rem] sm:prose-base sm:text-base">
      <Content components={components} />
    </article>
  )
}
