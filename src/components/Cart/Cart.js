import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import { ButtonContainer } from '../Button';
import Title from '../Title';
import CartColumns from './CartColumns.js';
import EmptyCart from './EmptyCart.js';
import CartList from './CartList.js';
import CartTotal from './CartTotal.js';

class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            // const {cart, cartSubtotal, cartTotal, cartTax} = value;
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title classname="your" title="cart" />
                  <CartTotal value={value} />
                  <CartColumns />
                  <CartList value={value} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }
          // const {price, title, quantity} = value.detailProduct;
          }
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
