import React, { useContext } from 'react'
import GlobalStyle from '../../styles/global'
import { StateContext } from '../../context/StateContext'
import Header from './Header'
// import Footer from './Footer'
// import SideDrawer from './SideDrawer'
// import { Main } from './styles'

const Layout = ({ children }) => {
  const theme = useContext(StateContext)

  return (
    <div className={theme.dark ? 'dark' : 'light'}>
      <GlobalStyle />
      <Header />
      {/* <SideDrawer isOpened={isOpened} openHandler={openHandler} /> */}
      {/* <Main>{children}</Main> */}
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
