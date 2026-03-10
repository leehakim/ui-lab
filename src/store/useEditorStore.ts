import { create } from 'zustand'
import type { ComponentId } from '@/constants/components'
import type { ButtonProps } from '@/library/Button'
import type { InputProps } from '@/library/Input'
import type { CheckboxProps } from '@/library/Checkbox/Checkbox'

interface EditorState {
  selectedComponent: ComponentId
  setComponent: (id: ComponentId) => void
  configs: {
    Button: ButtonProps
    Input: InputProps
    Checkbox: CheckboxProps
  }
  updateConfig: <T extends ComponentId>(
    id: T,
    newConfig: Partial<EditorState['configs'][T]>,
  ) => void
}

const initConfigs: EditorState['configs'] = {
  Button: {
    variant: 'primary',
    size: 'md',
    label: 'Default Button',
    disabled: false,
  },
  Input: {
    placeholder: '텍스트를 입력하세요',
    type: 'text',
    label: 'Input Label',
    disabled: false,
  },
  Checkbox: {
    label: '',
    disabled: false,
  },
}

export const useEditorStore = create<EditorState>((set) => ({
  // --- 상태(State) ---
  selectedComponent: 'Button',
  // 컴포넌트별 초기 옵션들
  configs: initConfigs,

  // --- 액션(Actions) ---
  setComponent: (id) => set({ selectedComponent: id }),
  updateConfig: (id, newConfig) =>
    set((state) => ({
      configs: { ...state.configs, [id]: { ...state.configs[id], ...newConfig } },
    })),
}))
