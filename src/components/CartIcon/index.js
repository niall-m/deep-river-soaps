import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { useShoppingCart } from 'use-shopping-cart';
import { CartWrapper } from './styles';

export function CartIcon() {
  const { cartCount } = useShoppingCart();

  return (
    <CartWrapper>
      <h4>{cartCount > 0 ? cartCount : null}</h4>
      <MdShoppingCart />
    </CartWrapper>
  );
}