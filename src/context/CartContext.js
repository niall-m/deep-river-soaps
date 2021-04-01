import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from 'use-shopping-cart';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

export function CartContextProvider({ children }) {
  return (
    <CartProvider
      mode="checkout-session"
      stripe={stripePromise}
      successUrl="https://www.deepriversoaps.com/thanks"
      cancelUrl="https://www.deepriversoaps.com/error"
      currency="USD"
      allowedCountries={['US', 'CA']}
      billingAddressCollection={true}
    >
      {children}
    </CartProvider>
  );
}