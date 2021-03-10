import React from 'react';
import styled from 'styled-components';
import { Layout, SEO } from 'components';

const ErrorPageGrid = styled.div`
  grid-column: col-start 1 / col-end 8;
`;

const ErrorPage = () => {
  return (
    <Layout>
      <SEO title="Soaps" description="All soap products page"/>

      <ErrorPageGrid>
        <p>
          Sorry, something appears to have gone wrong 
          during your checkout with Stripe.
        </p>
        <p>
          If this problem persists, feel free to contact us directly.
        </p>
      </ErrorPageGrid>
    </Layout>
  );
};

export default ErrorPage;