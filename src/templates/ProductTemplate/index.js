import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO } from 'components';

export const query = graphql`
  query ProductQuery($stripeId: String) {
    stripeProduct(id: {eq: $stripeId}) {
      name
      description
    }
  }
`;

export default function ProductTemplate({ data }) {
  console.log(data);

  return (
    <Layout>
      <SEO 
        title={data.stripeProduct.name} 
        description={data.stripeProduct.description}
      />
      <h1>{data.stripeProduct.name}</h1>
    </Layout>
  );
}