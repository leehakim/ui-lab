export interface InputProps {
  value?: string
  type?: string
  placeholder?: string
  disabled?: boolean
}

export function Input({
  value = 'text',
  type = 'text',
  placeholder = 'placeholder',
  disabled = false,
}: InputProps) {
  return (
    <div className="input">
      <input type={type} value={value} placeholder={placeholder} disabled={disabled} />
    </div>
  )
}
