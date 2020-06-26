import React from 'react';
import { Link } from 'gatsby';
import { useTheme } from '../../../context/StateContext';

import ButtonTheme from '../../ButtonTheme';

import { Container, ToggleTheme } from './styles';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <h1>
        <Link to="/">
          Lara <strong>Beatriz</strong>
        </Link>
      </h1>
      <nav>
        <Link to="/">home</Link>
        <Link to="/categorias">blog</Link>
        <Link to="/tags">projetos</Link>
        <Link to="/sobre-mim">contato</Link>
        <ButtonTheme onClick={toggleTheme}>tema</ButtonTheme>
      </nav>
    </Container>
  );
};

export default Header;
