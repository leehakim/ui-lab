import clsx from 'clsx'
import type { ReactNode } from 'react'
import styles from './Button.module.scss'

export const BUTTON_META = {
  variant: ['primary', 'outlined', 'secondary'],
  size: ['sm', 'md', 'lg'],
  label: 'string',
  disabled: 'boolean',
} as const

export interface ButtonProps {
  variant?: (typeof BUTTON_META.variant)[number]
  size?: (typeof BUTTON_META.size)[number]
  label?: string
  disabled?: boolean
  children?: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  label,
  disabled = false,
  children,
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(
        styles.button,
        { [styles.disabled]: disabled },
        styles[size],
        styles[variant],
      )}
    >
      {label || children}
    </button>
  )
}
