import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Layout, SEO } from 'components';

export const query = graphql`
  query ProductQuery($stripeId: String) {
    stripeProduct(id: {eq: $stripeId}) {
      name
      description
      localFiles {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

export default function ProductTemplate({ data }) {
  console.log(data.stripeProduct.localFiles);

  return (
    <Layout>
      <SEO 
        title={data.stripeProduct.name} 
        description={data.stripeProduct.description}
      />
      <h1>{data.stripeProduct.name}</h1>
      <p>{data.stripeProduct.description}</p>
      <Image fluid={data.stripeProduct.localFiles[0].childImageSharp.fluid} />
    </Layout>
  );
}