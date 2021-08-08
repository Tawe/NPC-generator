import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html, body, #root {
    padding: 0;
    background-color: black;
    height: 100vh;
    width: 100vw;
  }
`;
