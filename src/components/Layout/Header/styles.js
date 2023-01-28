import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.background};

  padding: 20px 5.7rem;

  display: flex;
  justify-content: space-between;

  h1 {
    color: ${({ theme }) => theme.colors.title};

    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      color: ${({ theme }) => theme.colors.title};

      img {
        margin-right: 1.1rem;
      }

      strong {
        margin-left: 0.5rem;
        color: ${({ theme }) => theme.colors.subtitle};
      }
    }
  }

  nav {
    width: 100%;
    max-width: 300px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

export const ToggleTheme = styled.button`
  width: 50px;
  height: 50px;

  border-radius: 50%;

  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props =>
    props.theme.title === 'light' ? colors.grayDarker : colors.grayLight};

  svg {
    font-size: 20px;
    color: ${props =>
      props.theme.title === 'light' ? colors.white : colors.grayBlack};
  }
`;
