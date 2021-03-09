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
    --color-primary: #39406C;
    --color-primary-light-1: #787EA0;
    --color-primary-light-2: #525983;
    --color-primary-dark-1: #252C58;
    --color-primary-dark-2: #121840;
    
    --color-complementary: #9D8548;
    --color-complementary-light-1: #E9D6A7;
    --color-complementary-light-2: #BFA86D;
    --color-complementary-dark-1: #81682A;
    --color-complementary-dark-2: #5D4710;

    --color-secondary: #9D7548;
    --color-secondary-light-1: #E9CAA7;
    --color-secondary-light-2: #BF986D;
    --color-secondary-dark-1: #81582A;
    --color-secondary-dark-2: #5D3810;
    
    --color-tertiary: #9D9348;
    --color-tertiary-light-1: #E9E1A7;
    --color-tertiary-light-2: #BFB56D;
    --color-tertiary-dark-1: #81762A;
    --color-tertiary-dark-2: #5D5310;

    --color-grey-light: #DCDCDC;

    // responsive breakpoints
    --bp-largest: 75em; // 1200px
    --bp-large: 62.5em; // 1000px
    --bp-medium: 50em; // 800px
    --bp-small: 37.5em; // 600px
  }
  ::selection {
    background-color: var(--color-primary-dark-2);
    color: var(--color-grey-light);
  }
  h1 {
    font-size: 6rem;
    letter-spacing: 1.5rem;
    text-shadow: 0.5rem 0.5rem 1rem rgb(0 0 0 / 80%);

    @media only screen and (max-width: 50em) {
      font-size: 5rem;
      letter-spacing: 1rem;
    }
  }
  h2 {
    font-size: 5rem;
    letter-spacing: 1rem;
    text-shadow: 0.5rem 0.5rem 1rem rgb(0 0 0 / 50%);

    @media only screen and (max-width: 50em) {
      font-size: 3.6rem;
      letter-spacing: .5rem;
    }
  }
  h3 {
    font-size: 2.1rem;
    letter-spacing: .1rem;

    @media only screen and (max-width: 50em) {
      font-size: 1.4rem;
      letter-spacing: 0;
    }
  }
  h4 {
    font-size: 1.8rem;
    letter-spacing: .1rem;

    @media only screen and (max-width: 50em) {
      font-size: 1rem;
    }
  }
  p {
    font-family: "HandNote";
    font-size: 1.8rem;
    line-height: 2;
    text-align: center;
  }
`;