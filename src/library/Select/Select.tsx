import clsx from 'clsx'
import styles from './Select.module.scss'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const SELECT_META = {
  options: {
    type: 'array',
    options: ['option_01', 'option_02', 'option_03'],
    default: 'option_01',
  },
  disabled: { type: 'boolean', default: false },
  placeholder: { type: 'string', default: 'select' },
} as const

export interface SelectProps {
  value?: string
  options: { value: string; label: string }[]
  disabled?: boolean
  placeholder?: string
  onChange: (value: string) => void
}

export function Select({ value, options, onChange, disabled, placeholder }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  const selectRef = useRef<HTMLDivElement>(null)

  const handleSelect = (value: string) => {
    onChange?.(value)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) setIsOpen(false)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key == 'Escape') setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('click', handleClickOutside)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div
      ref={selectRef}
      className={clsx(styles.select, { [styles.isOpen]: isOpen })}
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded="false"
    >
      <button
        type="button"
        className={styles.trigger}
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value ? value : placeholder}</span>
        <ChevronDown className={styles.arrow} />
      </button>
      {isOpen && (
        <div className={styles.listPopup}>
          <ul role="listbox">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  role="option"
                  className={clsx(styles.option, {
                    [styles.isSelected]: value === option.value,
                  })}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
