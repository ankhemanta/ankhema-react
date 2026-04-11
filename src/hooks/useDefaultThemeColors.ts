/**
Copyright (c) [2025] [ankhemanta]
Filename: useDefaultThemeColors.ts
*/
import { useContext } from 'react';
import AnkThemeContext from '../contexts/AnkThemeContext';
import { light, dark } from '../constants/colors';

import {
  ThemeModeTypo,
  ThemeHookReturn
} from '../types/themeTypes'


/**
 * Custom hook to get theme-dependent colors.
 * It checks the ThemeContext first and falls back to a default based on the optional themeMode parameter.
 * @param themeMode - An optional fallback theme ("light" | "dark"). Defaults to "light" if context is missing.
 * @returns An object containing the resolved colors and the themeMode used.
 */
const useDefaultThemeColors = (themeMode?: ThemeModeTypo): ThemeHookReturn => {

  const context = useContext(AnkThemeContext);


  // --- Context is unavailable (e.g., component is outside a ThemeProvider) ---
  if (context === undefined) {
    if (themeMode === "dark") {
      return {
        ...dark,
        themeMode: "dark"
      };
    } else {
      // Default to "light" if themeMode is "light", undefined, or anything else
      return {
        ...light,
        themeMode: "light"
      };
    }
  };

  // --- Context is available, use the theme from the context ---
  if (context.theme === "light") {
    return {
      ...light,
      themeMode: "light"
    };
  } else if (context.theme === "dark") {
    return {
      ...dark,
      themeMode: "dark"
    };
  } else if (context.theme === "system") {
    // NOTE: Your original logic returns dark colors for "system". 
    // This is fine, but in a real app, you might check a system preference like window.matchMedia.
    return {
      ...dark,
      themeMode: "system"
    };
  };

  // Fallback for exhaustive checking, though should be covered by ThemeMode union type
  return {
    ...light,
    themeMode: "light"
  };

}
export default useDefaultThemeColors;

/*
  if (context === undefined) {
    if (themeMode === "light") {
      return {
        ...light,
        themeMode: "light"
      }
    } else if (themeMode === "dark") {
      return {
        ...dark,
        themeMode: "dark"
      }
    } else {
      return {
        ...light,
        themeMode: "light"
      }
    }
  } else if (context?.theme === "light") {
    return {
      ...light,
      themeMode: "light"
    }
  } else if (context?.theme === "dark") {
    return {
      ...dark,
      themeMode: "dark"
    };
  } else if (context?.theme === "system") {
    return {
      ...dark,
      themeMode: "system"
    };
  };
  





// 1. Define the structure for the color constants (light/dark)
interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  // Add any other color properties you have in your actual light/dark objects
}

// 2. Define the types for the theme mode options


// 3. Define the structure for the ThemeContext value
interface ThemeContextValue {
  theme: ThemeMode; // The theme setting stored in the context
  // Add any other properties your ThemeContext provides (e.g., toggleTheme)
}

// 4. Define the return type of the hook
interface ThemeHookReturn extends ThemeColors {
  themeMode: ThemeMode | undefined; // The resolved or default theme mode
}

// 5. Placeholder for the actual ThemeContext. Replace with your real context export.
// Assuming ThemeContext is typed to hold ThemeContextValue or be undefined
const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);



// --- Custom Hook Implementation ---


const useDefaultThemeColors = (themeMode?: "light" | "dark"): ThemeHookReturn => {







};
*/