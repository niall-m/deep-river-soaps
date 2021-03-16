import React from 'react';
import styled from 'styled-components';
import { Layout, SEO } from 'components';
import { useShoppingCart } from 'use-shopping-cart';

const ThanksGrid = styled.div`
  grid-column: col-start 1 / col-end 8;

  p {
    text-align: center;
  }
`;

const ThankYouPage = () => {
  const { clearCart } = useShoppingCart();

  React.useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <Layout>
      <SEO title="Soaps" description="All soap products page"/>

      <ThanksGrid>
        <p>
          Thank you for your order! You should receive an email 
          confirmation from Stripe.
        </p>
      </ThanksGrid>
    </Layout>
  );
};

export default ThankYouPage;