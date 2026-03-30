import { create } from 'zustand'
import type { ComponentId } from '@/constants/components'
import { BUTTON_META, type ButtonProps } from '@/library/Button'
import { INPUT_META, type InputProps } from '@/library/Input'
import { CHECKBOX_META, type CheckboxProps } from '@/library/Checkbox/Checkbox'
import { CARD_META, type CardProps } from '@/library/Card/Card'
import { RADIOGROUP_META, type RadioGroupProps } from '@/library/RadioGroup'

interface EditorState {
  selectedComponent: ComponentId
  setComponent: (id: ComponentId) => void
  configs: {
    Button: ButtonProps
    Checkbox: CheckboxProps
    Card: CardProps
    Input: InputProps
    RadioGroup: RadioGroupProps
  }
  updateConfig: <T extends ComponentId>(
    id: T,
    newConfig: Partial<EditorState['configs'][T]>,
  ) => void
}

/**
 * META 객체를 받아서 default 값들만 모은 객체를 반환합니다.
 * T는 각 컴포넌트의 META 타입을 의미합니다.
 */
function extractDefaults<T extends Record<string, { default: any }>>(meta: T) {
  return Object.entries(meta).reduce((acc, [key, spec]) => {
    acc[key] = spec.default
    return acc
  }, {} as any) // 결과값의 타입은 나중에 상황에 맞게 단언해줍니다.
}

const initConfigs: EditorState['configs'] = {
  Button: extractDefaults(BUTTON_META) as ButtonProps,
  Checkbox: extractDefaults(CHECKBOX_META) as CheckboxProps,
  Card: extractDefaults(CARD_META) as CardProps,
  Input: extractDefaults(INPUT_META) as InputProps,
  RadioGroup: extractDefaults(RADIOGROUP_META) as RadioGroupProps,
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
