import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useShoppingCart } from 'use-shopping-cart';
import { CartWrapper } from './styles';

export function CartIcon() {
  const { cartCount } = useShoppingCart();

  return (
    <CartWrapper>
      <h4>{cartCount}</h4>
      <FaShoppingCart />
    </CartWrapper>
  );
}