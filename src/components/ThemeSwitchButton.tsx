import React, { useState, useCallback, useMemo } from 'react';

import {
  ThemeModeTypo as Theme,   // Define the Theme type
} from '../types/themeTypes';


// Define the component's props
interface ThemeSwitchButtonProps {
  /**
   * Function called when the theme is switched.
   * @param newTheme The newly selected theme.
   */
  onThemeChange: (newTheme: Theme) => void;
  /**
   * The initial theme state. Defaults to "system".
   */
  initialTheme?: Theme;
};





/**
 * A button component to switch between "light", "dark", and "system" themes.
 */
const ThemeSwitchButton: React.FC<ThemeSwitchButtonProps> = ({
  onThemeChange,
  initialTheme = "system",
}) => {
  // 1. State: Manage the current theme internally
  const [theme, setTheme] = useState<Theme>(initialTheme);

  // 2. The defined cycle order
  const themeCycle: Theme[] = useMemo(() => ["light", "dark", "system"], []);

  // 3. Logic: Function to find the next theme in the cycle
  const getNextTheme = useCallback((current: Theme): Theme => {
    const currentIndex = themeCycle.indexOf(current);
    const nextIndex = (currentIndex + 1) % themeCycle.length;
    return themeCycle[nextIndex];
  }, [themeCycle]);

  // 4. Handler: Function executed on button click
  const handleSwitchTheme = useCallback(() => {
    const nextTheme = getNextTheme(theme);

    // Update internal state
    setTheme(nextTheme);

    // Call the external handler
    onThemeChange(nextTheme);

  }, [theme, getNextTheme, onThemeChange]);

  // 5. Utility: Get a label or icon based on the current theme
  const getThemeLabel = (current: Theme): string => {
    switch (current) {
      case 'light':
        return '☀️ Light Mode';
      case 'dark':
        return '🌙 Dark Mode';
      case 'system':
        return '⚙️ System Default';
      default:
        return 'Theme Switch';
    }
  };

  return (
    <button
      onClick={handleSwitchTheme}
      // Simple CSS for demonstration
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
        color: theme === 'dark' ? '#fff' : '#000',
        borderRadius: '8px',
        border: 'none',
      }}
      title={`Current Theme: ${theme}. Click to switch.`}
    >
      {getThemeLabel(theme)}
    </button>
  );
};

export default ThemeSwitchButton;