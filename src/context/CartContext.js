import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from 'use-shopping-cart';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);

export function CartContextProvider({ children }) {
  return (
    <CartProvider
      mode="client-only"
      stripe={stripePromise}
      successUrl={`/`}
      cancelUrl={`/`}
      currency="USD"
      allowedCountries={['US', 'CA']}
      billingAddressCollection={true}
    >
      {children}
    </CartProvider>
  );
}