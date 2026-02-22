import clsx from 'clsx'
import type { ReactNode } from 'react'
import styles from './Button.module.scss'

interface Props {
  variant?: 'primary' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children: ReactNode
  className?: string
}

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  className,
}: Props) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(
        styles.button,
        styles[size],
        styles[variant],
        disabled && styles.disabled,
        className,
      )}
    >
      {children}
    </button>
  )
}
