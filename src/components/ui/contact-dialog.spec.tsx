// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, waitFor } from '@testing-library/react'

import { TurnstileWidget } from '@/components/ui/contact-dialog'

afterEach(() => {
  cleanup()
  delete window.turnstile
  document.getElementById('cloudflare-turnstile-script')?.remove()
  vi.restoreAllMocks()
})

describe('TurnstileWidget', () => {
  it('marks client-side challenge errors as handled', async () => {
    let errorCallback: ((errorCode: string) => unknown) | undefined

    window.turnstile = {
      render: vi.fn((_container, options) => {
        errorCallback = options['error-callback']
        return 'widget-id'
      }),
      remove: vi.fn(),
    }

    render(
      <TurnstileWidget
        siteKey="1x00000000000000000000AA"
        resetKey={0}
        onTokenChange={vi.fn()}
        onError={vi.fn()}
      />,
    )

    await waitFor(() => expect(errorCallback).toBeTypeOf('function'))
    expect(errorCallback?.('600010')).toBe(true)
  })
})
