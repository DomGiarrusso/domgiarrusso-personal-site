'use client'

import { useEffect, useEffectEvent, useId, useRef, useState } from 'react'
import {
  CheckmarkCircle02Icon,
  Mail01Icon,
  Message01Icon,
  SentIcon,
  User02Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import type { FormEvent } from 'react'
import type { ContactLink } from '@/content/contact'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from '@/components/ui/input-group'
import { GitHubIcon, LinkedInIcon } from '@/components/icons/tools-icons'
import { contactConfig } from '@/content/contact'

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string
      size: 'flexible'
      appearance: 'interaction-only'
      callback: (token: string) => void
      'expired-callback': () => void
      'error-callback': (errorCode: string) => boolean
    },
  ) => string
  remove: (widgetId: string) => void
}

type FormspreeError = {
  field?: string
  message?: string
}

type FormspreeErrorResponse = {
  errors?: Array<FormspreeError>
}

type ContactField = 'name' | 'email' | 'message'
type ContactFieldErrors = Partial<Record<ContactField, string>>

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

const TURNSTILE_SCRIPT_ID = 'cloudflare-turnstile-script'
const CONTACT_FIELDS: Array<ContactField> = ['name', 'email', 'message']
let turnstileLoader: Promise<TurnstileApi> | undefined

function loadTurnstile() {
  if (window.turnstile) return Promise.resolve(window.turnstile)
  if (turnstileLoader) return turnstileLoader

  turnstileLoader = new Promise<TurnstileApi>((resolve, reject) => {
    const handleLoad = () => {
      if (window.turnstile) {
        resolve(window.turnstile)
        return
      }

      reject(new Error('Turnstile loaded without exposing its API.'))
    }

    const existingScript = document.getElementById(TURNSTILE_SCRIPT_ID)
    if (existingScript) {
      existingScript.addEventListener('load', handleLoad, { once: true })
      existingScript.addEventListener(
        'error',
        () => reject(new Error('Turnstile failed to load.')),
        { once: true },
      )
      return
    }

    const script = document.createElement('script')
    script.id = TURNSTILE_SCRIPT_ID
    script.src =
      'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.addEventListener('load', handleLoad, { once: true })
    script.addEventListener(
      'error',
      () => reject(new Error('Turnstile failed to load.')),
      { once: true },
    )
    document.head.append(script)
  }).catch((error: unknown) => {
    turnstileLoader = undefined
    throw error
  })

  return turnstileLoader
}

export function TurnstileWidget({
  siteKey,
  resetKey,
  onTokenChange,
  onError,
}: {
  siteKey: string
  resetKey: number
  onTokenChange: (token: string | null) => void
  onError: (message: string | null) => void
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const onTokenChangeEvent = useEffectEvent(onTokenChange)
  const onErrorEvent = useEffectEvent(onError)

  useEffect(() => {
    let cancelled = false
    let widgetId: string | undefined
    let api: TurnstileApi | undefined

    onTokenChangeEvent(null)
    onErrorEvent(null)

    void loadTurnstile()
      .then((turnstile) => {
        if (cancelled || !containerRef.current) return

        api = turnstile
        widgetId = turnstile.render(containerRef.current, {
          sitekey: siteKey,
          size: 'flexible',
          appearance: 'interaction-only',
          callback: (token) => {
            onErrorEvent(null)
            onTokenChangeEvent(token)
          },
          'expired-callback': () => onTokenChangeEvent(null),
          'error-callback': () => {
            onTokenChangeEvent(null)
            onErrorEvent('Verification failed to load. Please try again.')
            return true
          },
        })
      })
      .catch(() => {
        if (!cancelled) {
          onErrorEvent('Verification failed to load. Please try again.')
        }
      })

    return () => {
      cancelled = true
      if (api && widgetId) api.remove(widgetId)
    }
  }, [siteKey, resetKey])

  return <div ref={containerRef} className="min-h-0 max-w-full" />
}

function ContactLinkIcon({ icon }: Pick<ContactLink, 'icon'>) {
  if (icon === 'github') return <GitHubIcon data-icon="inline-start" />

  return <LinkedInIcon data-icon="inline-start" />
}

async function readFormspreeErrors(response: Response) {
  const fieldErrors: ContactFieldErrors = {}
  let formError = 'Your message could not be sent. Please try again.'

  try {
    const result = (await response.json()) as FormspreeErrorResponse
    const errors = result.errors ?? []

    for (const error of errors) {
      if (
        error.field &&
        CONTACT_FIELDS.includes(error.field as ContactField) &&
        error.message
      ) {
        fieldErrors[error.field as ContactField] = error.message
      }
    }

    const generalError = errors.find((error) => !error.field)?.message
    if (generalError) formError = generalError
  } catch {
    // Keep a stable user-facing message when the provider has no JSON body.
  }

  return { fieldErrors, formError }
}

export default function ContactDialog() {
  const idPrefix = useId()
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>(
    'idle',
  )
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileError, setTurnstileError] = useState<string | null>(null)
  const [turnstileResetKey, setTurnstileResetKey] = useState(0)
  const configuredLinks = contactConfig.links.filter((link) => link.href)
  const usesTurnstile = Boolean(contactConfig.turnstileSiteKey)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'submitting') return

    if (usesTurnstile && !turnstileToken) {
      setTurnstileError('Please wait for verification to complete.')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    if (turnstileToken) {
      formData.set('cf-turnstile-response', turnstileToken)
    }

    setStatus('submitting')
    setFieldErrors({})
    setFormError(null)

    try {
      const response = await fetch(contactConfig.formEndpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        const errors = await readFormspreeErrors(response)
        setFieldErrors(errors.fieldErrors)
        setFormError(errors.formError)
        setStatus('idle')

        if (usesTurnstile) {
          setTurnstileToken(null)
          setTurnstileResetKey((key) => key + 1)
        }
        return
      }

      form.reset()
      setStatus('success')
    } catch {
      setFormError(
        'Your message could not be sent. Check your connection and try again.',
      )
      setStatus('idle')

      if (usesTurnstile) {
        setTurnstileToken(null)
        setTurnstileResetKey((key) => key + 1)
      }
    }
  }

  const resetForm = () => {
    setStatus('idle')
    setFieldErrors({})
    setFormError(null)
    setTurnstileToken(null)
    setTurnstileError(null)
    setTurnstileResetKey((key) => key + 1)
  }

  return (
    <DialogContent className="max-h-[calc(100dvh-2rem)] gap-0 overflow-y-auto p-0 sm:max-w-3xl">
      <div className="grid md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <aside className="relative flex flex-col overflow-hidden border-b border-primary-alt bg-card p-6 md:min-h-144 md:border-r md:border-b-0 md:p-8">
          <div className="flex flex-1 flex-col">
            <div className="text-center">
              <div className="relative mx-auto w-fit">
                <div className="relative grid size-16 place-items-center overflow-hidden rounded-2xl border bg-[radial-gradient(ellipse_100%_120%_at_50%_-30%,var(--background)_0%,var(--background)_65%,color-mix(in_oklab,var(--primary)_12%,var(--background))_90%,color-mix(in_oklab,var(--primary)_40%,var(--background))_120%,var(--primary)_160%)] shadow-sm md:size-20">
                  <img
                    src="/images/monogram/Monogram_DG_Blue.svg"
                    alt=""
                    className="relative z-10 size-11 dark:hidden md:size-14"
                  />
                  <img
                    src="/images/monogram/Monogram_DG_Red.svg"
                    alt=""
                    className="relative z-10 hidden size-11 dark:block md:size-14"
                  />
                </div>
              </div>
              <div className="mt-6 md:mt-8">
                <p className="text-xl leading-tight font-bold md:text-2xl">
                  Dominic Giarrusso
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Fullstack Developer
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground md:mt-8">
              Feel free to reach out. I’d be glad to hear from you.
            </p>

            {configuredLinks.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2 md:mt-auto md:grid">
                {configuredLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    nativeButton={false}
                    className="flex-1 justify-center md:flex-none"
                    render={
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        role="link"
                      />
                    }
                  >
                    <ContactLinkIcon icon={link.icon} />
                    {link.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </aside>

        <section className="min-w-0 p-6 md:p-8">
          <DialogHeader className="pr-8 text-left">
            <DialogTitle className="text-2xl font-bold">
              Send a message
            </DialogTitle>
            <DialogDescription>
              Fill out the form and I’ll respond as soon as I can.
            </DialogDescription>
          </DialogHeader>

          {status === 'success' ? (
            <div
              role="status"
              aria-live="polite"
              className="mt-10 flex min-h-80 flex-col items-center justify-center text-center"
            >
              <span className="grid size-14 place-items-center rounded-full bg-primary-alt/10 text-primary-alt">
                <HugeiconsIcon
                  icon={CheckmarkCircle02Icon}
                  strokeWidth={2}
                  className="size-7"
                />
              </span>
              <h3 className="mt-5 text-xl font-bold">Message sent</h3>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Thanks for reaching out. I’ll get back to you as soon as I can.
              </p>
              <Button
                type="button"
                variant="outline"
                className="mt-6"
                onClick={resetForm}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form className="mt-6" onSubmit={handleSubmit}>
              <FieldGroup className="gap-5">
                <Field data-invalid={Boolean(fieldErrors.name)}>
                  <FieldLabel htmlFor={`${idPrefix}-name`}>Name</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id={`${idPrefix}-name`}
                      name="name"
                      autoComplete="name"
                      placeholder="Your name"
                      maxLength={100}
                      required
                      disabled={status === 'submitting'}
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={
                        fieldErrors.name ? `${idPrefix}-name-error` : undefined
                      }
                    />
                    <InputGroupAddon>
                      <HugeiconsIcon icon={User02Icon} strokeWidth={2} />
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldError id={`${idPrefix}-name-error`}>
                    {fieldErrors.name}
                  </FieldError>
                </Field>

                <Field data-invalid={Boolean(fieldErrors.email)}>
                  <FieldLabel htmlFor={`${idPrefix}-email`}>Email</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id={`${idPrefix}-email`}
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      placeholder="you@example.com"
                      maxLength={254}
                      required
                      disabled={status === 'submitting'}
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={
                        fieldErrors.email
                          ? `${idPrefix}-email-error`
                          : undefined
                      }
                    />
                    <InputGroupAddon>
                      <HugeiconsIcon icon={Mail01Icon} strokeWidth={2} />
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldError id={`${idPrefix}-email-error`}>
                    {fieldErrors.email}
                  </FieldError>
                </Field>

                <Field data-invalid={Boolean(fieldErrors.message)}>
                  <FieldLabel htmlFor={`${idPrefix}-message`}>
                    Message
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      id={`${idPrefix}-message`}
                      name="message"
                      placeholder="Tell me what you have in mind..."
                      className="min-h-28 resize-y"
                      minLength={10}
                      maxLength={5000}
                      required
                      disabled={status === 'submitting'}
                      aria-invalid={Boolean(fieldErrors.message)}
                      aria-describedby={
                        fieldErrors.message
                          ? `${idPrefix}-message-error`
                          : undefined
                      }
                    />
                    <InputGroupAddon align="block-end" className="border-t">
                      <HugeiconsIcon icon={Message01Icon} strokeWidth={2} />
                      10-5,000 characters
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldError id={`${idPrefix}-message-error`}>
                    {fieldErrors.message}
                  </FieldError>
                </Field>

                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {usesTurnstile && (
                  <TurnstileWidget
                    siteKey={contactConfig.turnstileSiteKey}
                    resetKey={turnstileResetKey}
                    onTokenChange={setTurnstileToken}
                    onError={setTurnstileError}
                  />
                )}

                {turnstileError && (
                  <p role="alert" className="text-sm text-destructive">
                    {turnstileError}
                  </p>
                )}

                {formError && (
                  <p
                    role="alert"
                    aria-live="assertive"
                    className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive"
                  >
                    {formError}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={
                    status === 'submitting' ||
                    (usesTurnstile && !turnstileToken)
                  }
                >
                  {status === 'submitting' ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <HugeiconsIcon icon={SentIcon} strokeWidth={2} />
                      Send message
                    </>
                  )}
                </Button>
              </FieldGroup>
            </form>
          )}
        </section>
      </div>
    </DialogContent>
  )
}
