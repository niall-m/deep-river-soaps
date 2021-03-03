import { createGlobalStyle } from 'styled-components';
import '../fonts/font.css';

export const GlobalStyle = createGlobalStyle`
  // reset
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 62.5%; // 1rem = 10px => 10px/16px = 62.5%
    box-sizing: border-box;
    font: inherit;
    vertical-align: baseline;

    @media only screen and (max-width: 50em) {
      font-size: 50%;
    }
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  body {
    line-height: 1.6;
    font-family: 'AlwaysHere';
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  // global styles/vars
  :root {
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
  h1 {
    font-size: 6rem;
    letter-spacing: 1.5rem;
    text-shadow: 0.5rem 0.5rem .5rem rgb(0 0 0 / 30%);
  }
`;