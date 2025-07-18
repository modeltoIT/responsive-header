import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import Poppins from '../assets/fonts/Poppins-Regular.woff2';
import Raleway from '../assets/fonts/Raleway-SemiBold.woff2';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${Poppins}) format('woff2');
  }
  
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${Raleway}) format('woff2');
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    min-width: 32rem;
    font-family: 'Poppins', 'Raleway', sans-serif;
    font-weight: 400;
    line-height: 0;
  }
`;
