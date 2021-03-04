import React from 'react';
import { AddToCartWrapper, Input, Button } from './styles';

export function AddToCart() {
  const [quantity, setQuantity] = React.useState(1);
  
  const handleChange = (e) => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <AddToCartWrapper>
      <form onSubmit={handleSubmit}>
        <Input type="number" min="1" 
          step="1" value={quantity} 
          onChange={handleChange}
          />
        <Button type="submit">Add to cart</Button>
      </form>
    </AddToCartWrapper>
  );
}