import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { Layout, SEO, Button } from 'components';

const CartGrid = styled.div`
  grid-column: col-start 1 / col-end 8;
  
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(min-content, 1fr));
  grid-gap: 2rem;
  padding: 2rem 0;

  > button {
    justify-self: end;

    @media only screen and (min-width: 50em) {
      width: 30%;
    }
  }
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
  align-items: center;
  font-weight: bold;
  text-align: center;

  border-bottom: 1px dashed var(--color-primary-dark-2);

  figcaption {
    padding: 1rem;
  }

  > svg { 
    height: 2rem;
    width: 2rem;
    transition: all .1s;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(.9);
    }

    @media only screen and (max-width: 50em) {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`;

const QuantityAdder = styled.div`
  > select {
    padding: 1rem;
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

const Total = styled.p`
  justify-self: end;

  > span {
    font-size: 1rem;
    font-weight: bold;
  }
`;

const Empty = styled.p`
  text-align: center;
  font-size: 3rem;
`;

const Cart = () => {
  const { 
    cartDetails,
    totalPrice,
    removeItem,
    setItemQuantity,
    redirectToCheckout
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
              style={{ borderRadius: "2rem" }}
              alt={entry.name}
            />
            <figcaption>{entry.name}</figcaption>
          </figure>

          <h3>{formattedPrice}</h3>
          
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

          <h3>{entry.formattedValue}</h3>

          <MdRemoveShoppingCart 
            title="Remove from cart"
            onClick={() => removeItem(productId)}            
          />
        </CartEntryWrapper>
      );
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // create stripe checkout session with serverless netlify cloud function
    const response = await fetch('/.netlify/functions/create-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cartDetails)
    });

    if (response.status >= 200 && response.status <= 299) {
      const jsonResponse = await response.json();
      redirectToCheckout({ sessionId: jsonResponse.sessionId });
    } else {
      // Handle errors
      console.log(response.status, response.statusText);
      alert(response.statusText);
    }
  };
  
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
            <Button onClick={handleSubmit}>Checkout</Button>
          </>
          : <Empty>You currently don't have any items in your cart.</Empty>
        }
      </CartGrid>
    </Layout>
  );
};

export default Cart;