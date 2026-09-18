export type ContactLink = {
  label: string
  href: string
  icon: 'github' | 'linkedin'
}

export const contactConfig = {
  formEndpoint: 'https://formspree.io/f/xkndgzbb',
  turnstileSiteKey: import.meta.env.VITE_TURNSTILE_SITE_KEY ?? '',
  links: [
    {
      label: 'GitHub',
      href: 'https://github.com/DomGiarrusso',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dominic-giarrusso/',
      icon: 'linkedin',
    },
  ] satisfies Array<ContactLink>,
}
