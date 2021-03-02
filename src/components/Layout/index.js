import React from 'react';
import { LayoutContainer } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <main>{children}</main>
      </LayoutContainer>
    </>
  );
};

export { Layout };