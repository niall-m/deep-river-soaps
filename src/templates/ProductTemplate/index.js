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
      currency
      unit_amount
      product {
        id
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
  return (
    <Layout>
      <SEO 
        title={stripePrice.product.name} 
        description={stripePrice.product.description}
      />

      <Title>{stripePrice.product.name}</Title>
      <LeftColumn>
        <AddToCart 
          name={stripePrice.product.name}
          id={stripePrice.product.id}
          price={stripePrice.unit_amount}
          currency={stripePrice.currency}
          image={stripePrice.product.localFiles[0].childImageSharp.fluid}
        />
        <p>{stripePrice.product.description}</p>
        <Price>${stripePrice.unit_amount / 100}.00</Price>
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