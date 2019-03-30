import React from 'react';
import CartItem from './CartItem';

export default function CartList({ value }) {
  const { cart } = value;

  return (
    <div className="container-fluid">
      {cart.map(i => {
        return <CartItem item={i} key={i.id} value={value} />;
      })}
    </div>
  );
}
