import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../utils/cn'

export interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

const OFFSET = 8

export function Tooltip({
  content,
  children,
  position = 'top',
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const [style, setStyle] = useState<React.CSSProperties>({})
  const triggerRef = useRef<HTMLDivElement>(null)

  const updatePosition = useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2

      const styles: Record<string, React.CSSProperties> = {
        top: { left: cx, top: rect.top, transform: `translate(-50%, calc(-100% - ${OFFSET}px))` },
        bottom: { left: cx, top: rect.bottom, transform: `translate(-50%, ${OFFSET}px)` },
        left: { left: rect.left, top: cy, transform: `translate(calc(-100% - ${OFFSET}px), -50%)` },
        right: { left: rect.right, top: cy, transform: `translate(${OFFSET}px, -50%)` },
      }
      setStyle(styles[position])
    }
  }, [position])

  useEffect(() => {
    if (visible) {
      updatePosition()
      window.addEventListener('scroll', updatePosition, true)
      window.addEventListener('resize', updatePosition)
    }
    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [visible, updatePosition])

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        className="inline-flex"
      >
        {children}
      </div>
      {visible &&
        createPortal(
          <div
            role="tooltip"
            className={cn(
              'fixed z-50 max-w-xs rounded-md bg-gray-900 px-3 py-2 text-sm text-white shadow-lg',
              className
            )}
            style={style}
          >
            {content}
          </div>,
          document.body
        )}
    </>
  )
}
