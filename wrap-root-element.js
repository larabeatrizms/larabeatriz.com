import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StateProvider } from './scr/context/StateProvider'
import defaultTheme from './src/styles/themes/default.js'

export const wrapRootElement = ({ element }) => (
  <StateProvider>
    <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>
  </StateProvider>
)
