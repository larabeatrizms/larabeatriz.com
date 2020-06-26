import React from 'react';
import { AppProvider } from '../src/context/AppProvider';
import { ThemeProvider } from '../src/context/StateContext';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <AppProvider>{element}</AppProvider>
    </ThemeProvider>
  );
};
