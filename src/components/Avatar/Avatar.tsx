import { cn } from '../../utils/cn'

const sizeStyles = {
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
} as const

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null
  alt?: string
  fallback?: React.ReactNode
  size?: keyof typeof sizeStyles
}

export function Avatar({
  src,
  alt = '',
  fallback,
  size = 'md',
  className,
  ...props
}: AvatarProps) {
  const hasImage = src && src.length > 0

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-200 font-medium text-gray-600',
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {hasImage ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        fallback ?? (
          <span className="flex h-full w-full items-center justify-center">?</span>
        )
      )}
    </div>
  )
}
