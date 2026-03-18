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
      {/* <p>control panel</p> */}
      <div className={styles.table}>
        <table>
          <colgroup>
            <col width="30%" />
            <col />
          </colgroup>
          <tbody>
            {/* Label */}
            {'label' in currentConfig && (
              <tr>
                <th scope="row">label</th>
                <td>
                  <Input label={currentConfig?.label || ''} onChange={handleInputChange('label')} />
                </td>
              </tr>
            )}

            {'size' in currentConfig && (
              <tr>
                <th scope="row">size</th>
                <td>
                  <Select
                    selected={currentConfig?.size}
                    options={meta.size.map((v: string) => ({ value: v, label: v }))}
                    onChange={(val) => updateConfig(selectedComponent, { size: val })}
                  />
                </td>
              </tr>
            )}

            {/* Disabled: 속성이 존재한다면 true/false 상관없이 노출 */}
            {'disabled' in currentConfig && (
              <tr>
                <th scope="row">disabled</th>
                <td>
                  <Checkbox
                    checked={currentConfig.disabled}
                    onChange={(checked) => updateConfig(selectedComponent, { disabled: checked })}
                  />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </aside>
  )
}
