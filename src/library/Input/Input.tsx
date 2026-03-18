import clsx from 'clsx'
import styles from './Input.module.scss'

export const INPUT_META = {
  label: 'string',
  type: ['text', 'password'],
  placeholder: 'string',
  error: 'boolean',
  readonly: 'boolean',
  disabled: 'boolean',
} as const

export interface InputProps {
  label?: string
  type?: (typeof INPUT_META.type)[number]
  placeholder?: string
  error?: boolean
  readonly?: boolean
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function Input({
  label = 'text',
  type = 'text',
  placeholder = 'placeholder',
  error = false,
  readonly = false,
  disabled = false,
  onChange,
}: InputProps) {
  return (
    <div className={clsx(styles.input, { [styles.disabled]: disabled, [styles.error]: error })}>
      <div className={styles.inputWrap}>
        <input
          type={type}
          value={label}
          placeholder={placeholder}
          readOnly={readonly}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
