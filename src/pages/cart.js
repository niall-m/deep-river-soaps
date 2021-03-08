import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';
import { FaTrash } from 'react-icons/fa';
import { Layout, SEO } from 'components';

const CartGrid = styled.div`
  grid-column: col-start 1 / col-end 8;
  
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(min-content, 1fr));
  grid-gap: 2rem;
  padding: 2rem 0;
`;

const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 40px;
  justify-items: center;
  border-bottom: 1px solid var(--color-primary-dark-2);
  font-weight: bold;
`;

const CartEntryWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 40px;
  justify-items: center;
  align-items: center;
  font-weight: bold;
  text-align: center;
`;

const QuantityAdder = styled.div`
  display: flex;
  align-items: center;

  > label {
    margin: 0 1rem 0 0;
  }
`;

const DeleteButton = styled.button`
  border: none;
  color: var(--color-primary-dark-2);
  background-color: transparent;
  cursor: pointer;
  transition: all .1s;

  &:active {
    transform: scale(.9);
  }

  &:focus {
    outline: none;
  }
`;

const Empty = styled.p`
  text-align: center;
`;

const Cart = () => {
  const { cartDetails, removeItem, setItemQuantity } = useShoppingCart();

  const entries = [];
  for (const productId in cartDetails) {
    
    if (productId) {
      const entry = cartDetails[productId];

      const options = [];
      for (let quantity = 1; quantity <= 20; ++quantity) {
        options.push(<option key={quantity} value={quantity}>{quantity}</option>);
      }
      
      const formattedPrice = formatCurrencyString({ 
        value: entry.price,
        currency: 'USD' 
      });
      
      entries.push(
        <CartEntryWrapper key={productId}>
          <figure>
            <Image
              fluid={entry.image}
              style={{
                borderRadius: "2rem",
                width: "20vw",
                height: "20vh",
              }}
              alt={entry.name}
            />
            <figcaption>{entry.name}</figcaption>
          </figure>

          <h4>{formattedPrice}</h4>
          
          <QuantityAdder>
            <select
              id="quantity-select"
              defaultValue={entry.quantity}
              onChange={(e) => {
                setItemQuantity(productId, e.target.value);
              }}
            >
              {options}
            </select>
          </QuantityAdder>

          <h4>{entry.formattedValue}</h4>

          <DeleteButton onClick={() => removeItem(productId)}>
            <FaTrash size="1.4rem" />
          </DeleteButton>
        </CartEntryWrapper>
      );
    }
  }

  return (
    <Layout>
    <SEO title="Cart" description="Cart page"/>
    <CartGrid>
      {entries.length ?
        <>
          <CartHeader>
            <h3>Product</h3>
            <h3>Unit Price</h3>
            <h3>Quantity</h3>
            <h3>Amount</h3>
          </CartHeader>
          {entries}
        </>
        : <Empty>You currently don't have any items in your cart.</Empty>
      }
    </CartGrid>
  </Layout>
  );
};

export default Cart;