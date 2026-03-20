import clsx from 'clsx'
import styles from './Select.module.scss'
import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export const SELECT_META = {
  selected: 'string',
  disabled: 'boolean',
  placeholder: 'string',
} as const

export interface SelectProps {
  selected?: string
  options: { value: string; label: string }[]
  onChange: (value: string) => void
  disabled?: boolean
  placeholder?: string
}

export function Select({
  selected,
  options,
  onChange,
  disabled = false,
  placeholder = 'Select item',
}: SelectProps) {
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
        <span>{selected ? selected : placeholder}</span>
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
                    [styles.isSelected]: selected === option.label,
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
