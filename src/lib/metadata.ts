const siteUrl = 'https://dominicgiarrusso.com'
const siteName = 'Dominic Giarrusso'

export const defaultPageDescription =
  'Portfolio of Dominic Giarrusso, a fullstack developer based in Northern Virginia.'

const defaultSocialImagePath =
  '/images/projects/current-portfolio/Personal_Site_Thumbnail.png'

type PageMetadataOptions = {
  title?: string
  description: string
  path: string
  imagePath?: string
  imageAlt?: string
  robots?: string
}

function getAbsoluteUrl(path: string) {
  return new URL(path, siteUrl).toString()
}

export function createPageMetadata({
  title,
  description,
  path,
  imagePath = defaultSocialImagePath,
  imageAlt = 'Dominic Giarrusso portfolio wordmark',
  robots,
}: PageMetadataOptions) {
  const pageTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} | Fullstack Developer`
  const canonicalUrl = getAbsoluteUrl(path)
  const imageUrl = getAbsoluteUrl(imagePath)

  return {
    meta: [
      { title: pageTitle },
      { name: 'description', content: description },
      ...(robots ? [{ name: 'robots', content: robots }] : []),
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: siteName },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:alt', content: imageAlt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:image:alt', content: imageAlt },
    ],
    links: [{ rel: 'canonical', href: canonicalUrl }],
  }
}
