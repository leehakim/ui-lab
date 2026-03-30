import clsx from 'clsx'
import styles from './Input.module.scss'
import { CircleX } from 'lucide-react'

export const INPUT_META = {
  value: { type: 'string', default: 'Input' },
  type: { type: 'select', options: ['text', 'password'], default: 'text' },
  placeholder: { type: 'string', default: 'Input text...' },
  error: { type: 'boolean', default: false },
  readonly: { type: 'boolean', default: false },
  disabled: { type: 'boolean', default: false },
} as const

export interface InputProps {
  value?: string
  type?: (typeof INPUT_META.type.options)[number]
  placeholder?: string
  error?: boolean
  readonly?: boolean
  disabled?: boolean
  onChange?: (e: string) => void
}

export function Input({
  value,
  type,
  placeholder,
  error,
  readonly,
  disabled,
  onChange,
}: InputProps) {
  const ClearValue = () => {
    if (onChange) {
      onChange('')
    }
  }

  return (
    <div className={clsx(styles.input, { [styles.disabled]: disabled, [styles.error]: error })}>
      <div className={styles.inputWrap}>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          readOnly={readonly}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
        />
      </div>
      {value && value?.length > 0 && (
        <button type="button" className={styles.inputBtn} onClick={ClearValue}>
          <CircleX />
        </button>
      )}
    </div>
  )
}
