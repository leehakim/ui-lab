import type { ReactNode } from 'react'
import styles from './Card.module.scss'
import clsx from 'clsx'

export const CARD_META = {
  title: 'string',
  description: 'string',
  padding: ['sm', 'md', 'lg'],
  hasShadow: 'boolean',
  isBoared: 'boolean',
} as const

export interface CardProps {
  title?: string
  description?: string
  padding?: (typeof CARD_META.padding)[number]
  shadow?: boolean
  bordered?: boolean
  children?: ReactNode
}

export function Card({ title, description, padding, shadow, bordered, children }: CardProps) {
  return (
    <div
      className={clsx(styles.card, styles[padding], {
        [styles.hasShadow]: shadow,
        [styles.isBoard]: bordered,
      })}
    >
      {(title || description) && (
        <div className={styles.header}>
          {title && <h3 className={styles.title}>{title}</h3>}
          {description && <p className={styles.description}>{description}</p>}
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </div>
  )
}
