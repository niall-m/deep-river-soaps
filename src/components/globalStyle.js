import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  :root{
    --color-primary: #c69963;
    --color-primary-dark: #b28451;
    --color-primary-light: #f4ece2;
    --color-secondary: #122e6e;
    --color-secondary-dark: #101d2c;
    --color-grey-light-1: #f9f7f6;
    --color-grey-light-2: #aaa;
    --color-grey-dark-1: #54483a;
    --color-grey-dark-2: #6d5d4b;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%; // 1rem = 10px => 10px/16px = 62.5%
  }
  body {
    line-height: 1.6;
  }
`;