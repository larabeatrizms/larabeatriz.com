import React from 'react';
import GlobalStyle from '../../styles/global';
import { useTheme } from '../../context/StateContext';
import Header from './Header';
import Footer from './Footer';
import { Container, Main } from './styles';

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Main role="main">{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
