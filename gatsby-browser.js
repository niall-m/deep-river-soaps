import React from 'react';
import { GlobalStyle } from './src/components/globalStyle';

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyle />
    { element }
  </>
);