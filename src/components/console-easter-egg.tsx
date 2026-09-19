import { useEffect } from 'react'

const message = [
  '',
  '   .-.                .-.',
  "  (_) )-.      .--.`-'",
  '     /   \\    /  (_;',
  '    /     \\  /',
  ' .-/.      )(     --;-',
  "(_/  `----'  `.___.'",
  '',
  'Looks like you found another DOM.',
  "Since you're already snooping around -> github.com/DomGiarrusso",
].join('\n')

let hasLogged = false

export function ConsoleEasterEgg() {
  useEffect(() => {
    if (hasLogged) return

    hasLogged = true
    console.log(message)
  }, [])

  return null
}
