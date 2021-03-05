import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const defaultState = { products: [] };
const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
  const { allStripePrice } = useStaticQuery(graphql`
    {
      allStripePrice(filter: { active: { eq: true }}, sort: {fields: id}) {
        edges {
          node {
            id
            unit_amount
            product {
              id
              name
              localFiles {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <ProductContext.Provider
      value={{
        products: allStripePrice.edges.map(({ node }) => node )
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}