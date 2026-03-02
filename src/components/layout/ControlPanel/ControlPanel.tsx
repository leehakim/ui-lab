import styles from './ControlPanel.module.scss'

export function ControlPanel() {
  return (
    <aside className={styles.controlPanel}>
      <p>control panel</p>
      <div className={styles.table}>
        <table>
          <tr>
            <th scope="row">label</th>
            <td>
              <input type="text" />
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
              <input type="checkbox" />
            </td>
          </tr>
        </table>
      </div>
    </aside>
  )
}
