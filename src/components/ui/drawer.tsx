'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from '@base-ui/react/drawer'
import { Cancel01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type DrawerDirection = 'top' | 'right' | 'bottom' | 'left'
type DrawerOverlayMode = boolean | 'snap'

const DrawerContext = React.createContext<{
  direction: DrawerDirection
  overlay: DrawerOverlayMode
  overlayVisible: boolean
}>({
  direction: 'bottom',
  overlay: true,
  overlayVisible: true,
})

function getSwipeDirection(direction: DrawerDirection) {
  switch (direction) {
    case 'top':
      return 'up'
    case 'right':
      return 'right'
    case 'left':
      return 'left'
    case 'bottom':
    default:
      return 'down'
  }
}

function Drawer({
  direction = 'bottom',
  overlay = true,
  snapPoints,
  snapPoint,
  defaultSnapPoint,
  ...props
}: Omit<DrawerPrimitive.Root.Props, 'swipeDirection'> & {
  direction?: DrawerDirection
  overlay?: DrawerOverlayMode
}) {
  const firstSnapPoint = snapPoints?.[0] ?? null
  const currentSnapPoint = snapPoint ?? defaultSnapPoint ?? null
  const overlayVisible =
    overlay === 'snap'
      ? currentSnapPoint !== null && currentSnapPoint !== firstSnapPoint
      : overlay !== false

  return (
    <DrawerContext.Provider value={{ direction, overlay, overlayVisible }}>
      <DrawerPrimitive.Root
        data-slot="drawer"
        swipeDirection={getSwipeDirection(direction)}
        snapPoints={snapPoints}
        snapPoint={snapPoint}
        defaultSnapPoint={defaultSnapPoint}
        {...props}
      />
    </DrawerContext.Provider>
  )
}

function DrawerTrigger({ ...props }: DrawerPrimitive.Trigger.Props) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerSwipeArea({
  className,
  ...props
}: DrawerPrimitive.SwipeArea.Props) {
  return (
    <DrawerPrimitive.SwipeArea
      data-slot="drawer-swipe-area"
      className={cn(className)}
      {...props}
    />
  )
}

function DrawerPortal({ ...props }: DrawerPrimitive.Portal.Props) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({ ...props }: DrawerPrimitive.Close.Props) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  visible = true,
  ...props
}: DrawerPrimitive.Backdrop.Props & {
  visible?: boolean
}) {
  return (
    <DrawerPrimitive.Backdrop
      data-slot="drawer-overlay"
      data-overlay-visible={visible ? 'true' : 'false'}
      className={cn(
        'fixed inset-0 z-50 bg-black/20 transition-[opacity,backdrop-filter] duration-200 ease-(--theme-transition-easing) supports-backdrop-filter:backdrop-blur-xs',
        className,
      )}
      {...props}
    />
  )
}

function DrawerViewport({
  className,
  ...props
}: DrawerPrimitive.Viewport.Props) {
  return (
    <DrawerPrimitive.Viewport
      data-slot="drawer-viewport"
      className={cn('fixed inset-0 z-50', className)}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  direction,
  showCloseButton = false,
  showHandle,
  ...props
}: DrawerPrimitive.Popup.Props & {
  direction?: DrawerDirection
  showCloseButton?: boolean
  showHandle?: boolean
}) {
  const context = React.useContext(DrawerContext)
  const resolvedDirection = direction ?? context.direction
  const shouldShowHandle =
    showHandle ??
    (resolvedDirection === 'bottom' || resolvedDirection === 'top')

  return (
    <DrawerPortal>
      {context.overlay !== false && (
        <DrawerOverlay visible={context.overlayVisible} />
      )}
      <DrawerViewport>
        <DrawerPrimitive.Popup
          data-slot="drawer-content"
          data-direction={resolvedDirection}
          className={cn(
            'pointer-events-none fixed inset-0 z-50 flex transition-[transform] duration-200 ease-(--theme-transition-easing) outline-none',
            resolvedDirection === 'bottom' && 'items-end justify-center',
            resolvedDirection === 'top' && 'items-start justify-center',
            resolvedDirection === 'right' && 'items-stretch justify-end',
            resolvedDirection === 'left' && 'items-stretch justify-start',
          )}
          {...props}
        >
          <div
            data-slot="drawer-panel"
            data-direction={resolvedDirection}
            className={cn(
              'bg-background ring-foreground/10 pointer-events-auto relative flex w-full flex-col border shadow-lg ring-1',
              resolvedDirection === 'bottom' &&
                "max-h-[calc(100vh-1rem)] rounded-t-2xl border-b-0 after:absolute after:-left-px after:-right-px after:top-[calc(100%-1px)] after:h-dvh after:bg-background after:content-['']",
              resolvedDirection === 'top' &&
                "max-h-[calc(100vh-1rem)] rounded-b-2xl border-t-0 before:absolute before:-left-px before:-right-px before:bottom-[calc(100%-1px)] before:h-dvh before:bg-background before:content-['']",
              resolvedDirection === 'right' &&
                "h-full max-w-md border-r-0 sm:max-w-lg after:absolute after:-bottom-px after:left-[calc(100%-1px)] after:-top-px after:w-dvw after:bg-background after:content-['']",
              resolvedDirection === 'left' &&
                "h-full max-w-md border-l-0 sm:max-w-lg before:absolute before:-bottom-px before:right-[calc(100%-1px)] before:-top-px before:w-dvw before:bg-background before:content-['']",
              className,
            )}
          >
            {shouldShowHandle && resolvedDirection !== 'top' && (
              <div className="flex justify-center px-6 pb-2 pt-3">
                <div className="bg-muted-foreground/20 h-1.5 w-12 rounded-full" />
              </div>
            )}
            {showCloseButton && (
              <DrawerPrimitive.Close
                data-slot="drawer-close"
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="absolute right-4 top-4"
                  />
                }
              >
                <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
                <span className="sr-only">Close</span>
              </DrawerPrimitive.Close>
            )}
            <DrawerPrimitive.Content
              data-slot="drawer-body"
              className="flex min-h-0 flex-1 flex-col overflow-auto"
            >
              {children}
            </DrawerPrimitive.Content>
            {shouldShowHandle && resolvedDirection === 'top' && (
              <div className="flex justify-center px-6 pb-3 pt-2">
                <div className="bg-muted-foreground/20 h-1.5 w-12 rounded-full" />
              </div>
            )}
          </div>
        </DrawerPrimitive.Popup>
      </DrawerViewport>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'flex flex-col gap-2 px-6 pb-4 text-center sm:text-left',
        className,
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn(
        'mt-auto flex flex-col-reverse gap-2 px-6 pb-6 pt-4 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    />
  )
}

function DrawerTitle({ className, ...props }: DrawerPrimitive.Title.Props) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('text-lg font-semibold', className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: DrawerPrimitive.Description.Props) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn(
        'text-muted-foreground text-sm *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground',
        className,
      )}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerSwipeArea,
  DrawerTitle,
  DrawerTrigger,
  DrawerViewport,
}
