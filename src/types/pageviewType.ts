import React from 'react'

export type PageProps = {
  children?: React.ReactNode
  style?: React.CSSProperties
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>
  onPress?: (event: React.MouseEvent<HTMLDivElement>) => void
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
  themeMode?: 'light' | 'dark' | 'system'
}
