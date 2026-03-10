import { useEditorStore } from '@/store/useEditorStore'
import { Checkbox } from '@/library/Checkbox'
import styles from './ControlPanel.module.scss'
import { Input } from '@/library/Input'

export function ControlPanel() {
  const { selectedComponent, configs, updateConfig } = useEditorStore()
  const currentConfig = configs[selectedComponent]

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
            {/* Label: undefined가 아닐 때만 노출 */}
            {'label' in currentConfig && (
              <tr>
                <th scope="row">label</th>
                <td>
                  <Input label={currentConfig?.label || ''} onChange={handleInputChange('label')} />
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
