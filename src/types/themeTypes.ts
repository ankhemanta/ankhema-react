import React from 'react'
import { ColorPalette } from './colorType'

export interface ColorsObject {
  light?: any
  dark?: any
  system?: any
}
export type ThemeModeTypo = 'light' | 'dark' | 'system'

export interface ThemeHookReturn extends ColorPalette {
  themeMode: ThemeModeTypo | undefined // The resolved or default theme mode
}

export type ProviderProps = {
  children?: React.ReactNode
  colorsObjectProvide?: ColorsObject
  colorsObject?: ColorsObject
  defaultThemeMode?: 'light' | 'dark' | 'system'
}

export type ThemeContextType = {
  theme?: 'light' | 'dark' | 'system'
  setTheme?: React.Dispatch<React.SetStateAction<'light' | 'dark' | 'system'>>
  setDarkTheme?: () => void
  setLightTheme?: () => void
  setSystemTheme?: () => void
}
