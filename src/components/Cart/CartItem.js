import React from 'react';
import { ButtonContainer } from '../Button.js';
// import ProductConsumer from '../../context';

export default function CartItem({ item, value }) {
  const { id, title, donateUrl, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  // function openInNewTab(url) {
  //   console.log('zakup click');

  //   let win = window.open(url, '_blank');
  //   // win.focus();
  // }
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
          <span className="d-lg-none">Produkt: </span>
          <div className="text-capitalize ">{title}</div>
        </div>
        <div className="col-10 mx-auto text-center col-lg-1  ">
          <div className=" cart-icon " onClick={() => removeItem(id)}>
            <i className="fas fa-trash" />
          </div>
        </div>
        <div className="col-10 col-lg-1 mx-auto my-2 text-center ">
          {price}
          <span className="ml-1">zł</span>
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
          <strong>
            {total}
            <span className="ml-1">zł</span>
          </strong>
        </div>
        <div className="col-10 col-lg-2 mx-auto my-2 text-center ">
          <strong>
            {/* <Link to="http://google.com"> */}
            <ButtonContainer>
              <a href={donateUrl} target="blank" rel="noopener noreferrer">
                Przejdź
              </a>
            </ButtonContainer>
          </strong>
        </div>
      </div>
    </div>
  );
}
// 5690131
// 5690214
