import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { AddToCartWrapper, Input, Button } from './styles';

export function AddToCart(props) {
  const { addItem, cartDetails } = useShoppingCart();
  const [quantity, setQuantity] = React.useState(1);
  
  const handleChange = (e) => {
    setQuantity(parseInt(e.currentTarget.value), 10);
  };

  React.useEffect(() => {
    if (cartDetails[props.id]) {
      setQuantity(cartDetails[props.id].quantity);
    }
  }, [cartDetails]);

  return (
    <AddToCartWrapper>
      <Input type="number" min="1" 
        step="1" value={quantity} 
        onChange={handleChange}
      />
      <Button onClick={() => addItem(props, quantity)}>
        Add to cart
      </Button>
    </AddToCartWrapper>
  );
}