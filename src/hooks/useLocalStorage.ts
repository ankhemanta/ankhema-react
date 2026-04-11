/**
Copyright (c) [2025] [ankhemanta]
Filename: useLocalStorage.ts
*/

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

/**
 * A custom hook that persists state in localStorage, mimicking the useState interface.
 * * @template T The type of the value being stored.
 * @param {string} key The key under which the value will be stored in localStorage.
 * @param {T | (() => T)} initialValue The initial value, or a function that returns the initial value.
 * @returns {[T, Dispatch<SetStateAction<T>>]} A tuple containing the current value and a function to update it.
 * @returns [value, setValue, error] 
 */


export default function useLocalStorage<T>(
  key: string,
  initialValue: T | (() => T)
): [T, Dispatch<SetStateAction<T>>, Error | null] {

  const [error, setError] = useState<Error | null>(null);
  // Use a function to resolve the initial state value only once.


  const [value, setValue] = useState<T>(() => {
    try {
      // 1. Get stored value from localStorage
      if (typeof window === 'undefined') {
        return initialValue instanceof Function ? initialValue() : initialValue;
      }

      const item = window.localStorage.getItem(key);
      if (item !== null) {
        // If an item is found, parse and return it
        return JSON.parse(item) as T;
      }
      // 2. If no stored value, use the provided initial value
      return initialValue instanceof Function ? initialValue() : initialValue;
    } catch (err) {
      // If any error occurs (e.g., localStorage access issues), return the initial value
      return initialValue instanceof Function ? initialValue() : initialValue;
    }
  });


  // useEffect to update localStorage whenever the state 'value' changes
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
        if (error) setError(null); // সফল হলে আগের এরর মুছে ফেলা
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    }
  }, [key, value]); // Dependencies: key and the current state value

  // Return the state value and the setter function
  return [value, setValue, error];
}



/*
How to use
const [name, setName, storageError] = useLocalStorage('user_name', 'Guest');

return (
  <div>
    <input value={name} onChange={(e) => setName(e.target.value)} />
    {storageError && <p style={{color: 'red'}}>Error: {storageError.message}</p>}
  </div>
);


*/