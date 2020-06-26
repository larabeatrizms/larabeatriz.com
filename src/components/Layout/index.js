import React from 'react';
import GlobalStyle from '../../styles/global';
import { useTheme } from '../../context/StateContext';
import Header from './Header';
import Footer from './Footer';
import { Main } from './styles';

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main role="main">{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;
