/**
Copyright (c) [2025] [ankhemanta]
Filename: AnkThemeContext.ts
*/

import { createContext } from 'react'
import { ThemeContextType, ColorsObject } from '../types/themeTypes'

// Provide a default value that matches the interface
const AnkThemeContext = createContext<ThemeContextType | undefined>(undefined)
export default AnkThemeContext

export const ColorsProvidedContext = createContext<ColorsObject | undefined>(undefined)
