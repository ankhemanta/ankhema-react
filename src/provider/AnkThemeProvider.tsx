/**
Copyright (c) [2025] [ankhemanta]
Filename: AnkThemeProvider.tsx
*/

import React, { useState, useCallback, useMemo } from 'react';

import AnkThemeContext, { ColorsProvidedContext } from '../contexts/AnkThemeContext';
import { ProviderProps } from '../types/themeTypes'






const AnkThemeProvider = (
  {
    children,
    colorsObjectProvide,
    colorsObject,
    defaultThemeMode
  }: ProviderProps
) => {

  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(defaultThemeMode ?? 'light');


  const setDarkTheme = useCallback(() => {
    if (theme === 'dark') return;
    setTheme('dark');
  }, [theme]);

  const setLightTheme = useCallback(() => {
    if (theme === 'light') return;
    setTheme('light');
  }, [theme]);

  const setSystemTheme = useCallback(() => {
    if (theme === "system") return;
    setTheme('system');
  }, [theme]);


  // Memoize the context value to prevent unnecessary re-renders in consumers
  const contextValue = useMemo(() => ({
    theme,
    setTheme,
    setDarkTheme,
    setLightTheme,
    setSystemTheme,

  }), [
    theme,
    setTheme,
    setDarkTheme,
    setLightTheme,
    setSystemTheme,
  ]);

  return (
    <AnkThemeContext.Provider
      value={contextValue}
    >
      <ColorsProvidedContext.Provider
        value={{
          ...colorsObject,
          ...colorsObjectProvide,

        }}
      >
        {children}
      </ColorsProvidedContext.Provider>        
    </AnkThemeContext.Provider>
  );
};
export default AnkThemeProvider;
