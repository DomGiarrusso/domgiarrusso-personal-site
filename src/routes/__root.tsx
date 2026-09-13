import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

import { HapticsProvider } from '@/components/haptics-provider'
import { NotFound } from '@/components/not-found'
import { ThemeProvider } from '@/components/theme-provider'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Dominic Giarrusso',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
    scripts: [
      {
        children: `
          (function() {
            try {
              const storageKey = 'vite-ui-theme';
              const stored = localStorage.getItem(storageKey);
              const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const theme = stored === 'system' || !stored ? systemTheme : stored;
              document.documentElement.classList.remove('light', 'dark');
              document.documentElement.classList.add(theme);
            } catch (e) {}
          })();
        `,
      },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="scroll-smooth scroll-pt-24"
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen flex flex-col items-center">
        <HapticsProvider>
          <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            {children}
          </ThemeProvider>
        </HapticsProvider>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
