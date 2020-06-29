import React, { useState, useEffect } from 'react';

import { FiArrowUpRight } from 'react-icons/fi';
import { Container } from './styles';

const Button = ({ children }) => {
  return (
    <Container type="button" onClick={() => console.log('asjdfhkasd')}>
      {children}
      <FiArrowUpRight />
    </Container>
  );
};

export default Button;
