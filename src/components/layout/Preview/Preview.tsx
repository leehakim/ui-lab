import { COMPONENT_MAP } from '@/constants/components'
import { useEditorStore } from '@/store/useEditorStore'
import styles from './Preview.module.scss'

export function Preview() {
  const { selectedComponent, configs } = useEditorStore()
  const Target = COMPONENT_MAP[selectedComponent]
  const props = configs[selectedComponent]

  return (
    <section className={styles.preview}>
      <h3>Preview: {selectedComponent}</h3>
      <div className="previewContent">
        <Target {...props} />
      </div>
    </section>
  )
}
