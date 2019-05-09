import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';
// import { ModalContainer } from '../context';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, price, title } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-4 text-center  p-5 h5"
                    >
                      Dodano do koszyka
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">
                        Cena: {price}
                        <span className="ml-1"> zł</span>
                      </h5>
                      <Link to="/cart">
                        <ButtonContainer cart onClick={() => closeModal()}>
                          Koszyk
                        </ButtonContainer>
                      </Link>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          Kontynuuj zakupy
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  #modal {
    background: var(--mainWhite);
  }
`;
