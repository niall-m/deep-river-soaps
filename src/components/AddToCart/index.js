import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { AddToCartWrapper, Input, ShowAmount } from './styles';
import { Button } from 'components';

export function AddToCart(props) {  
  const { addItem, removeItem, cartDetails } = useShoppingCart();
  const [quantity, setQuantity] = React.useState(1);
  const [amountInCart, setAmountInCart] = React.useState(
    cartDetails[props.id] ? cartDetails[props.id].quantity : null
  );
  
  React.useEffect(() => {
    setAmountInCart(cartDetails[props.id]?.quantity);
  }, [cartDetails, props.id]);

  const handleChange = (e) => {
    setQuantity(parseInt(e.currentTarget.value), 10);
  };

  const showAmountInCart = () => {
    if (amountInCart > 0) {
      return (
        <ShowAmount>
          <p>{amountInCart} in cart</p> 
          <MdRemoveShoppingCart 
            title="Remove from cart"
            onClick={() => removeItem(props.id)}
          />
        </ShowAmount>
      );
    }
    return <div/>;
  };
  
  return (
    <AddToCartWrapper>
      <Input 
        type="number" 
        min="1" 
        max="12"
        step="1" 
        value={quantity} 
        onChange={handleChange}
      />
      <Button onClick={() => addItem(props, quantity)}>
        Add to cart
      </Button>
      {showAmountInCart()}
    </AddToCartWrapper>
  );
}