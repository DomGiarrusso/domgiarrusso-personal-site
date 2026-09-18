// @vitest-environment jsdom

import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react'

import ContactDialog from '@/components/ui/contact-dialog'
import { Dialog } from '@/components/ui/dialog'

function renderContactDialog() {
  render(
    <Dialog open>
      <ContactDialog />
    </Dialog>,
  )
}

function fillContactForm() {
  fireEvent.change(screen.getByLabelText('Name'), {
    target: { value: 'Ada Lovelace' },
  })
  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'ada@example.com' },
  })
  fireEvent.change(screen.getByLabelText('Message'), {
    target: { value: 'I would like to discuss a project with you.' },
  })
}

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
  vi.restoreAllMocks()
})

describe('ContactDialog', () => {
  it('renders the contact fields and configured profile links', () => {
    renderContactDialog()

    expect(screen.getByRole('dialog')).toBeTruthy()
    expect(screen.getByLabelText('Name')).toBeTruthy()
    expect(screen.getByLabelText('Email')).toBeTruthy()
    expect(screen.getByLabelText('Message')).toBeTruthy()
    expect(
      screen.getByLabelText('Name').closest('[data-slot="input-group"]'),
    ).toBeTruthy()
    expect(screen.queryByText('Contact card')).toBeNull()
    expect(
      screen.getByRole('link', { name: /GitHub/ }).getAttribute('href'),
    ).toBe('https://github.com/DomGiarrusso')
  })

  it('submits the expected Formspree payload and shows confirmation', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    )
    vi.stubGlobal('fetch', fetchMock)
    renderContactDialog()
    fillContactForm()

    const form = screen
      .getByRole('button', { name: 'Send message' })
      .closest('form')
    expect(form).not.toBeNull()
    fireEvent.submit(form!)

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))
    const request = fetchMock.mock.calls[0]?.[1] as RequestInit
    const body = request.body as FormData

    expect(body.get('name')).toBe('Ada Lovelace')
    expect(body.get('email')).toBe('ada@example.com')
    expect(body.get('message')).toBe(
      'I would like to discuss a project with you.',
    )
    expect(body.get('_gotcha')).toBe('')
    expect(await screen.findByText('Message sent')).toBeTruthy()
  })

  it('keeps the form available when Formspree rejects a submission', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({
            errors: [{ field: 'email', message: 'is not a valid email' }],
          }),
          { status: 422, headers: { 'Content-Type': 'application/json' } },
        ),
      ),
    )
    renderContactDialog()
    fillContactForm()

    const form = screen
      .getByRole('button', { name: 'Send message' })
      .closest('form')
    fireEvent.submit(form!)

    expect(await screen.findByText('is not a valid email')).toBeTruthy()
    expect(screen.getByLabelText('Email').getAttribute('aria-invalid')).toBe(
      'true',
    )
    expect(screen.getByRole('button', { name: 'Send message' })).toBeTruthy()
  })
})
