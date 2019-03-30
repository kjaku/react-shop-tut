import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotal({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  // console.log('TCL: CartTotal -> value', value);
  // console.log('TCL: CartTotal -> cartTax', cartTax);
  return (
    <React.Fragment>
      <div className="container border">
        <div className="row border">
          <div className="col-10 text-capitalize border  text-primary mt-2 ml-md-auto col-sm-8 text-right ml-ms-auto">
            {/* <Link to="/"> */}
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              onClick={() => clearCart()}
            >
              clear cart
            </button>
            {/* </Link> */}
            <h5>Subtotal: {cartSubtotal} </h5>
            <h5>Tax: {cartTax}</h5>
            <h5>Total: {cartTotal}</h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
