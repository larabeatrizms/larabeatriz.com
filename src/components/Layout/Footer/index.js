import React from 'react';

import { FiHeart } from 'react-icons/fi';
import colors from '../../../styles/colors';

import { Container } from './styles';

const Footer = () => {
  const icon = <FiHeart color={colors.violet} size={15} />;

  return (
    <Container>
      <footer>
        <a href="https://github.com/larabeatrizms">By Lara Beatriz</a>
      </footer>
      <footer>
        made with
        {icon}
        {', '}
        enjoy
      </footer>
    </Container>
  );
};

export default Footer;
