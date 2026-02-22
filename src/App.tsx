import { Sidebar } from './components/layout/Sidebar/Sidebar'
import { Preview } from './components/layout/Preview/Preview'
import { ControlPanel } from './components/layout/ControlPanel/ControlPanel'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>UI Lab</header>
      <main className={styles.mainContent}>
        <Sidebar /> {/* 왼쪽: 컴포넌트 목록 */}
        <Preview /> {/* 중앙: 컴포넌트 실제 렌더링 영역 */}
        <ControlPanel /> {/* 오른쪽: Props 조절 영역 */}
      </main>
    </div>
  )
}

export default App
