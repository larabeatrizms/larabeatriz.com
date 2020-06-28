import { createGlobalStyle } from 'styled-components';
import Roboto from '../assets/fonts/Roboto-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url(${Roboto});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    width: 100%;
    height: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    font-size: 62.5%;
    background-color: ${({ theme }) => theme.colors.background};
  }

  body {
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    padding: 0;
    border: 0;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.colors.title};
  }

  a {
    color: ${({ theme }) => theme.colors.subtitle};
    cursor: pointer;
    border-bottom: 1px solid transparent;
    text-decoration: none;
  }
`;
