import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import mdx from '@mdx-js/rollup'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'

const rehypePrettyCodeOptions = {
  theme: {
    dark: 'github-dark-default',
    light: 'github-light-default',
  },
  keepBackground: false,
  defaultLang: 'plaintext',
  bypassInlineCode: true,
}

const config = defineConfig({
  plugins: [
    devtools(),
    tanstackStart(),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tailwindcss(),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
    }),
    viteReact(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
})

export default config
