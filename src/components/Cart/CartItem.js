import React from 'react';
import { ButtonContainer } from '../Button.js';
// import ProductConsumer from '../../context';

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div>
      <div className="row">
        <div className="col-10 col-lg-2 mx-auto my-2 text-center ">
          <img
            src={img}
            style={{ width: '5rem', height: '5rem' }}
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="col-10 col-lg-2 mx-auto my-2 text-center ">
          <span className="d-lg-none">Product: </span>
          <div className="text-capitalize ">{title}</div>
        </div>
        <div className="col-10 mx-auto text-center col-lg-2  ">
          <div className=" cart-icon " onClick={() => removeItem(id)}>
            <i className="fas fa-trash" />
          </div>
        </div>
        <div className="col-10 col-lg-2 mx-auto my-2 text-center ">
          Price: {price}
        </div>
        <div className="col-10 col-lg-2 mx-auto my-2 text-center ">
          <div className="d-flex justify-content-center">
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
        <div className="col-10 col-lg-2 mx-auto my-2 text-center ">
          <strong>Item total: {total}</strong>
        </div>
      </div>
    </div>
  );
}
