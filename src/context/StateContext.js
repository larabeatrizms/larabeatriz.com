import React, { useState, useEffect, createContext } from 'react'

export const StateContext = createContext({
  dark: false,
  toggleDark: () => {},
})

export const StateProvider = ({ children }) => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const darkTheme = localStorage.getItem('@joaopedro.cc/dark-theme')

    if (darkTheme) {
      const lsDark = JSON.parse(darkTheme)
      setDark(lsDark)
      localStorage.setItem('@joaopedro.cc/dark-theme', JSON.stringify(lsDark))
    }
  }, [])

  const toggleDark = () => {
    localStorage.setItem('@joaopedro.cc/dark-theme', JSON.stringify(!dark))
    setDark(!dark)
  }

  return (
    <StateContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
