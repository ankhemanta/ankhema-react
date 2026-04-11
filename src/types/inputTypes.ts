import React from 'react'
// --- TYPE DEFINITIONS ---

export interface InputStyle {
  inputContainer?: React.CSSProperties
  titleStyle?: React.CSSProperties
  startStyle?: React.CSSProperties
  input?: React.CSSProperties
}

// Added correct types for keyboard events
export type PropsType = {
  title?: string
  type?: string
  value?: string
  readOnly?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeText?: (val: string) => void
  style?: React.CSSProperties
  contrnerStyle?: React.CSSProperties
  titleStyle?: React.CSSProperties
  inputContainer?: React.CSSProperties
  startStyle?: React.CSSProperties
  inputStyle?: React.CSSProperties
  placeholder?: string
  themeMode?: 'light' | 'dark' | 'system'
  designMode?: 'normal' | 'awesome' | 'forward'
  // Fixed type and made optional
  onPress?: (event: React.MouseEvent<HTMLDivElement>) => void
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>
  required?: boolean
  width?: string | number | undefined
  ref?: any
}
