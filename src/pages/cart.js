import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';
import { FaTrash } from 'react-icons/fa';
import { Layout, SEO, Button } from 'components';

const CartGrid = styled.div`
  grid-column: col-start 1 / col-end 8;
  
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(min-content, 1fr));
  grid-gap: 2rem;
  padding: 2rem 0;

  > button {
    justify-self: end;
    width: 30%;
  }
`;

const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 40px;
  justify-items: center;
  border-bottom: 2px solid var(--color-primary-dark-2);
  font-weight: bold;
`;

const CartEntryWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 40px;
  justify-items: center;
  align-items: center;
  font-weight: bold;
  text-align: center;

  border-bottom: 1px dashed var(--color-primary-dark-2);

  figcaption {
    padding: 1rem;
  }
`;

const QuantityAdder = styled.div`
  display: flex;
  align-items: center;

  > select {
    padding: .5rem;
    font-family: 'AlwaysHere';
    font-size: 2rem;
    font-weight: bold;
    border: none;
    border-radius: .5rem;
    color: var(--color-primary-dark-2);
    background-color: var(--color-secondary-light-1);

    &:focus, &:active {
      outline: none;
    }

    @media only screen and (max-width: 50em) {
      font-size: 1.2rem;
      padding: .2rem;
    }
  }
`;

const DeleteButtonIcon = styled.button`
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

const Total = styled.p`
  justify-self: end;
  width: 30%;

  > span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const Cart = () => {
  const { 
    cartDetails, totalPrice, removeItem,
    setItemQuantity, redirectToCheckout
  } = useShoppingCart();

  const cartEntries = [];
  for (const productId in cartDetails) {
    
    if (productId) {
      const entry = cartDetails[productId];

      const options = [];
      for (let quantity = 1; quantity <= 12; ++quantity) {
        options.push(
          <option key={quantity} value={quantity}>{quantity}</option>
        );
      }
      
      const formattedPrice = formatCurrencyString({ 
        value: entry.price,
        currency: 'USD' 
      });
      
      cartEntries.push(
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
              defaultValue={entry.quantity}
              onChange={(e) => {
                setItemQuantity(productId, e.target.value);
              }}
            >
              {options}
            </select>
          </QuantityAdder>

          <h4>{entry.formattedValue}</h4>

          <DeleteButtonIcon onClick={() => removeItem(productId)}>
            <FaTrash size="1.4rem" />
          </DeleteButtonIcon>
        </CartEntryWrapper>
      );
    }
  }

  return (
    <Layout>
      <SEO title="Cart" description="Cart page"/>
      <CartGrid>
        {cartEntries.length ?
          <>
            <CartHeader>
              <h3>Product</h3>
              <h3>Unit Price</h3>
              <h3>Quantity</h3>
              <h3>Amount</h3>
            </CartHeader>
            {cartEntries}
            <Total>
              Total: {formatCurrencyString({ 
                value: totalPrice, currency: 'USD' 
              })} <span>(+ shipping & tax)</span>
            </Total>
            <Button onClick={() => redirectToCheckout()}>Checkout</Button>
          </>
          : <p>You currently don't have any items in your cart.</p>
        }
      </CartGrid>
    </Layout>
  );
};

export default Cart;