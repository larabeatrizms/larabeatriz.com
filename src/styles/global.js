import { createGlobalStyle } from 'styled-components'
import Roboto from '../assets/fonts/Roboto-Regular.ttf'

export default createGlobalStyle`
  @font-face {
      font-family: "Roboto";
      src: url(${Roboto});
  }

body,
  html {
    width: 100%;
    height: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
    font-size: 100%;
    padding-bottom: 60px;
  }

  body {
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji','Segoe UI Emoji', 'Segoe UI Symbol';
    transition: color .5s ease-in-out;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: rgba(0, 0, 0, 0.09);
    border-radius: 100px;
  }

  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.18);
  }

  ::-webkit-scrollbar-thumb:vertical {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb:vertical:active {
    background: rgba(0, 0, 0, 0.61);
    border-radius: 100px;
  }

  pre::-webkit-scrollbar {
    height: 8px;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 100px;
  }

  pre::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }

  pre::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 100px;
  }

  pre::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 100px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: #00a8ff;
    border-bottom: 1px solid transparent;
  }
`
