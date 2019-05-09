import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
            caption,
            url,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* {title} */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue ">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* {end title} */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid" />
                  <p className="pl-2 text-secondary">{caption}</p>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                  <div className="text-bold text-title text-muted text-uppercase mt-3 mb-2">
                    <h4>{company}</h4>
                  </div>

                  <p className="text-muted lead">{info}</p>
                  <h4>
                    Adres strony:
                    <a
                      href={url}
                      className="ml-2"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {url}
                    </a>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Cena: <span className="ml-1">{price} zł</span>
                    </strong>
                  </h4>
                  <div>
                    <ButtonContainer
                      className="mr-2"
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? 'Jest' : 'do koszyka'}
                    </ButtonContainer>
                    <Link to="/">
                      <ButtonContainer>Powrót</ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
