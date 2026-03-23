import { Button } from '@/library/Button'
import { Card } from '@/library/Card/Card'
import { Checkbox } from '@/library/Checkbox'
import { Input } from '@/library/Input'

export const COMPONENT_CONFIG = [
  { id: 'Button', label: 'Button', component: Button },
  { id: 'Input', label: 'Input', component: Input },
  { id: 'Checkbox', label: 'Checkbox', component: Checkbox },
  { id: 'Card', label: 'Card', component: Card },
] as const

// ID들만 뽑아서 타입 생성: 'Button' | 'Input' | 'Checkbox'
export type ComponentId = (typeof COMPONENT_CONFIG)[number]['id']

// Sidebar용 메뉴 리스트 (ID와 라벨, 아이콘만 추출)
export const MENU_ITEMS = COMPONENT_CONFIG.map(({ id, label }) => ({ id, label }))

// Preview용 컴포넌트 매핑 객체 생성
export const COMPONENT_MAP = COMPONENT_CONFIG.reduce(
  (acc, { id, component }) => {
    acc[id] = component
    return acc
  },
  {} as Record<ComponentId, any>,
)
