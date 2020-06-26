import React from 'react';
import { useTheme } from './StateContext';
import { ThemeProvider } from 'styled-components';

export const AppProvider = ({ children }) => {
  const { theme } = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
