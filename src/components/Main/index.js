import React, { useState, useEffect } from 'react';

import { Container } from './styles';

const Button = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Button;
