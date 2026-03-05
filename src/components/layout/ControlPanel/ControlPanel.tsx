import { useEditorStore } from '@/store/useEditorStore'
import { Checkbox } from '@/library/Checkbox'
import styles from './ControlPanel.module.scss'

export function ControlPanel() {
  const { selectedComponent, configs } = useEditorStore()

  return (
    <aside className={styles.controlPanel}>
      <p>control panel</p>
      <div className={styles.table}>
        <table>
          <tbody>
            <tr>
              <th scope="row">label</th>
              <td>
                <input type="text" value={configs[selectedComponent].label} />
              </td>
            </tr>
            <tr>
              <th scope="row">variant</th>
              <td>
                <div className="item-list">
                  <input type="radio" name="variant" value="primary" defaultChecked />
                  <input type="radio" name="variant" value="outline" />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">disabled</th>
              <td>
                <Checkbox checked={configs[selectedComponent].disabled} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </aside>
  )
}
