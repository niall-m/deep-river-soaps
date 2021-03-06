import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { AddToCartWrapper, Input, Button } from './styles';

export function AddToCart(props) {
  const { addItem, cartDetails } = useShoppingCart();
  const [quantity, setQuantity] = React.useState(1);
  const [amountInCart, setAmountInCart] = React.useState(
    cartDetails[props.id] ? cartDetails[props.id].quantity : null
  );

  
  const handleChange = (e) => {
    setQuantity(parseInt(e.currentTarget.value), 10);
  };
  
  React.useEffect(() => {
    console.log('yes', cartDetails[props.id]?.quantity);
      setAmountInCart(cartDetails[props.id]?.quantity);
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
      {amountInCart > 0 ? <p>{amountInCart} in cart</p> : <p>0 in cart</p>}
    </AddToCartWrapper>
  );
}