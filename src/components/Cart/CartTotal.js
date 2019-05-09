import React from 'react';
// import PayPalButton from './PayPalButton.js';

export default function CartTotal({ value }) {
  const { cartSubtotal, clearCart } = value;
  // console.log('TCL: CartTotal -> value', value);
  // console.log('TCL: CartTotal -> cartTax', cartTax);

  return (
    <React.Fragment>
      <div className="container ">
        <div className="row ">
          <div className="col-10 text-primary mt-2 ml-md-auto col-sm-8 text-right ml-sm-auto">
            {/* <Link to="/"> */}
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              onClick={() => clearCart()}
            >
              Wyczyść koszyk
            </button>
            {/* </Link> */}
            <h5>
              Suma: {cartSubtotal} <span className="ml-1"> zł</span>
            </h5>
          </div>
          <h5 className="text-danger">
            Płatności odbywają się na oficjalnych stronach organizacji, dlatego
            aby je wykonać należy nacisnąć wszystkie przyciski "Przejdź".
          </h5>
        </div>
      </div>
    </React.Fragment>
  );
}
