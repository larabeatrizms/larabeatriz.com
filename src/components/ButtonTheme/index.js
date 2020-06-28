import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { useTheme } from '../../context/StateContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ButtonTheme = () => {
  const { theme, toggleTheme } = useTheme();

  const [icon, setIcon] = useState(<FiSun />);

  useEffect(() => {
    setIcon(theme.title === 'light' ? <FiMoon /> : <FiSun />);
  }, [theme.title]);

  return (
    <Container type="button" onClick={toggleTheme}>
      {icon}
    </Container>
  );
};

export default ButtonTheme;
