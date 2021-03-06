import React from 'react';
import styled from 'styled-components';
import { Layout, SEO, ProductTile } from 'components';
import ProductContext from 'context/ProductContext';

const SoapsGrid = styled.div`
  grid-column: col-start 1 / col-end 8;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  grid-gap: 3rem;
  justify-items: center;
  padding: 2rem 0;

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }
`;

const Soaps = () => {
  const { products } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO title="Soaps" description="All soap products page"/>

      <SoapsGrid>
        {products.map(node => (
          <ProductTile product={node} key={node.product.id} />
        ))}
      </SoapsGrid>
    </Layout>
  );
};

export default Soaps;