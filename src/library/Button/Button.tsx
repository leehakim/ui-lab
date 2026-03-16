import clsx from 'clsx'
import type { ReactNode } from 'react'
import styles from './Button.module.scss'

export interface ButtonProps {
  variant?: 'primary' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  label?: string
  disabled?: boolean
  className?: string
  children?: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  label,
  disabled = false,
  className,
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
        className,
      )}
    >
      {label || children}
    </button>
  )
}
