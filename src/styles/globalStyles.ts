import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  html {
    font-size: 62.5%;
  }

  body {
    min-width: 32rem;
  }
`;
