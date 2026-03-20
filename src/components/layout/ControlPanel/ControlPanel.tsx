import { useEditorStore } from '@/store/useEditorStore'
import { Checkbox, CHECKBOX_META } from '@/library/Checkbox'
import styles from './ControlPanel.module.scss'
import { Input, INPUT_META } from '@/library/Input'
import { Select } from '@/library/Select/Select'
import { BUTTON_META } from '@/library/Button'

const COMPONENT_METAS = {
  Button: BUTTON_META,
  Checkbox: CHECKBOX_META,
  Input: INPUT_META,
}

export function ControlPanel() {
  const { selectedComponent, configs, updateConfig } = useEditorStore()
  const currentConfig = configs[selectedComponent]

  const meta = COMPONENT_METAS[selectedComponent]

  /**
   * 커링(Currying)
   * 함수를 리턴하는 함수 () => () => {}
   */
  const handleInputChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    updateConfig(selectedComponent, { [key]: e.target.value })
  }

  return (
    <aside className={styles.controlPanel}>
      <div className={styles.table}>
        <table>
          <colgroup>
            <col width="35%" />
            <col />
          </colgroup>
          <tbody>
            {Object.entries(meta).map(([key, schema]) => {
              const value = currentConfig?.[key as keyof typeof currentConfig]

              return (
                <tr key={key}>
                  <th scope="row">{key}</th>
                  <td>
                    {schema === 'string' ? (
                      <Input label={String(value ?? '')} onChange={handleInputChange('label')} />
                    ) : schema === 'boolean' ? (
                      <Checkbox
                        checked={Boolean(value)}
                        onChange={(checked) => updateConfig(selectedComponent, { [key]: checked })}
                      />
                    ) : (
                      <Select
                        selected={String(value)}
                        options={schema.map((v: string) => ({ value: v, label: v }))}
                        onChange={(val) => updateConfig(selectedComponent, { [key]: val })}
                      />
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </aside>
  )
}
