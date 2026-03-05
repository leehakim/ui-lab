import styles from './Input.module.scss'

export interface InputProps {
  label?: string
  type?: string
  placeholder?: string
  disabled?: boolean
}

export function Input({
  label = 'text',
  type = 'text',
  placeholder = 'placeholder',
  disabled = false,
}: InputProps) {
  return (
    <div className={styles.input}>
      <div className={styles.inputWrap}>
        <input type={type} value={label} placeholder={placeholder} disabled={disabled} />
      </div>
    </div>
  )
}
