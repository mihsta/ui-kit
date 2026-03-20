import { cn } from '../../utils/cn'

const variantStyles = {
  success: 'bg-green-50 border-green-200 text-green-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
} as const

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variantStyles
  title?: string
}

export function Alert({
  variant = 'info',
  title,
  children,
  className,
  ...props
}: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(
        'rounded-md border p-4',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {title && <h4 className="mb-1 font-semibold">{title}</h4>}
      <div className="text-sm">{children}</div>
    </div>
  )
}
