import React from 'react';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import { ProductTileWrapper, Details } from './styles';
import { AddToCart } from 'components';

export function ProductTile({ product }) {
  const { id: priceId, product: item, unit_amount: unitAmount } = product;

  return (
    <ProductTileWrapper>
      <Link to={`/products/${item.name}`}>
        <Image
          fluid={item.localFiles[0].childImageSharp.fluid}
          style={{ 
            borderRadius: "2rem",
            width: "100%",
            height: "40vh",
            cursor: "pointer"
          }}
        />
      </Link>

      <Details>
        <h3>{item.name}</h3>
        <h3>${unitAmount / 100}</h3>
      </Details>

      <AddToCart 
        name={item.name}
        id={priceId}
        price={unitAmount}
        currency="USD"
        image={item.localFiles[0].childImageSharp.fluid}      
      />
    </ProductTileWrapper>
  );
}