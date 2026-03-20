import { forwardRef } from 'react'
import { cn } from '../../utils/cn'

export type CardProps = React.HTMLAttributes<HTMLDivElement>

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border border-gray-200 bg-white shadow-sm',
        className
      )}
      {...props}
    />
  )
)

Card.displayName = 'Card'

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('border-b border-gray-200 px-6 py-4', className)}
      {...props}
    />
  )
)

CardHeader.displayName = 'CardHeader'

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('px-6 py-4', className)} {...props} />
  )
)

CardContent.displayName = 'CardContent'

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('border-t border-gray-200 px-6 py-4', className)}
      {...props}
    />
  )
)

CardFooter.displayName = 'CardFooter'
