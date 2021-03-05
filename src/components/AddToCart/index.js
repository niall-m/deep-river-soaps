import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { AddToCartWrapper, Input, Button } from './styles';

export function AddToCart(props) {
  const { addItem } = useShoppingCart();
  const [quantity, setQuantity] = React.useState(1);
  
  const handleChange = (e) => {
    setQuantity(e.currentTarget.value);
  };
  
  return (
    <AddToCartWrapper>
      <Input type="number" min="1" 
        step="1" value={quantity} 
        onChange={handleChange}
      />
      <Button onClick={() => addItem(props, quantity)}>Add to cart</Button>
    </AddToCartWrapper>
  );
}