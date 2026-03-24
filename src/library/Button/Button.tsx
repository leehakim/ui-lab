import clsx from 'clsx'
import type { ReactNode } from 'react'
import styles from './Button.module.scss'

export const BUTTON_META = {
  variant: { type: 'select', options: ['primary', 'outlined', 'secondary'], default: 'primary' },
  size: { type: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
  label: { type: 'string', default: 'Default Button' },
  disabled: { type: 'boolean', default: false },
} as const

export interface ButtonProps {
  variant?: (typeof BUTTON_META.variant.options)[number]
  size?: (typeof BUTTON_META.size.options)[number]
  label?: string
  disabled?: boolean
  children?: ReactNode
}

export function Button({ variant, size, label, disabled, children }: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(
        styles.button,
        { [styles.disabled]: disabled },
        styles[size as keyof typeof styles],
        styles[variant as keyof typeof styles],
      )}
    >
      {label || children}
    </button>
  )
}
