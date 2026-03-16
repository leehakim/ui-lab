import clsx from 'clsx'
import styles from './Select.module.scss'
import { useState } from 'react'

export interface SelectProps {
  value?: string | number
  options: string[] | number[]
  disabled?: boolean
  placeholder?: string
}

export function Select({
  value,
  options,
  disabled = false,
  placeholder = 'Select item',
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (newValue) => {
    value = newValue
  }

  return (
    <div className={styles.select} role="combobox" aria-haspopup="listbox" aria-expanded="false">
      <button
        type="button"
        className={styles.trigger}
        disabled={disabled}
        onClick={(isOpen) => setIsOpen(!isOpen)}
      >
        {placeholder || value}
      </button>
      <div className={clsx(styles.listPopup, { [styles.isOpen]: isOpen })}>
        <ul role="listbox">
          {options.map((option) => (
            <li key={option}>
              <button type="button" role="option" onClick={() => handleSelect(option)}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
