import styles from './Checkbox.module.scss'
import clsx from 'clsx'
import { Check } from 'lucide-react'

export const CHECKBOX_META = {
  label: 'string',
  checked: 'boolean',
  readonly: 'boolean',
  disabled: 'boolean',
} as const

export interface CheckboxProps {
  label?: string
  checked?: boolean
  readonly?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
}

export function Checkbox({
  label,
  checked = false,
  readonly = false,
  disabled = false,
  onChange,
}: CheckboxProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked)
    }
  }

  return (
    <label
      className={clsx(styles.checkbox, { [styles.checked]: checked, [styles.disabled]: disabled })}
    >
      <input
        type="checkbox"
        checked={checked}
        readOnly={readonly}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className={styles.checkboxIcon}>
        <Check className={styles.icon} />
      </span>
      {label && <span className={styles.checkboxLabel}>{label}</span>}
    </label>
  )
}
