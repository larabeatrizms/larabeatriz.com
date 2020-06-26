import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
  background-color: #17171a;

  padding: 20px 5.7rem;

  display: flex;
  justify-content: space-between;

  h1 {
    color: #f7f2fc;

    strong {
      /* color: #bdbdbd; */

      color: ${({ theme }) => theme.colors.cardTittle};
    }
  }

  nav {
    width: 100%;
    max-width: 363px;

    display: flex;
    justify-content: space-between;

    a {
      /* color: #e0e0e0; */

      color: ${({ theme }) => theme.colors.cardTittle};
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
