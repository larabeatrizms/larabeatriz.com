import styled, { css } from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.button`
  height: 5.5rem;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};

  padding: 2.2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.buttonText};

  font-size: 1.6rem;
  font-weight: 500;

  a {
    color: ${({ theme }) => theme.colors.buttonText};
  }

  ${props =>
    props.variant === 'outlined' &&
    css`
      border: solid 2px ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
    `}

  ${props =>
    props.size === 'medium' &&
    css`
      font-size: 1.4rem;
      padding: 2.2rem 1.4rem;
    `}

  svg {
    margin-left: 10px;
    font-size: 20px;
  }
`;
