// import { create } from 'zustand'

// interface EditorState {
//   selectedComponent: string | null
//   color: string
//   size: 'sm' | 'md' | 'lg'
//   label: string
//   buttonConfig: {
//     variant: 'primary' | 'outlined'
//     size: 'sm' | 'md' | 'lg'
//     label: string
//   }
//   setColor: (newColor: string) => void
//   setSize: (newSize: 'sm' | 'md' | 'lg') => void
//   setLabel: (newText: string) => void
// }

// export const useEditorStore = create<EditorState>((set) => ({
//   selectedComponent: null,
//   color: '#3b82f6', // 기본 파란색
//   size: 'md',
//   label: 'Click Me',
//   setColor: (newColor) => set({ color: newColor }),
//   setSize: (newSize) => set({ size: newSize }),
//   setLabel: (newText) => set({ label: newText }),
// }))
