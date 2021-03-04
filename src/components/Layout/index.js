import React from 'react';
import { LayoutWrapper, Grid } from './styles';
import { Header } from '../Header';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <Grid>{children}</Grid>
    </LayoutWrapper>
  );
};

export { Layout };