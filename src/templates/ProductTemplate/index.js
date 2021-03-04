import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { Layout, SEO, AddToCart } from 'components';
import { 
  Title,
  ImgWrapper, 
  Price,
  LeftColumn,
} from './styles';

export const query = graphql`
  query ProductQuery($stripePriceId: String) {
    stripePrice(id: {eq: $stripePriceId}) {
      id
      unit_amount
      product {
        name
        description
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
`;

export default function ProductTemplate({ data: { stripePrice } }) {
  console.log(stripePrice);
  return (
    <Layout>
      <SEO 
        title={stripePrice.product.name} 
        description={stripePrice.product.description}
      />

      <Title>{stripePrice.product.name}</Title>
      <LeftColumn>
        <AddToCart />
        <p>{stripePrice.product.description}</p>
        <Price>${stripePrice.unit_amount / 100}<sup>.00</sup></Price>
      </LeftColumn>
      <ImgWrapper>
        <Image 
          style={{ maxHeight: "55vh" }}
          fluid={stripePrice.product.localFiles[0].childImageSharp.fluid} 
        />
      </ImgWrapper>
    </Layout>
  );
}