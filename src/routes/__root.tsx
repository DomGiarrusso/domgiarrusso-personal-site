import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '@/styles.css?url'

import { HapticsProvider } from '@/components/haptics-provider'
import { NotFound } from '@/components/not-found'
import { ThemeProvider } from '@/components/theme-provider'

const siteUrl = 'https://dominicgiarrusso.com'
const siteTitle = 'Dominic Giarrusso'
const siteDescription =
  'The personal portfolio of Dominic Giarrusso, a software developer and game designer.'
const socialImageUrl = `${siteUrl}/images/projects/current-portfolio/Personal_Site_Thumbnail.png`

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
        title: siteTitle,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: siteTitle,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:image',
        content: socialImageUrl,
      },
      {
        property: 'og:image:type',
        content: 'image/png',
      },
      {
        property: 'og:image:width',
        content: '1920',
      },
      {
        property: 'og:image:height',
        content: '1080',
      },
      {
        property: 'og:image:alt',
        content: 'Dominic Giarrusso portfolio wordmark',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: siteTitle,
      },
      {
        name: 'twitter:description',
        content: siteDescription,
      },
      {
        name: 'twitter:image',
        content: socialImageUrl,
      },
      {
        name: 'twitter:image:alt',
        content: 'Dominic Giarrusso portfolio wordmark',
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
        {/*<TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />*/}
        <Scripts />
      </body>
    </html>
  )
}
