/**
Copyright (c) [2025] [ankhemanta]
Filename: useThemeColors.ts
*/
import { useContext } from 'react'
import AnkThemeContext, { ColorsProvidedContext } from '../contexts/AnkThemeContext'
import { ThemeContextType } from '../types/themeTypes'

import { light as defaultLight, dark as defaultDark } from '../constants/colors'

const defaultColorsObject = {
  light: defaultLight,
  dark: defaultDark,
}

const useThemeColors = (): ThemeContextType | undefined => {
  const context = useContext(AnkThemeContext)

  if (!context) {
    throw new Error(` * useThemeColors must be used within a AnkThemeProvider * \n like this - \n import { AnkThemeProvider } from 'ankhema-react/provider;
    
        <AnkThemeProvider>
         <App />
        </AnkThemeProvider>
    `)
  }

  const { light, dark } = useContext(ColorsProvidedContext) ?? defaultColorsObject

  const reLight = light ?? defaultLight
  const reDark = dark ?? defaultDark

  if (context === undefined) {
    throw new Error(` * useThemeColors must be used within a AnkThemeProvider * \n like this - \n import { AnkThemeProvider } from 'ankhema-react/provider;
    
        <AnkThemeProvider>
         <App />
        </AnkThemeProvider>
    `)
  } else if (context?.theme === 'light') {
    return {
      ...reLight,
      themeMode: 'dark',
    }
  } else if (context?.theme === 'dark') {
    return {
      ...reDark,
      themeMode: 'dark',
    }
  } else if (context?.theme === 'system') {
    return {
      ...reDark,
      themeMode: 'system',
    }
  }
  return {
    ...reDark,
    themeMode: 'system',
  }
}
export default useThemeColors
