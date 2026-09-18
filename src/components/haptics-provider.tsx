import { createContext, useContext, useEffect } from 'react'
import { defaultPatterns } from 'web-haptics'
import { useWebHaptics } from 'web-haptics/react'
import type { HapticInput } from 'web-haptics'

type HapticPreset = keyof typeof defaultPatterns

type HapticsContextValue = {
  trigger: (input?: HapticInput) => Promise<void> | undefined
}

const HapticsContext = createContext<HapticsContextValue>({
  trigger: () => undefined,
})

const automaticHaptics = {
  button: 'medium',
  link: 'light',
  selection: 'selection',
} as const satisfies Record<string, HapticPreset>

const interactiveSelector = [
  '[data-haptic]',
  'a[href]',
  'button',
  'summary',
  '[role="button"]',
  '[role="checkbox"]',
  '[role="menuitem"]',
  '[role="option"]',
  '[role="radio"]',
  '[role="switch"]',
  '[role="tab"]',
  'input[type="checkbox"]',
  'input[type="radio"]',
  'select',
].join(',')

const selectionSelector = [
  '[role="checkbox"]',
  '[role="menuitem"]',
  '[role="option"]',
  '[role="radio"]',
  '[role="switch"]',
  '[role="tab"]',
  'input[type="checkbox"]',
  'input[type="radio"]',
  'select',
].join(',')

function isHapticPreset(value: string): value is HapticPreset {
  return Object.hasOwn(defaultPatterns, value)
}

function getAutomaticHaptic(target: EventTarget | null): HapticPreset | null {
  if (!(target instanceof Element)) return null
  if (target.closest('[data-haptic-managed]')) return null

  const interactiveElement = target.closest<HTMLElement>(interactiveSelector)

  if (
    !interactiveElement ||
    interactiveElement.matches(':disabled, [aria-disabled="true"]')
  ) {
    return null
  }

  const configuredHaptic = interactiveElement.dataset.haptic

  if (configuredHaptic === 'none') return null
  if (configuredHaptic) {
    return isHapticPreset(configuredHaptic) ? configuredHaptic : null
  }
  if (interactiveElement.matches(selectionSelector)) {
    return automaticHaptics.selection
  }
  if (interactiveElement.matches('a[href]')) return automaticHaptics.link

  return automaticHaptics.button
}

function HapticsProvider({ children }: { children: React.ReactNode }) {
  const { trigger } = useWebHaptics()

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || !event.isTrusted) return

      const haptic = getAutomaticHaptic(event.target)
      if (haptic) void trigger(haptic)
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [trigger])

  return (
    <HapticsContext.Provider value={{ trigger }}>
      {children}
    </HapticsContext.Provider>
  )
}

function useHaptics() {
  return useContext(HapticsContext)
}

export { HapticsProvider, useHaptics }
export type { HapticPreset }
