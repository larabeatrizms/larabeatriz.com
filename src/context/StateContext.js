import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

const ThemeContext = createContext({
  toggleTheme: () => {},
  theme: dark,
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // const storageValue = localStorage.getItem('theme');

    // if (storageValue) {
    //   return JSON.parse(storageValue);
    // }
    return dark;
  });

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title]);

  useEffect(() => {
    // localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const value = React.useMemo(() => ({ toggleTheme, theme }), [
    toggleTheme,
    theme,
  ]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used whithin a ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
