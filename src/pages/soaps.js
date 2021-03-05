import React from 'react';
import styled from 'styled-components';
import { Layout, SEO, ProductTile } from 'components';
import ProductContext from 'context/ProductContext';

const ContentGrid = styled.div`
  grid-column: col-start 1 / col-end 8;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem;
  justify-items: center;
  padding: 2rem 0;
`;

const Soaps = () => {
  const { products } = React.useContext(ProductContext);

  return (
    <Layout>
      <SEO title="Soaps" description="All soap products page"/>

      <ContentGrid>
        {products.map(node => (
          <ProductTile product={node} key={node.product.id} />
        ))}
      </ContentGrid>
    </Layout>
  );
};

export default Soaps;