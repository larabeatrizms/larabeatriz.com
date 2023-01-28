import React from 'react';
import { Link } from 'gatsby';
import { useTheme } from '../../../context/StateContext';

import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi';
import IconLogo from '../../../assets/images/icons/lara-beatriz-icon.svg';
import Logo from '../../../assets/images/logo.svg';
import ButtonTheme from '../../ButtonTheme';

import { Container } from './styles';

const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <h1>
        <Link to="/">
          <img src={IconLogo} alt="Lara Beatriz" />
          {/* <img src={Logo} alt="Lara Beatriz" /> */}
          Lara <strong>Beatriz</strong>
        </Link>
      </h1>
      <nav>
        <Link to="/">home</Link>
        <a href="https://twitter.com/larabeatrizms"><FiTwitter /></a>
        <a href="https://github.com/larabeatrizms"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/larabeatrizms/"><FiLinkedin /></a>
        {/* <Link to="/blog">blog</Link>
        <Link to="/projetos">projetos</Link>
        <Link to="/contato">contato</Link> */}
        <ButtonTheme onClick={toggleTheme}>tema</ButtonTheme>
      </nav>
    </Container>
  );
};

export default Header;
