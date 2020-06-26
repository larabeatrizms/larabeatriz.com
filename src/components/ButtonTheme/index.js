import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { useTheme } from '../../context/StateContext';

const ButtonTheme = () => {
  const { theme, toggleTheme } = useTheme();

  const [icon, setIcon] = useState(<a>light</a>);

  useEffect(() => {
    setIcon(theme.title === 'light' ? <a>dark</a> : <a>light</a>);
  }, [theme.title]);

  return (
    <Container type="button" onClick={toggleTheme}>
      {icon}
    </Container>
  );
};

export default ButtonTheme;
