import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.button`
  width: 25rem;
  height: 5.5rem;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};

  padding: 2.2rem 1.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.buttonText};

  font-size: 1.6rem;
  font-weight: 500;

  svg {
    font-size: 20px;
  }
`;
