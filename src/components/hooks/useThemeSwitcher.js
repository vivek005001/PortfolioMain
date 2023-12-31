import React, { useEffect } from 'react';
import { useState } from 'react';

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefers-color-scheme: dark)';
  const [mode, setMode] = useState('');
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem('theme');

    const handleChange = () => {
      let check;

      if (userPref) {
        check = userPref === 'dark' ? 'dark' : 'light';
      } else {
        check = mediaQuery.matches ? 'dark' : 'light';
        window.localStorage.setItem('theme', check);
      }

      setMode(check);

      if (check === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      // Set initialized to true after the initial setup
      if (!initialized) {
        setInitialized(true);
      }
    };

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [initialized]); // Add initialized to the dependencies array

  useEffect(() => {
    // Only apply the theme change after the initial setup
    if (initialized) {
      if (mode === 'dark') {
        window.localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
      } else {
        window.localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
      }
    }
  }, [mode, initialized]);

  return [mode, setMode];
};

export default useThemeSwitcher;
