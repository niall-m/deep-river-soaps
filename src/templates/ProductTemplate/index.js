import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query ProductQuery($stripeId: String) {
    stripeProduct(id: {eq: $stripeId}) {
      name
    }
  }
`;

export default function ProductTemplate(props) {
  console.log(props);
  return <h1>{props.data.stripeProduct.name}</h1>;
}