import { COMPONENT_LIST } from '@/constants/menuItems'
import styles from './Sidebar.module.scss'
import clsx from 'clsx'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Components</h2>
      <ul className={styles.menuList}>
        {COMPONENT_LIST.map((item) => (
          <li key={item.id}>
            <button className={clsx(styles.menuBtn)}>
              <span className={styles.icon}>{item.icon}</span>
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
