import { MENU_ITEMS } from '@/constants/components'
import { useEditorStore } from '@/store/useEditorStore'
import styles from './Sidebar.module.scss'
import clsx from 'clsx'

export function Sidebar() {
  const { selectedComponent, setComponent } = useEditorStore()

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Components</h2>
      <ul className={styles.menuList}>
        {MENU_ITEMS.map((item) => (
          <li key={item.id}>
            <button
              className={clsx(styles.menuBtn, selectedComponent === item.id && styles.isCurrent)}
              onClick={() => setComponent(item.id)}
            >
              {/* <span className={styles.icon}>{item.icon}</span> */}
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
