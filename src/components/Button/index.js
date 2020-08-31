import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import { FiArrowUpRight } from 'react-icons/fi';
import { Container } from './styles';

const Button = ({ children, ...rest }) => {
  console.log(rest);
  return (
    <Container
      type="button"
      onClick={() => console.log('asjdfhkasd')}
      {...rest}
    >
      <Link to="/page-2">--</Link>
      {children}
      <FiArrowUpRight />
    </Container>
  );
};

export default Button;
