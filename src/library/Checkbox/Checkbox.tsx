import styles from './Checkbox.module.scss'

export interface CheckboxProps {
  label?: string
  checked?: boolean
  disabled?: boolean
}

export function Checkbox({ label, checked, disabled = false }: CheckboxProps) {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" checked={checked} disabled={disabled} />
      <span className={styles.checkboxIcon}></span>
      <span className={styles.checkboxLabel}>{label}</span>
    </label>
  )
}
