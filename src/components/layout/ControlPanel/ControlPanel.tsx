import { useEditorStore } from '@/store/useEditorStore'
import { Checkbox, CHECKBOX_META } from '@/library/Checkbox'
import styles from './ControlPanel.module.scss'
import { Input, INPUT_META } from '@/library/Input'
import { Select } from '@/library/Select/Select'
import { BUTTON_META } from '@/library/Button'
import { CARD_META } from '@/library/Card/Card'
import { RADIOGROUP_META } from '@/library/RadioGroup'

const COMPONENT_METAS = {
  Button: BUTTON_META,
  Checkbox: CHECKBOX_META,
  Card: CARD_META,
  Input: INPUT_META,
  RadioGroup: RADIOGROUP_META,
}

export function ControlPanel() {
  const { selectedComponent, configs, updateConfig } = useEditorStore()
  const currentConfig = configs[selectedComponent]

  const meta = COMPONENT_METAS[selectedComponent]

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
              const { type } = schema

              return (
                <tr key={key}>
                  <th scope="row">{key}</th>
                  <td>
                    {type === 'string' ? (
                      <Input
                        value={String(value ?? '')}
                        onChange={(str) => updateConfig(selectedComponent, { [key]: str })}
                      />
                    ) : type === 'boolean' ? (
                      <Checkbox
                        checked={Boolean(value)}
                        onChange={(checked) => updateConfig(selectedComponent, { [key]: checked })}
                      />
                    ) : schema.options ? (
                      <Select
                        value={String(value)}
                        options={schema.options.map((v: string) => ({ value: v, label: v }))}
                        onChange={(val) => updateConfig(selectedComponent, { [key]: val })}
                      />
                    ) : (
                      <ul>
                        {schema.default.map((d) => (
                          <li>{d}</li>
                        ))}
                      </ul>
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
