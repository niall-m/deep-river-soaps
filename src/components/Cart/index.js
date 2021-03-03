import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartWrapper } from './styles';

export function Cart() {
  return (
    <CartWrapper>
      <FaShoppingCart size="3rem" />
    </CartWrapper>
  );
}