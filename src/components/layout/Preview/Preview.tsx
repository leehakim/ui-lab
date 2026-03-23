import { COMPONENT_MAP } from '@/constants/components'
import { useEditorStore } from '@/store/useEditorStore'
import styles from './Preview.module.scss'
import { Card } from '@/library/Card/Card'

export function Preview() {
  const { selectedComponent, configs } = useEditorStore()
  const Target = COMPONENT_MAP[selectedComponent]
  const props = configs[selectedComponent]

  return (
    <section className={styles.preview}>
      <Card title={selectedComponent}>
        <Target {...props} readonly={true} />
      </Card>
    </section>
  )
}
