import clsx from 'clsx'
import styles from './RadioGroup.module.scss'
import { useId } from 'react'

export const RADIOGROUP_META = {
  value: { type: 'string', default: 'option_01' },
  options: {
    type: 'array',
    default: ['option_01', 'option_02', 'option_03'],
  },
  readonly: { type: 'boolean', default: false },
  disabled: { type: 'boolean', default: false },
} as const

export interface RadioGroupProps {
  value: string
  options: string[]
  readonly?: boolean
  disabled?: boolean
  onChange?: (val: string) => void
}

export function RadioGroup({ value, options = [], readonly, disabled, onChange }: RadioGroupProps) {
  const handleChange = (val: string) => {
    if (onChange) {
      onChange(val)
    }
  }

  const radioGroupId = useId()

  return (
    <div className={styles.radioGroup}>
      {options.map((option) => (
        <label
          key={option}
          className={clsx(styles.radioItem, {
            [styles.checked]: value === option,
            [styles.disabled]: disabled,
          })}
        >
          <input
            type="radio"
            name={radioGroupId}
            checked={value === option}
            readOnly={readonly}
            disabled={disabled}
            onChange={() => handleChange(option)}
          />
          <span className={styles.radioCircle}></span>
          <span className={styles.radioLabel}>{option}</span>
        </label>
      ))}
    </div>
  )
}
