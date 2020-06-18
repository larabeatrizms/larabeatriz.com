import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StateProvider } from '../src/context/StateContext'
import defaultTheme from '../src/styles/themes/default.js'

export const wrapRootElement = ({ element }) => {
  console.log('entrou')
  return (
    <StateProvider>
      <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>
    </StateProvider>
  )
}
