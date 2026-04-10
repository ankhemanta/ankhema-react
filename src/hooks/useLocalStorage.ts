/**
Copyright (c) [2025] [ankhemanta]
Filename: useLocalStorage.ts
*/

import { useState, useEffect,  Dispatch, SetStateAction } from 'react';

/**
 * A custom hook that persists state in localStorage, mimicking the useState interface.
 * * @template T The type of the value being stored.
 * @param {string} key The key under which the value will be stored in localStorage.
 * @param {T | (() => T)} initialValue The initial value, or a function that returns the initial value.
 * @returns {[T, Dispatch<SetStateAction<T>>]} A tuple containing the current value and a function to update it.
 */

export default function useLocalStorage<T>(key: string, initialValue: T | (() => T)): [T, Dispatch<SetStateAction<T>>] {
  // Use a function to resolve the initial state value only once.
  const [value, setValue] = useState<T>(() => {
    try {
      // 1. Get stored value from localStorage
      const item = window.localStorage.getItem(key);

      if (item !== null) {
        // If an item is found, parse and return it
        return JSON.parse(item) as T;
      }

      // 2. If no stored value, use the provided initial value
      return initialValue instanceof Function ? initialValue() : initialValue;

    } catch (error) {
      // If any error occurs (e.g., localStorage access issues), return the initial value
      throw new Error(`Error reading localStorage key “${key}”:`, error);
      
     /// return initialValue instanceof Function ? initialValue() : initialValue;
    }
  });

  // useEffect to update localStorage whenever the state 'value' changes
  useEffect(() => {
    try {
      // Convert the state value to a JSON string
      const valueToStore = JSON.stringify(value);
      window.localStorage.setItem(key, valueToStore);
    } catch (error) {
      console.error(`Error setting localStorage key “${key}”:`, error);
    }
  }, [key, value]); // Dependencies: key and the current state value

  // Return the state value and the setter function
  return [value, setValue];
}
