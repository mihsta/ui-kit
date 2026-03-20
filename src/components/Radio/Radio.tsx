import { createContext, useContext } from 'react'
import { cn } from '../../utils/cn'

interface RadioGroupContextValue {
  name: string
  value: string
  onChange: (value: string) => void
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)

function useRadioGroup() {
  const ctx = useContext(RadioGroupContext)
  if (!ctx) throw new Error('Radio must be used within RadioGroup')
  return ctx
}

export interface RadioGroupProps {
  name: string
  value: string
  onChange: (value: string) => void
  children: React.ReactNode
  className?: string
  label?: string
}

export function RadioGroup({
  name,
  value,
  onChange,
  children,
  className,
  label,
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ name, value, onChange }}>
      <div role="radiogroup" aria-label={label} className={cn(className)}>
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}

export interface RadioProps {
  value: string
  label?: string
  disabled?: boolean
  className?: string
}

export function Radio({ value, label, disabled, className }: RadioProps) {
  const { name, value: selectedValue, onChange } = useRadioGroup()
  const isChecked = selectedValue === value

  return (
    <label className={cn('flex cursor-pointer items-center gap-2', disabled && 'cursor-not-allowed opacity-50', className)}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={() => onChange(value)}
        disabled={disabled}
        className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"
      />
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
    </label>
  )
}
