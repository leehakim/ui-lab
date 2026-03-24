import styles from './RadioGroup.module.scss'

export const RADIOGROUP_META = {
  disabled: { type: 'boolean', default: false },
} as const

export interface RadioGroupProps {
  disabled?: boolean
}

export function Radio({ disabled }: RadioGroupProps) {
  return <div className={styles.radioGroup}></div>
}
